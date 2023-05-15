import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Agregar from "../screens/Agregar";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#333",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#fff",
          },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={Home}
          options={{
            title: "Inicio",
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Agregar"
          component={Agregar}
          options={{
            title: "AÑADIR",
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}