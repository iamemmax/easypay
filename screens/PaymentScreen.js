import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PaymentScreen = ({route}) => {
  console.log(route)
  const  {service: {id, Description , name, icon}} = route.params
  return (
    <SafeAreaView>
      <Text>PaymentScreen</Text>
      <Text>{name}</Text>
    </SafeAreaView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})