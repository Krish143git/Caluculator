//AC to clear the state
//⌫ to remove the last element
//It Should not take double operators,dots
//Between operator to operator there is only one dot will present 
//if state is empty by pressing ' . ' '0. ' should be come and after operator if he press ' . ' '0.' should appears
//After an operator with zero anyting should not work except ' 0 ' beacause leading zeros lead to octals or some other number system
//if last character is operator when he press ' = ' add zero at the end [required]

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  VirtualizedList,
  Alert,
} from 'react-native';
import ButtonStructure from './ButtonStructure';

const ButtonsList = () => {
  const [DATA, setData] = useState([
    'AC',
    '⌫',
    'x^2',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '$$',
    '0',
    '.',
    '=',
  ]);
  const [numbers, updateNumbers] = useState('0');
  const [result, setResult] = useState('0');
  const [toggle, controlToggle] = useState(true);

  useEffect(() => {
    setResult(numbers);
  }, [result]);

  const getNumber = (text) => {
    //To clear the state
    if (text === 'AC') {
      updateNumbers(() => '0');
      setResult('0');
    }
    //Power operation
    else if (text == 'x^2') {
      //skip as of now
    } 
    else if (text == '.') {
      let operator = ['+', '-', '*', '/'];
      // After operator when pressing '.' take '0.'
      if (
        operator.includes(
          numbers.toString().charAt(numbers.toString().length - 1),
        )
      ) {
        updateNumbers((prevNum) => prevNum + '0.');
      }
      //when there is a empty state by pressing '.' take '0.'




      else if (numbers == 0) {
        updateNumbers('0.');
      } 
      else {
        if (numbers.toString().charAt(numbers.toString().length - 1) == '.') {
          console.log('Avoid taking double operators side by side ');
        }
        else {
          var operatorPresent ;
          var nooperator;
         for (let index = 0; index <operator.length; index++) {
               if (numbers.toString().includes(operator[index])){
                 operatorPresent = true ;
                 break;
               }
              nooperator = false;
         }
         if (operatorPresent == true){
          for (let index = numbers.toString().length; index >= 0 ; index--) {
            if (operator.includes(numbers.toString().charAt(index))) {
              if(numbers.toString().substring(index,numbers.toString().length).includes(text)){
                // console.log(numbers.toString().substring(index,numbers.toString().length))
                console.log('dot is already there')
                break;
              }
              else{
                updateNumbers((prevNum) => prevNum + text);
                break;
              }
            }      
          }
        }
        else{
          if (numbers.toString().includes(text)){
            console.log('dot is already there')
          }
          else{
            updateNumbers((prevNum) => prevNum + text);
          }
        }
        }
      }
    }




    
    //To remove the each number
    else if (text == '⌫') {
      {
        numbers.toString().length != 1
          ? updateNumbers(
              numbers.toString().substr(0, numbers.toString().length - 1),
            )
          : updateNumbers('0');
      }
    }

    //To control the Avoiding of double operators
    else if (text == '+' || text == '-' || text == '*' || text == '/') {
      {
        numbers.toString().charAt(numbers.toString().length - 1) == '+' ||
        numbers.toString().charAt(numbers.toString().length - 1) == '*' ||
        numbers.toString().charAt(numbers.toString().length - 1) == '-' ||
        numbers.toString().charAt(numbers.toString().length - 1) == '/'
          ? //
            console.log('Avoid taking double operators side by side ')
          : //toadd first time an operator
            updateNumbers((prevNum) => prevNum + text);
      }
    } 
    
    else if (text == '=') {
      {
        numbers.toString().charAt(numbers.toString().length - 1) == '+' ||
        numbers.toString().charAt(numbers.toString().length - 1) == '*' ||
        numbers.toString().charAt(numbers.toString().length - 1) == '-' ||
        numbers.toString().charAt(numbers.toString().length - 1) == '/'
          ? // if any previous operator is present add 0 if press '='
            (updateNumbers(eval(numbers + '0')), setResult(numbers))
          : (updateNumbers(eval(numbers)), setResult(numbers));
      }
    }


    //Showing the new Layout
    else if (text == '$$') {
      if (toggle) {
        controlToggle(false);
        setData([
          '2nd',
          'deg',
          'sin',
          'cos',
          'tan',
          'x^Y',
          'lg',
          'ln',
          '(',
          ')',
          'rotx',
          'AC',
          '⌫',
          'x^2',
          '/',
          'x!',
          '7',
          '8',
          '9',
          '*',
          '1/x',
          '4',
          '5',
          '6',
          '-',
          'PI',
          '1',
          '2',
          '3',
          '+',
          '$$',
          'e',
          '0',
          '.',
          '=',
        ]);
      } else {
        controlToggle(true);
        setData([
          'AC',
          '⌫',
          'x^2',
          '/',
          '7',
          '8',
          '9',
          '*',
          '4',
          '5',
          '6',
          '-',
          '1',
          '2',
          '3',
          '+',
          '$$',
          '0',
          '.',
          '=',
        ]);
      }
    } else {
      let data = [
        '2nd',
        'deg',
        'sin',
        'cos',
        'tan',
        'x^Y',
        'lg',
        'ln',
        '(',
        ')',
        'rotx',
        'x!',
        '1/x',
        'PI',
        'e',
        'x^2',
      ];
      let operator = ['+', '-', '*', '/'];
      // if (data.includes(text)!=true){
      // {numbers.toString().includes('.') ?  text == '.'  ? updateNumbers(prevNum => prevNum): updateNumbers(prevNum => prevNum+ text): updateNumbers( numbers == '0'   ?   text == '.' ? '0.' : text : (operator.includes(numbers.toString().charAt(numbers.toString().length-1)) && text == '.') ? prevNum => prevNum+'0.': prevNum => prevNum+ text) }
      // }
      //    if ((numbers.toString().charAt(numbers.toString().length-1) == '0') && (operator.includes(numbers.toString().charAt(numbers.toString().length-2)){

      //    }

      if (
        numbers.toString().charAt(numbers.toString().length - 1) == '0' &&
        operator.includes(
          numbers.toString().charAt(numbers.toString().length - 2),
        )
      ) {
      } else {
        {
          numbers == '0'
            ? updateNumbers(text)
            : updateNumbers((prevNum) => prevNum + text);
        }
      }
    }
  };

  return (
    <>
      <View style={style.textContainer}>
        <Text style={style.historyText}>{numbers}</Text>
        <Text style={style.resultText}>= {result}</Text>
      </View>
      <View style={style.container}>
        <View style={style.line}></View>
        <FlatList
          data={DATA}
          numColumns={toggle == true ? 4 : 5}
          key={toggle == true ? 4 : 5}
          renderItem={({item, id}) => (
            <ButtonStructure
              text={item}
              sendNumber={getNumber}
              toggle={toggle}
            />
          )}
          keyExtractor={(item, id) => id.toString()}
        />
      </View>
    </>
  );
};
const style = StyleSheet.create({
  textContainer: {
    height: 120,
    marginTop: 280,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  container: {
    marginLeft: 30,
    position: 'absolute',
     bottom:5,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#636b4e',
    marginLeft: -15,
    marginTop: 0,
  },
  text: {
    paddingTop: 15,
    color: '#000000',
    fontSize: 35,
    textAlign: 'center',
    // fontWeight: 'bold'
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#b3b5ae',
    borderRadius: 40,
    marginTop: 10,
  },
  button1: {
    width: 30,
    height: 10,
  },
  historyText: {
    fontSize: 30,
    textAlign: 'right',
  },
  resultText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
export default ButtonsList;
