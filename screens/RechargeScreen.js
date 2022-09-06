import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RechargeScreen = ({route}) => {
  const  {service: {id, Description , name, icon}} = route.params
  return (
    <SafeAreaView>
      <Text>{name}</Text>
    {icon}
    </SafeAreaView>
  )
}

export default RechargeScreen

const styles = StyleSheet.create({})