import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack" 
import {NavigationContainer} from '@react-navigation/native'

import AddToCart from './AddToCart';
import OnlineShopping from './OnlineShopping ';
import PaymentSuccessful from './PaymentSuccessful';
 
const Stack = createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
<Stack.Navigator>
<Stack.Screen 
options={{
  title:"O shopping",
  headerStyle:{
     backgroundColor:"#8132a8"
  },
 headerTintColor:"white",
 headerRight:()=>(<Text style={{color:"white" ,marginRight:10}}>ICON</Text>)
}}
name="OnlineShopping" component={OnlineShopping}/>
<Stack.Screen name="AddToCart" component={AddToCart}  />
<Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful}/>
</Stack.Navigator>

   </NavigationContainer>
  );
}

