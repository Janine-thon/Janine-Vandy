package com.example.atividade.model;

import com.fasterxml.jackson.annotation.JsonValue;

public enum EstadoCivil {
    SOLTEIRO("Solteiro"),
    CASADO("Casado"),
    DIVORCIADO("Divorciado"),
    VIUVO("Viúvo"),;

    private final String descricao;
    EstadoCivil(String descricao) {
        this.descricao = descricao;
    }

    @JsonValue
    public String getDescricao() {
        return descricao;
    }
}
