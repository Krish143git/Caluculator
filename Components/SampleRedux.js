import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,TouchableOpacity,
  StatusBar,FlatList,VirtualizedList
} from 'react-native';

import {connect} from 'react-redux'

const SampleRedux = (props) => {
  
  return (
    <> 
    <View style={ style.cont}> 
      <TouchableOpacity
        style={ style.button}
        onPress = {()=>props.increaseCounter()}
       >         
      <Text style={style.text2}>Increase</Text>
      </TouchableOpacity>
      <Text style={style.text2}>{props.counter}</Text>
      <TouchableOpacity
        style={ style.button}
        onPress = {()=>props.decreaseCounter()}
       >         
       <Text style={style.text2}>Decrease</Text>
      </TouchableOpacity>
      </View>
</>
)}
const style =StyleSheet.create({    
   cont :{
       marginTop:150,
       flexDirection : 'row',
       justifyContent:'space-evenly'
   },
    text2 :{
        paddingTop:10,
      color :'#000000',
      fontSize : 25,
      textAlign:'center',
    },
    button:{
      width : 135,
      height : 135 ,
       backgroundColor :'#b3b5ae',
       borderRadius :40,
       marginTop:10,
    },    
    })
    function mapStateToProps(state){
        return {
          counter : state.counter
        }
    }

    function mapDispatchToProps(dispatch){
      return{
        increaseCounter :() => dispatch ({ type :'INCREMENT_COUNTER' }),
        decreaseCounter :() =>dispatch({ type :'DECREMENT_COUNTER' })
      }

    }
  
    export default connect(mapStateToProps,mapDispatchToProps)(SampleRedux);
    
