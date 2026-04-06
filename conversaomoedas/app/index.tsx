import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function App() {

  const [valor, setValor] = useState("");
  const [usd, setUsd] = useState("");

  const calcular = () => {
    const valorNumerico = parseFloat(valor);

    if (!isNaN(valorNumerico)) {
      const resultado = valorNumerico * 0.19;
      setUsd(resultado.toFixed(2));
    } else {
      setUsd("0.00");
    }
  };

  return (
    <View style={estilos.caixa}>

      <View style={estilos.logoContainer}>
        <Image
          source={{ uri: "https://images.pexels.com/photos/10653885/pexels-photo-10653885.jpeg" }}
          style={estilos.logo}
        />
      </View>

      <Text style={estilos.titulo}>Conversor de Moedas</Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite o seu Valor em R$"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={estilos.botao} onPress={calcular}>
        <Text style={estilos.textoBotao}>Converter</Text>
      </TouchableOpacity>

      <View style={estilos.resultado}>
        <Text style={estilos.textoResultado}>
          Dólar Americano (USD): {usd}
        </Text>
      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  caixa: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14124A",
    padding: 20,
  },

  logoContainer: {
    backgroundColor: "#FFC72C",
    padding: 8,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 10,
  },

  logo: {
    width: 130,
    height: 130,
    borderRadius: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#FFC72C",
    letterSpacing: 1,
  },

  input: {
    width: "100%",
    padding: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#FFC72C",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },

  textoBotao: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#14124A",
  },

  resultado: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#1E1B6A",
    borderRadius: 15,
    width: "100%",
  },

  textoResultado: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});