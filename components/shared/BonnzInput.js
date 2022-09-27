import { View, Text } from 'react-native'
import React from 'react'
import { Input, Stack } from 'native-base'


const BonnzInput = ({iconLeft,label,  placeholder, onChangeText, id, style, value, iconRight, ...props}) => {
  return (
    <View>
        <Text>{label && label}</Text>
<Stack space={4} w="100%" alignItems="center">
      <Input w={{
      base: "75%",
      md: "25%"
    }} InputLeftElement={iconLeft} placeholder={placeholder}
    InputRightElement={iconRight}
    value={value}
    onChangeText={onChangeText}
    id={id}
    style={style}
    {...props}
    />
      
    </Stack>
    </View>
  )
}

export default BonnzInput