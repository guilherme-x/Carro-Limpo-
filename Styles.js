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
  const stylesCad = StyleSheet.create({
    containerLogoCad:{
      flex:1,
      justifyContent:"center",
      marginTop:-60,
      marginBottom:-50,
      transform:[{scale:0.3}]
      },
      btnSubmit:{
        marginTop:30,
        backgroundColor:"#0C93D4",
        width:'70%',
        height:45,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:7
        },
        input:{
    backgroundColor:"white",
    width:"80%",
    marginBottom:15,
    color:"#0C93D4",
    fontSize:17,
    borderRadius:7,
    padding:10
    },
  
  })

const styles = StyleSheet.create({
    click:{
      display: "none"
    },
    background:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white",
    width:"100%"
    },

    welcomeText:{
    flex:1,
    color:"#0C93D4",
    marginTop:20,
    fontSize:25,
    textAlign:"center",
    height:2
    },


    containerLogo:{
    flex:1,
    justifyContent:"center",
    marginTop:0,
    marginBottom:150,
    transform:[{scale:0.6}]
    },


    containerLogoLogin:{
    flex:1,
    justifyContent:"center",
    marginTop:0,
    marginBottom:0,
    transform:[{scale:0.6}]
    },


    container:{
    paddingBottom:150,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:"100%"
    },
    input:{
    backgroundColor:"gainsboro",
    width:"80%",
    marginBottom:15,
    color:"#0C93D4",
    fontSize:17,
    borderRadius:7,
    padding:10
    },
    btnSubmit:{
    marginTop:60,
    backgroundColor:"#0C93D4",
    width:'70%',
    height:45,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:7
    },
    submitText:{
    color:"white",
    fontSize:25,
    fontFamily:"sans-serif"
    },
    alreadySigned:{
    marginTop:160,
    fontSize:20,
    height:30
    },
    loginText:{
    color:"#0C93D4"
    },
    btnRegister:{
    marginTop:10
    },
    resgisterText:{
    color:"#0C93D4"
    }
})

export {styles, stylesCad}