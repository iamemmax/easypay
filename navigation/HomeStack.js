import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import RechargeScreen from './../screens/RechargeScreen';
import Checkout from './../components/homeScreen/Checkout';
import SuccessScreen from './../screens/SuccessScreen';
import CarrierScreen from './../screens/CarrierScreen';


const Stack = createNativeStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
              headerShown: false,
          }}
      />
      <Stack.Screen name="carrier" component={CarrierScreen} 
      options={{animation:"slide_from_right", presentation:"fullScreenModal"}}
      />
      <Stack.Screen name="checkout" component={Checkout} 
      options={{animation:"slide_from_right", presentation:"fullScreenModal"}}
      />
      <Stack.Screen name="Recharge" component={RechargeScreen} 
      options={{animation:"slide_from_bottom", presentation:"modal"}}
      />
      <Stack.Screen name="Success" component={SuccessScreen} 
      options={{animation:"slide_from_bottom", presentation:"card"}}
      />
  </Stack.Navigator>


      
  );
}
