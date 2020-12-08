import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack" 
import {NavigationContainer} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
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
  title:"Welcome To Online Shopping",
  headerStyle:{
     backgroundColor:"#8132a8"
  },
 headerTintColor:"white",
 headerRight:()=>(<Text style={{color:"white" ,marginRight:10}}><Fontisto name="shopping-basket-add" size={24} color="white" /></Text>)
}}
name="OnlineShopping" component={OnlineShopping}/>
<Stack.Screen 
options={{
  headerStyle:{
     backgroundColor:"#8132a8"
  },
 headerTintColor:"white",
 headerRight:()=>(<Text style={{color:"white" ,marginRight:10}}><AntDesign name="shoppingcart" size={24} color="white" /></Text>)
}}
name="AddToCart" component={AddToCart}  />
<Stack.Screen
options={{
  headerStyle:{
     backgroundColor:"#8132a8"
  },
 headerTintColor:"white",
 headerRight:()=>(<Text style={{color:"white" ,marginRight:10}}><MaterialIcons name="payment" size={24} color="white" /></Text>)
}}
 name="PaymentSuccessful" component={PaymentSuccessful}/>
</Stack.Navigator>

   </NavigationContainer>
  );
}

