import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Center, CheckIcon, FormControl, Select } from 'native-base'
import { EvilIcons } from '@expo/vector-icons';

const BonnzSelect = ({ label, value, errMsg, leftIcon, isRequired, items, children }) => {
    return <Center>
        <FormControl w="100%" isRequired={isRequired} isInvalid>
            <FormControl.Label>{label}</FormControl.Label>
            <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                bg: "teal.600",
                endIcon: <EvilIcons name="chevron-down" size={24} color="red" /> 
            }} mt="1">
                {children}
                {/* {items?.length && items?.map(item => <Select.Item label={item?.label} value={item?.id} />)} */}
            </Select>
            <FormControl.ErrorMessage leftIcon={leftIcon}>
                {errMsg && errMsg}
            </FormControl.ErrorMessage>
        </FormControl>
    </Center>;
};



export default BonnzSelect

const styles = StyleSheet.create({})