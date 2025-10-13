package com.example.atividade.service;

import com.example.atividade.model.Funcionario;
import com.example.atividade.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FuncionarioService {
    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public List<Funcionario> ListarFuncionarios(){
        return funcionarioRepository.findAll();
    }

    public Funcionario salvar(Funcionario funcionario) {
        if (funcionarioRepository.findByCpf(funcionario.getCpf()).isPresent()) {
            throw new RuntimeException("CPF já cadastrado");
        }
        return funcionarioRepository.save(funcionario);
    }

    public Funcionario atualizar(Long id, Funcionario funcionario) {
        if (!funcionarioRepository.existsById(id)) {
            throw new RuntimeException("Funcionário não encontrado");
        }
        funcionario.setId(id);
        return funcionarioRepository.save(funcionario);
    }

    public void deletar(Long id) {
        if (!funcionarioRepository.existsById(id)) {
            throw new RuntimeException("Funcionário não encontrado");
        }
        funcionarioRepository.deleteById(id);
    }
}
