import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import PontosHistoricos from "./components/PontosHistoricos";
import RestaurantesRecomendados from "./components/RestaurantesRecomendados";
import AtividadesArLivre from "./components/AtividadesArLivre";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu Principal">
        <Stack.Screen 
          name="Menu Principal" 
          component={Home} 
        />

        <Stack.Screen 
          name="Pontos Históricos" 
          component={PontosHistoricos} 
        />

        <Stack.Screen 
          name="Restaurantes Recomendados" 
          component={RestaurantesRecomendados} 
        />

        <Stack.Screen 
          name="Atividades ao Ar Livre" 
          component={AtividadesArLivre} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}