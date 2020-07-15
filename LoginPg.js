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
import {stylesLog, stylesCad} from './Styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import { hide } from 'expo/build/launch/SplashScreen';

function Login({navigation}) {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset = {-400} style = {{ flex: 1 }} 
      behavior = "padding" style={styles.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesLog.containerLogoLogin}>
        <Image source={require('./assets/agind.png')}/>
      </View>

      <View style={stylesLog.container}>
      <Text style={stylesCad.infoText} >Faça login.</Text>
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

        <TouchableOpacity style={stylesLog.btnSubmit} onPress={() => navigation.navigate('Login', {name: 'Login'})}>
          <Text style={styles.submitText}>
            Pronto
          </Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
export{Login};