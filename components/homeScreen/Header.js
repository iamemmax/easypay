import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const serviceBg = ["#fafafa","#fafafa","#fafafa","rgb(62,214,213)"]

const services  = [
    {id: 1, name: "Transfer", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../../assets/icons/money-receive.png")} />},
    {id: 2, name: "Receive", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../../assets/icons/money-transfer.png")} />},
    {id: 3, name: "Add Money", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../../assets/icons/money-add.png")} />},
    {id: 4, name: "Others", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../../assets/icons/schedule.png")} />},
]

const Header = () => {
    const navigator = useNavigation()
    return (
        <View style={styles.container}>
            <View  style={styles.userHeader}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image style={{
                                width: 50,
                                height: 50,
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: "#fff"
                            }} source={{
                                uri: "https://i.pravatar.cc/300"
                    }} />
                    <View style={{marginLeft: 15}}>
                        <View>
                            <Text style={{fontFamily: "Ubuntu-Bold", fontSize: 20, color: "rgb(35,60,103)"}}>Hello, John Doe! 👋</Text>
                            <Text style={{color: "rgba(66, 206, 212, 1)", fontFamily: "Ubuntu-Medium", fontSize: 16}}>Check Balance</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={{height: 35, width: 35, backgroundColor: "rgba(0,0,0,.03)",
                 borderRadius: 50, 
                 padding: 8 }}>
                    <Image resizeMode='contain' style={{width: "100%", height: "100%", }} alt="lol" source={require("../../assets/icons/bell.png")} />
                </TouchableOpacity>
            </View>
            <LinearGradient colors={['rgba(66, 206, 212, 1)', '#28519E']} style={{flexDirection: "row", marginTop: 25, justifyContent: "space-between", backgroundColor: "orangered", height: 200, borderRadius: 20, padding: 20}}>
                {services?.slice(0, 4)?.map((service, index) => 
                <TouchableOpacity key={service?.id} style={styles.serviceContainer}  onPress={()=>navigator.navigate("Payment",{service})}>
                    <View style={{...styles.service, backgroundColor: "rgba(0,0,0,.15)"}}>
                        {service?.icon}
                    </View>
                    <Text style={styles.serviceText}>{service?.name}</Text>
                </TouchableOpacity>)}
            </LinearGradient>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    serviceContainer: {
        alignItems: "center" 
    },  
    container:{
        position: "relative",
        flexDirection: "column",
         marginTop: Platform.OS == "android" ? "12%" : "2%", 
         zIndex: -1
    },
    userHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 60
    },
    service: {
        padding: 14,
        width: 65, 
        height: 65, 
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 50,

    },
    serviceText: {
        textAlign: "center",
        marginTop: 10,
        color: "#fff",
        fontSize: 16,
        fontFamily: "Ubuntu-Medium"
    },
    logo:{
        color: "#555555",
        fontSize: 24, 
        fontWeight: "700",
        marginLeft: 10, 
        fontFamily: 'Ubuntu-Bold'
    }
})