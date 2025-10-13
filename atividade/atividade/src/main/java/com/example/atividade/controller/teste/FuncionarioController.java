package com.example.atividade.controller.teste;


import com.example.atividade.model.Endereco;
import com.example.atividade.model.Funcionario;
import com.example.atividade.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping
    public ResponseEntity<List<Funcionario>> ListarFuncionarios() {
        List<Funcionario> funcionarios = funcionarioService.ListarFuncionarios();
        return ResponseEntity.ok(funcionarios);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvarFuncionario(@RequestBody Funcionario funcionario) {
        try {
            funcionarioService.salvar(funcionario);
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    Map.of("mensagem", "Funcionário cadastrado com sucesso!")
            );
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    Map.of("erro", e.getMessage())
            );
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizarFuncionario(@PathVariable Long id, @RequestBody Funcionario funcionario) {
        try {
            funcionarioService.atualizar(id, funcionario);
            return ResponseEntity.ok(
                    Map.of("mensagem", "Funcionário atualizado com sucesso!")
            );
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    Map.of("erro", e.getMessage())
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarFuncionario(@PathVariable Long id) {
        try {
            funcionarioService.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    Map.of("erro", e.getMessage())
            );
        }
    }
}
