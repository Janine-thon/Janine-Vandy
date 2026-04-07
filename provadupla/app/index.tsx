import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [distancia, setDistancia] = useState('');
  const [consumo, setConsumo] = useState('');
  const [precoCombustivel, setPrecoCombustivel] = useState('');
  const [custo, setCusto] = useState('');

  function calcularCusto() {
    const distanciaNum = parseFloat(distancia);
    const consumoNum = parseFloat(consumo);
    const precoNum = parseFloat(precoCombustivel.replace(',', '.'));

    if (isNaN(distanciaNum) || isNaN(consumoNum) || isNaN(precoNum)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }

    const custoCalculado = (distanciaNum / consumoNum) * precoNum;
    setCusto(custoCalculado.toFixed(2));
  }

  return(
    <View style={estilos.caixa}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Calculadora De Viagem</Text>

        <Text style={estilos.label}>Distância (km)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite a Distância..."
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={distancia}
          onChangeText={setDistancia}
        />

        <Text style={estilos.label}>Consumo (km/l)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite o Consumo ..."
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={consumo}
          onChangeText={setConsumo}
        />

        <Text style={estilos.label}>Preço De Combustível (R$)</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite o Preço do Combustível ..."
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={precoCombustivel}
          onChangeText={setPrecoCombustivel}
        />

        <View style={estilos.botaoContainer}>
          <Button title="Calcular" onPress={calcularCusto} />
        </View>

        {custo !== '' && (
          <View style={estilos.resultadoContainer}>
            <Text style={estilos.resultadoLabel}>Total da Viagem</Text>
            <Text style={estilos.resultadoValor}>R$ {custo}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  caixa: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#2a2a2a",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#FFD700",
    letterSpacing: 1,
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#FFD700",
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: "#FFD70040",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    fontSize: 15,
  },
  botaoContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  resultadoContainer: {
    marginTop: 25,
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: "#FFD70040",
    alignItems: "center",
  },
  resultadoLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFD700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  resultadoValor: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
  },
});