package com.example.atividade.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Setor {
    ENGENHARIA("Engenharia"),
    SAUDE("Saúde"),
    JURIDICO("Jurídico");

    private final String descricao;
    Setor(String descricao) {
        this.descricao = descricao;
    }

    @JsonValue
    public String getDescricao() {
        return descricao;
    }
}
