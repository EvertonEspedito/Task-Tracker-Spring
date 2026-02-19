package com.example.TaskTracker.repository;

import com.example.TaskTracker.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
}