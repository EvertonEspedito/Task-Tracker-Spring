package com.example.TaskTracker.dto;

import jakarta.validation.constraints.NotBlank;

public class TarefaRequestDTO {
    @NotBlank(message = "Titulo não pode ser vazia")
    private String titulo;

    @NotBlank(message = "Descrição não pode ser vazia")
    private String descricao;

    private boolean concluida;

    public String getTitulo() {
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public boolean isConcluida() {
        return concluida;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setConcluida(boolean concluida) {
        this.concluida = concluida;
    }
}
