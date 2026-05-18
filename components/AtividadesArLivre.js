import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AtividadesArLivre() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Atividades ao Ar Livre</Text>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Parque do Povo</Text>
        <Text style={styles.text}>
          Espaço ideal para caminhada, corrida, piquenique, prática de esportes e lazer
          em família. O local conta com áreas verdes, pista de caminhada, quadras e
          playgrounds.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Cidade da Criança</Text>
        <Text style={styles.text}>
          Área de lazer com parque ecológico, aviário, zoológico, pedalinho, planetário,
          observatório e espaços para passeio em contato com a natureza.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Balneário da Amizade</Text>
        <Text style={styles.text}>
          Local indicado para passeio ao ar livre, caminhada, descanso e contemplação da
          represa, sendo uma opção tranquila para lazer com amigos e familiares.
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