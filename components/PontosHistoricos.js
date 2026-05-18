import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PontosHistoricos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pontos Históricos</Text>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Centro Cultural Matarazzo</Text>
        <Text style={styles.text}>
          Importante espaço cultural de Presidente Prudente, instalado em uma antiga estrutura
          ligada à história industrial da cidade. Atualmente recebe exposições, eventos,
          apresentações artísticas e atividades culturais.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Catedral de São Sebastião</Text>
        <Text style={styles.text}>
          Um dos principais marcos religiosos e arquitetônicos da cidade, localizada na área
          central e reconhecida como ponto de referência para moradores e visitantes.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Praça Nove de Julho</Text>
        <Text style={styles.text}>
          Praça tradicional da região central de Presidente Prudente, próxima à Catedral de
          São Sebastião, sendo um espaço de convivência e referência histórica urbana.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});