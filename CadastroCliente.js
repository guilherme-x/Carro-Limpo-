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
import{styles, stylesLog} from './Styles';
import {stylesCad} from './Styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Header } from '@react-navigation/stack';


function cadastroCliente({navigation}) {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset = {-400} style = {{ flex: 1 }}
      behavior = "padding" style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesCad.containerLogoCad}>
        <Image source={require('./assets/agind.png')}/>
      </View>

      <View style={stylesCad.container}>
      <Text style={stylesCad.infoText} >Cadastre-se como cliente.</Text>
        <TextInput style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#0C93D4"
        autoCorrect={false}
        onChangeText ={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="Email"
        placeholderTextColor="#0C93D4"
        autoCorrect={false}
        onChangeText ={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#0C93D4"
        autoCorrect={false}
        onChangeText ={()=>{}}
        secureTextEntry
        />

        <TouchableOpacity style={stylesCad.btnSubmit} onPress={() => navigation.navigate('Login', {name: 'Login'})}>
          <Text style={styles.submitText}>
            Pronto
          </Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
export{cadastroCliente};