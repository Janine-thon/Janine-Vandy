import React from  "react";
import { View,Text,StyleSheet,} from "react-native";

//corpo do aplicativo//

export default function App(){
  return(

    <View style={estilos.caixa}>
      <Text style={estilos.titulo}>Padaria de Inha</Text>
      <Text style={estilos.subtitulo}>Pães - Salgados - Docinhos</Text>
    </View>
  );
}

//estilos do aplicativo// - Css

const estilos = StyleSheet.create({

  titulo :{
    fontSize:45,
    color:"#cb310ba4",
    fontWeight:"bold",
  },


  subtitulo :{
    fontSize:20,
    color:"#501709ef",
  },


  caixa :{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#e7d5beff",
  }



});