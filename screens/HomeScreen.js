import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View,Text, FlatList, Image, TouchableOpacity,Platform } from 'react-native'
import { useFonts } from 'expo-font';
import FeaturesProducts from '../components/homeScreen/FeaturesProducts';
import Header from './../components/homeScreen/Header';
import Categories from './../components/homeScreen/Categories';
import { font } from '../constant/font';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const serviceBg = ["#E4EDDB","#E4E3E3","#FFEBC9","#EEEBDD"]

const services  = [
    {id: 1, name: "Airtime", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/airtime.png")} />},
    {id: 2, name: "Data", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 3, name: "GOtv", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/tv.png")} />},
    {id: 4, name: "Dstv", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/tv.png")} />},
    {id: 5, name: "Electricity", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/tv.png")} />},
    {id: 6, name: "Startime", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 7, name: "Transport", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 8, name: "LASG", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 9, name: "WAEC", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 10, name: "JAMB", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 11, name: "Bets", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 12, name: "Gift Cards", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
]
const featuredServices  = [
    {id: 1, name: "Flights", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/airtime.png")} />},
    {id: 2, name: "Crypto", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/data.png")} />},
    {id: 3, name: "Loan", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/tv.png")} />},
    {id: 4, name: "Adverts", Description: "", discount: 0, icon: <Image resizeMode='contain' style={{height: "100%", width: "100%"}} alt="lol" source={require("../assets/icons/tv.png")} />},
]

const Transactions = () => {
    return (
        <View style={styles.transWrapper}>
            <View style={{flexDirection: "row", justifyContent: "space-between", height: 160, 
            borderRadius: 20, 
            overflow: "hidden"}}>
                <Image source={{
                    uri: "https://img.freepik.com/free-vector/coming-soon-halftone-style-design-background-template_1017-27274.jpg?w=2000",
                }}
                style={{width: "100%", height: "100%"}}/>
            </View>
        </View>
    )
}

const Service = ({service}) => {
    const navigator = useNavigation()
    return (
        <TouchableOpacity style={{width: "22%", height: 75, textAlign: "center", justifyContent: "center", alignItems: "center", marginBottom: 26}}
        onPress={()=>navigator.navigate("Recharge",{service})}
        >
            <View style={{
                borderRadius: 50, 
            justifyContent:"center", alignItems: "center", padding: 14, width: 60, height: 60, backgroundColor: "#f9f8f9", marginBottom: 5}}>
                {service?.icon}
            </View>
            <Text style={{fontFamily: "Ubuntu-Medium", fontSize: 14, color: "rgb(35,60,103)"}}>{service?.name}</Text>
        </TouchableOpacity>
    )
}

const Services = () => {
    return (
        <View 
            style={styles.serviceContainer}>   
            <Text style={{fontFamily: "Ubuntu-Bold", fontSize: 16, marginBottom: 24, marginLeft: 10}}>Recharge and Pay Bills</Text>
            <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                {services?.map(service => <Service key={service.id} service={service}/>)}
            </View>
            <Text style={{fontFamily: "Ubuntu-Bold", fontSize: 16, marginBottom: 24, marginLeft: 10, marginTop: 16}}>Featured</Text>
            <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                {featuredServices?.slice(0,4)?.map(service => <Service key={service.id} service={service}/>)}
            </View>
        </View>
    )
}

const HomeScreen = () => {
    const fontsLoaded = font()

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingHorizontal: 14}}>
                <Header />
                <ScrollView showsVerticalScrollIndicator={false} style={{zIndex: 2, position: "relative", marginTop: -60}}>
                    <Services />
                    <Transactions />
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

export default HomeScreen



const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#28519E"
        backgroundColor: "#fff",
    },
    // service
    serviceContainer: {
        width: "90%",
        backgroundColor: "#fff",
        marginLeft: "auto",
        marginRight: "auto",
        
        borderRadius: 15,
        padding: Platform.OS === "android" ? 20 :15,
        
        shadowColor: '#888',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        elevation: 10,
        shadowRadius: 8,
    },
    // transactions
    transWrapper:{
        marginTop: 30,
        width: "100%",
        height: 800,
    }
})