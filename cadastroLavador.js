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

  function cadastroLavador({navigation}) {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset = {-100} style = {{ flex: 1 }}
      behavior = "padding" style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesCad.containerLogoCad}>
        <Image source={require('./assets/agind.png') }/>
      </View>

      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Nome do lava-rápido"
        autoCorrect={false}
        onChangeText ={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="CPF/CNPJ"
        autoCorrect={false}
        keyboardType="numeric"
        onChangeText ={()=>{}}
        autoCompleteType="off"
        />
        <TextInput style={styles.input}
        placeholder="Email"
        autoCompleteType="email"
        autoCompleteType="email"
        autoCorrect={false}
        onChangeText ={()=>{}}
        />
        <TextInput style={styles.input}
        placeholder="Senha"
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