package com.example.atividade.controller.teste;


import com.example.atividade.model.Endereco;
import com.example.atividade.service.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @GetMapping
    public ResponseEntity<List<Endereco>> ListarEnderecos() {
        List<Endereco> enderecos = enderecoService.ListarEnderecos();
        return ResponseEntity.ok(enderecos);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvarEndereco(@RequestBody Endereco endereco) {
        try {
            enderecoService.salvar(endereco);
            return ResponseEntity.status(HttpStatus.CREATED).body(
                    Map.of("mensagem", "Endereço cadastrado com sucesso!")
            );
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    Map.of("erro", e.getMessage())
            );
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizarEndereco(@PathVariable Long id, @RequestBody Endereco endereco) {
        try {
            enderecoService.atualizar(id, endereco);
            return ResponseEntity.ok(
                    Map.of("mensagem", "Endereço atualizado com sucesso!")
            );
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    Map.of("erro", e.getMessage())
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deletarEndereco(@PathVariable Long id) {
        try {
            enderecoService.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    Map.of("erro", e.getMessage())
            );
        }
    }
}
