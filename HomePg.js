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
import{styles} from './Styles';
import {stylesCad} from './Styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';

function Home({navigation}) {
    return (
      <KeyboardAvoidingView style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Text style={styles.welcomeText}>
        Seja bem vindo(a) ao
      </Text>
      <View style={styles.containerLogo}>
      <Image source={require('./assets/agind.png')}/>
      </View>

      <View style={styles.container}>

        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('CadastroCliente')}>
          <Text style={styles.submitText}>
            Quero lavar meu carro
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('CadastroLavador')}>
          <Text style={styles.submitText}>
            Tenho um lava-rápido
          </Text>
        </TouchableOpacity>
          <Text style={styles.alreadySigned}>
            Já tem uma conta? 
            <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}> Fazer login.</Text>
          </Text>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
export{Home};