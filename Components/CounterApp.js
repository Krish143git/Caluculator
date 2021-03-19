// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity
// } from "react-native";
// import { connect } from 'react-redux'
// // class CounterApp extends Component {

//  const CounterApp = (props) =>{

 
   
//         return (
//             <View style={styles.container}>
//                 <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
//                     <TouchableOpacity 
//                     onPress={() => props.increaseCounter()}
//                     >
//                         <Text style={{ fontSize: 20 }}>Increase</Text>
//                     </TouchableOpacity>
//                     <Text style={{ fontSize: 20 }}>{props.counter}</Text>
//                     <TouchableOpacity 
//                      onPress={() => props.decreaseCounter()}
//                     >
//                         <Text style={{ fontSize: 20 }}>Decrease</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }
// // }

// function mapStateToProps(state) {
//     return {
//         counter: state.counter
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
//         decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
//     }
// }

//  export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });