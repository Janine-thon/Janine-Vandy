import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <View style={s.tela}>
      <View style={s.telefone}>
        <View style={s.cartao}>

          <View style={s.foto}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/20175062/pexels-photo-20175062.jpeg" }}
              style={s.imagem}
            />
          </View>

          <Text style={s.nome}>Bianca Santos</Text>
          <Text style={s.curso}>Estudante de Desenvolvimento Web</Text>
          <Text style={s.descricao}>Apaixonada por UI & Front-End 💻</Text>
          <Text style={s.portfolio}>PORTFOLIO</Text>

        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#8A9A84",
    alignItems: "center",
    justifyContent: "center",
  },

  telefone: {
    width: 340,
    height: 680,
    backgroundColor: "#E6ECE8",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },

  cartao: {
    width: 290,
    backgroundColor: "#FFF",
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 30,
    borderRadius: 28,
    alignItems: "center",
    elevation: 6,
  },

  foto: {
    position: "absolute",
    top: -60,
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: "#A45A45",
    backgroundColor: "#E6ECE8",
    justifyContent: "center",
    alignItems: "center",
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  nome: {
    fontSize: 22,
    fontWeight: "700",
    color: "#3B2A22",
    marginTop: 20,
  },

  curso: {
    fontSize: 15,
    fontWeight: "600",
    color: "#A45A45",
    textAlign: "center",
    marginTop: 6,
  },

  descricao: {
    fontSize: 13,
    color: "#6B5E57",
    textAlign: "center",
    marginTop: 8,
  },

  portfolio: {
    marginTop: 18,
    fontSize: 14,
    fontWeight: "600",
    color: "#8A9A84",
    letterSpacing: 1,
  },
});