package com.example.atividade.controller.teste;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/teste")
public class controller {
    @GetMapping
    public String hello(){
        return "Hello World!";
    }
}
