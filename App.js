import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import AddToCart from './AddToCart';
import OnlineShopping from './OnlineShopping ';
import PaymentSuccessful from './PaymentSuccessful';

export default function App() {
  return (
    <View style={styles.container}>
    
    <OnlineShopping/>
      {/* <PaymentSuccessful/> */}
      {/* <AddToCart/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:30,
    marginHorizontal:20,
  },
});
