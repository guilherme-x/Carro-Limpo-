import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView, 
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Button
  } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Header } from '@react-navigation/stack';
import {styles} from './Styles';
import {cadastroLavador} from './cadastroLavador';
import {cadastroCliente} from './CadastroCliente';
import {Home} from './HomePg';
import {Login} from './LoginPg';
import {panel} from './Panel.js';
//Firebase App (the core Firebase SDK) is always required and must be listed first

const firebaseConfig = {
  apiKey: "AIzaSyCfaU_8mmibOF-y_qXRYZIhrO-FOBVCW5U",
  authDomain: "carro-limpo-1651b.firebaseapp.com",
  databaseURL: "https:arro-limpo-1651b.firebaseio.com",
  projectId: "carro-limpo-1651b",
  storageBucket: "carro-limpo-1651b.appspot.com",
  messagingSenderId: "473325389614",
  appId: "1:473325389614:web:9e5432cf9bda43802ddcbf",
  measurementId: "G-7PVG2J5K5F"
};

// Firebase App

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'none'}}
        />
        <Stack.Screen name="Login"
        component={Login}
        />
        <Stack.Screen name="CadastroCliente"
        component={cadastroCliente}
        />
        <Stack.Screen name="CadastroLavador"
        component={cadastroLavador}
        />
        <Stack.Screen name="Panel"
        component={panel}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


