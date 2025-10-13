package com.example.atividade.service;


import com.example.atividade.model.Endereco;
import com.example.atividade.model.Funcionario;
import com.example.atividade.repository.EnderecoRerpository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {
    @Autowired
    private EnderecoRerpository enderecoRerpository;

    public List<Endereco> ListarEnderecos(){
        return enderecoRerpository.findAll();
    }

    public Endereco salvar(Endereco endereco) {
        if (enderecoRerpository.findByNumero(endereco.getNumero()).isPresent()) {
            throw new RuntimeException("Número já cadastrado");
        }
        return enderecoRerpository.save(endereco);
    }

    public Endereco atualizar(Long id, Endereco endereco) {
        if (!enderecoRerpository.existsById(id)) {
            throw new RuntimeException("Endereço não encontrado");
        }
        endereco.setId(id);
        return enderecoRerpository.save(endereco);
    }

    public void deletar(Long id) {
        if (!enderecoRerpository.existsById(id)) {
            throw new RuntimeException("Endereço não encontrado");
        }
        enderecoRerpository.deleteById(id);
    }
}
