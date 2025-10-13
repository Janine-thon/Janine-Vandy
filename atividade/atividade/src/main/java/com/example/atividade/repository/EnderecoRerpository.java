package com.example.atividade.repository;


import com.example.atividade.model.Endereco;
import com.example.atividade.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface EnderecoRerpository extends JpaRepository<Endereco, Long> {
    Optional<Endereco> findByNumero(String numero);
}
