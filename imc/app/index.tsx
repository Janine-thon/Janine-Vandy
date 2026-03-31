import React, {useState} from "react";
import { View, Text,TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] =useState("");
  const [altura, setAltura] =useState("");
  const [situacao, setSituacao] =useState("");
  const [total, setTotal] =useState("");

  function calcular(){
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    const imc = pesoNum / (alturaNum * alturaNum);

    if(imc < 18.5){
      setSituacao("Magreza");
    } else if(imc >= 18.5 && imc < 25){
      setSituacao("Peso normal");
    } else if(imc >= 25 && imc < 30){
      setSituacao("Sobrepeso");
    } else {
      setSituacao("Obesidade");
    }

    setTotal(imc.toFixed(1));

  }

  return (

    <View style={estilos.caixa}>
      <Text style={estilos.titulo}>Calculadora de IMC 2026</Text>
      <TextInput
      style={estilos.input}
      placeholder="Digite o seu peso"
      keyboardType="numeric"
      value={peso}
      onChangeText={setPeso}
      />
      <TextInput
      style={estilos.input}
      placeholder="Digite a sua altura"
      keyboardType="numeric"
      value={altura}
      onChangeText={setAltura}
      />

      <Button title="Calcular" onPress={calcular}/>

      <View style={estilos.resultado}>
        <Text style={estilos.resultadoTexto}>IMC: {total}</Text>
        <Text style={estilos.resultadoTexto}>Situação: {situacao}</Text>
      </View>

    </View>

);
}

const estilos = StyleSheet.create({

  caixa: {
    flex:1,
    backgroundColor: '#E8F5F2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    marginBottom: 60,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 10,
    borderRadius: 5,
  },

  resultado: {
    marginTop: 25,
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    width: 300,
    height: 100,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    elevation: 5,
  },

  resultadoTexto: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  }


})