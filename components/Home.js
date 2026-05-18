import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guia Turístico </Text>
      <Text style={styles.title}>Presidente Prudente-SP</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Pontos Históricos")}
      >
        <Text style={styles.buttonText}>🏛️ Pontos Históricos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Restaurantes Recomendados")}
      >
        <Text style={styles.buttonText}>🍽️ Restaurantes Recomendados</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Atividades ao Ar Livre")}
      >
        <Text style={styles.buttonText}>🌳 Atividades ao Ar Livre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e8f0fe",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    
  },
  button: {
    backgroundColor: "#1e88e5",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});