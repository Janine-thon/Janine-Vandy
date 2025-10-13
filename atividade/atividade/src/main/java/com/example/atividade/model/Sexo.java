package com.example.atividade.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Sexo {
    MASCULINO("Masculino"),
    FEMININO("Feminino"),;

    private final String descricao;
    Sexo(String descricao) {
        this.descricao = descricao;
    }

    @JsonValue
    public String getDescricao() {
        return descricao;
    }
}
