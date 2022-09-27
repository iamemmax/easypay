import { Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Feather, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const serviceBg = ["#fafafa","#fafafa","#fafafa","rgb(62,214,213)"]

const iconSize =  Platform.OS == "android" ? 18 : 26
const iconWH = {
    width: Platform.OS == "android" ? 55 : 65, height: Platform.OS == "android" ? 55 : 65
}

const services  = [
    {id: 1, name: "Airtime", page: "carrier", Description: "", discount: 0, icon: <SimpleLineIcons name='screen-smartphone' size={26} color="#2666EC"/>},
    {id: 2, name: "Data", page: "carrier", Description: "", discount: 0, icon: <AntDesign name="wifi" size={26} color="#2666EC" />},
    {id: 3, name: "Bills", Description: "", discount: 0, icon: <Ionicons name="ios-wallet-outline" size={26} color="#2666EC" />},
    {id: 4, name: "Others", Description: "", discount: 0, icon: <Ionicons name="grid-outline" size={26} color="#2666EC" />},
]

const Header = () => {
    const navigator = useNavigation()
    return (
        <View style={styles.container}>
            <View  style={styles.userHeader}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                        <TouchableOpacity style={styles.hamBurger}><Image style={{width: "100%", height: "100%"}} source={{
                            uri: "https://i.pravatar.cc/300"
                        }} /></TouchableOpacity>
                        <View style={{marginLeft: 15}}>
                            <Text style={{fontFamily: "Ubuntu-Light", fontSize: 20, color: "#fafafa"}}>Welcome Back,</Text>
                            <Text style={{fontFamily: "Ubuntu-Medium", fontSize: 18, color: "#fff", marginTop: 3}}>John Doe! 👋</Text>
                        </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity style={{...styles.menuIcon, marginLeft: 10}}>
                        <Image resizeMode='contain' style={{width: "100%", height: "100%"}} alt="lol" source={require("../../assets/icons/bell.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.accountContainer}>
                <View>
                    <Text style={styles.accountText}>Active Balance</Text>
                    <Text style={styles.accountBalance}>$42,020.00</Text>
                </View>
                <TouchableOpacity style={styles.accountMenu}><MaterialIcons name="keyboard-arrow-down" size={32} color="#fff" /></TouchableOpacity>
            </View>
            <View style={styles.serviceHeader}>
                {services?.slice(0, 4)?.map((service, index) => 
                <TouchableOpacity key={service?.id} style={styles.serviceContainer}  onPress={()=>navigator.navigate(service.page,{...service})}>
                    <View style={{...styles.service, backgroundColor: "rgba(38, 102, 236, 0.08)"}}>
                        {service?.icon}
                    </View>
                    <Text style={styles.serviceText}>{service?.name}</Text>
                </TouchableOpacity>)}
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    serviceContainer: {
        alignItems: "center",
    },  
    container:{
        position: "relative",
        flexDirection: "column",
         zIndex: -1,
         backgroundColor: "#2666EC",
         borderBottomLeftRadius: 20,
         borderBottomRightRadius: 20,
         height: 300,
         paddingTop: 70,
    },
    menuIcon: {
        width: 25, 
        height:25, 
        justifyContent: "center", 
        alignItems: "center", 
    },
    hamBurger: {
        backgroundColor: "rgba(0,0,0,.05)", 
        width: 50, 
        height:50, 
        borderRadius: 15, 
        overflow: "hidden",
        justifyContent: "center", 
        alignItems: "center", 
    },
    accountContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 45,
        width: "90%",
        paddingHorizontal: 15,
    },
    accountText: {
        color: "#fafafa",
        fontFamily: "Ubuntu-Light",
        fontSize: 16
    },
    accountMenu: {
        backgroundColor: "#3D75EE",
        padding: 10,
        borderRadius: 15
    },
    accountBalance: {
        color: "#fff",
        fontFamily: "Ubuntu-Bold",
        fontSize: 32,
        marginTop: 3
    },
    userHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        paddingHorizontal: 10

    },
    serviceHeader: {
        position: "absolute",
        left: "5%",
        bottom: "-25%",
        shadowColor: '#888',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        elevation: 10,
        shadowRadius: 8,
        flexDirection: "row", marginTop: 25, justifyContent: "space-between", backgroundColor: "#fff", height: 125, borderRadius: 20, 
        alignItems: "center",
        borderRadius: 15,
        paddingVertical: 40,
        paddingHorizontal: 20,
        marginTop: 100,
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        zIndex: 9999
    },
    service: {
        padding: 14,
        ...iconWH,
        justifyContent: "center", 
        alignItems: "center",
        borderRadius: 20,
    },
    serviceText: {
        textAlign: "center",
        marginTop: 5,
        color: "#1F1D36",
        fontSize: 14,
        fontFamily: "Ubuntu-Medium"
    },
    logo:{
        color: "#333",
        fontSize: 24, 
        fontWeight: "700",
        marginLeft: 10, 
        fontFamily: 'Ubuntu-Bold'
    }
})