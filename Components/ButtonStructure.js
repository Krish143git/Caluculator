import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,TouchableOpacity,
  StatusBar,FlatList,VirtualizedList
} from 'react-native';

const ButtonStructure = ({text,sendNumber,toggle}) => {

    const getNumber =(e) =>{
        sendNumber(text)
     }


    return (
        <>
      <TouchableOpacity
        style={ toggle ?style.button:style.button2}
        onPress = {(item)=>getNumber(item)}
       >         
      <Text style={toggle ?style.text:style.text2}>{text}</Text>
      </TouchableOpacity>
      <View style={style.button1}></View>
      </>
    );
}
const style =StyleSheet.create({
    
    text:{
      paddingTop:15,
      color :'#000000',
      fontSize : 35,
      textAlign:'center',
      // fontWeight: 'bold'
    },  
    text2 :{
        paddingTop:10,
      color :'#000000',
      fontSize : 25,
      textAlign:'center',
    },
    button:{
      width : 80,
      height : 80 ,
       backgroundColor :'#b3b5ae',
      borderRadius :40,
      marginTop:10,
    },
    button2:{
        width : 60,
        height : 60 ,
        backgroundColor :'#b3b5ae',
        borderRadius :30,
        marginTop:8,
        marginLeft : 0
      },
    button1 :{
      width:30,
      height:10
    }
    })
export default ButtonStructure;