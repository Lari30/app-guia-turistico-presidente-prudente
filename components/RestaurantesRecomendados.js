import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function RestaurantesRecomendados() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Restaurantes Recomendados</Text>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Restaurante Sabor Amigo</Text>
        <Text style={styles.text}>
            O Sabor Amigo é o seu novo destino para saborear refeições caseiras com um toque especial. 
            Nosso cardápio variado oferece opções para todos os gostos, desde pratos tradicionais até opções mais leves e saudáveis. 
            Desfrute de marmitex preparadas com ingredientes frescos e de alta qualidade, perfeitas para quem busca uma alimentação equilibrada e saborosa.
            Faixa de preço: R$ 30 a R$ 100. 
            
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Pizzaria Donna Oliva</Text>
        <Text style={styles.text}>
          Uma história de quase duas décadas que envolve muita amizade, bons momentos e claro: Pizza!
          A Donna Oliva tem em sua essência unir e reunir famílias, amigos e muita afetividade. 
          Faixa de preço: R$ 40 a R$ 150.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.itemTitle}>Restaurante Japonês Dachô Sushi</Text>
        <Text style={styles.text}>
          O Rodízio Japonês mais completo c/ Camarão, Bebidas e Sobremesas tudo ilimitado!
          Aberto todos os dias almoço e jantar.
          Faixa de preço: R$ 120 a R$ 150.
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