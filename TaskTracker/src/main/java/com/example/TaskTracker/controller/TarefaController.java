package com.example.TaskTracker.controller;


import com.example.TaskTracker.model.Tarefa;
import com.example.TaskTracker.repository.TarefaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    private final TarefaRepository repository;

    public TarefaController(TarefaRepository repository) {
        this.repository = repository;
    }

    // Criar tarefa
    @PostMapping
    public Tarefa criar(@RequestBody Tarefa tarefa) {
        return repository.save(tarefa);
    }

    // Listar tarefas
    @GetMapping
    public List<Tarefa> listar() {
        return repository.findAll();
    }

    // Atualizar status
    @PutMapping("/{id}")
    public Tarefa atualizar(@PathVariable Long id, @RequestBody Tarefa novaTarefa) {
        return repository.findById(id).map(tarefa -> {
            tarefa.setDescricao(novaTarefa.getDescricao());
            tarefa.setConcluida(novaTarefa.isConcluida());
            return repository.save(tarefa);
        }).orElseThrow();
    }

    // Deletar tarefa
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
