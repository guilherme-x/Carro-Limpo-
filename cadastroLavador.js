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
import { hide } from 'expo/build/launch/SplashScreen';

  function cadastroLavador({navigation}) {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset = {-400} style = {{ flex: 1 }}
      behavior = "padding" style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesCad.containerLogoCadLav}>
        <Image source={require('./assets/agind.png') }/>
      </View>

      <View style={stylesCad.container} onPress={ocultarlogo()}>
      <Text style={stylesCad.infoText} >Cadastre-se como lavador.</Text>
        <TextInput style={styles.input}
        placeholder="Nome do lava-rápido"
        placeholderTextColor="#0C93D4"
        autoCorrect={false}
        onChangeText ={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="CPF/CNPJ"
        placeholderTextColor="#0C93D4"
        autoCorrect={false}
        keyboardType="numeric"
        onChangeText ={()=>{}}
        autoCompleteType="off"
        />
        <TextInput style={styles.input}
        placeholder="Email"
        placeholderTextColor="#0C93D4"
        autoCompleteType="email"
        autoCompleteType="email"
        autoCorrect={false}
        onChangeText ={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#0C93D4"
        secureTextEntry
        autoCorrect={false}
        onChangeText ={()=>{}}
        />

        <TouchableOpacity style={stylesCad.btnSubmit} onPress={() => navigation.navigate('Panel', {name: 'Panel'})}>
          <Text style={styles.submitText}>
            Pronto
          </Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
export{cadastroLavador};