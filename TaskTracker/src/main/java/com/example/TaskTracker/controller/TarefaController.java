package com.example.TaskTracker.controller;


import jakarta.validation.Valid;
import com.example.TaskTracker.dto.TarefaRequestDTO;
import com.example.TaskTracker.dto.TarefaResponseDTO;
import com.example.TaskTracker.service.TarefaService;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    private final TarefaService service;

    public TarefaController(TarefaService service) {
        this.service = service;
    }

    @PostMapping
    public TarefaResponseDTO criar(@RequestBody @Valid TarefaRequestDTO dto) {
        return service.criar(dto);
    }

    @GetMapping
    public List<TarefaResponseDTO> listar() {
        return service.listar();
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
