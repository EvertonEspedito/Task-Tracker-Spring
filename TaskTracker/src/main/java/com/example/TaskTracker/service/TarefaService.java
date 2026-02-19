package com.example.TaskTracker.service;

import com.example.TaskTracker.dto.TarefaRequestDTO;
import com.example.TaskTracker.dto.TarefaResponseDTO;
import com.example.TaskTracker.model.Tarefa;
import com.example.TaskTracker.repository.TarefaRepository;
import org.springframework.stereotype.Service;
import com.example.TaskTracker.exception.ResourceNotFoundException;

import java.util.List;

@Service
public class TarefaService {

    private final TarefaRepository repository;

    public TarefaService(TarefaRepository repository) {
        this.repository = repository;
    }

    public TarefaResponseDTO criar(TarefaRequestDTO dto) {
        Tarefa tarefa = new Tarefa();
        tarefa.setTitulo(dto.getTitulo());
        tarefa.setDescricao(dto.getDescricao());
        tarefa.setConcluida(dto.isConcluida());

        Tarefa salva = repository.save(tarefa);

        return new TarefaResponseDTO(
                salva.getId(),
                salva.getTitulo(),
                salva.getDescricao(),
                salva.isConcluida()
        );
    }

    public List<TarefaResponseDTO> listar() {
        return repository.findAll().stream()
                .map(t -> new TarefaResponseDTO(
                        t.getId(),
                        t.getTitulo(),
                        t.getDescricao(),
                        t.isConcluida()))
                .toList();
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public TarefaResponseDTO atualizar(Long id, TarefaRequestDTO dto) {

        Tarefa tarefa = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Tarefa com ID " + id + " não encontrada"));

        tarefa.setTitulo(dto.getTitulo());
        tarefa.setDescricao(dto.getDescricao());
        tarefa.setConcluida(dto.isConcluida());

        Tarefa atualizada = repository.save(tarefa);

        return new TarefaResponseDTO(
                atualizada.getId(),
                atualizada.getTitulo(),
                atualizada.getDescricao(),
                atualizada.isConcluida()
        );
    }
}
