import React, { useEffect } from 'react'
import { AsyncStorage, StyleSheet, SafeAreaView, ScrollView, View,Text, FlatList, Image, TouchableOpacity,Platform } from 'react-native'
import { useFonts } from 'expo-font';
import FeaturesProducts from '../components/homeScreen/FeaturesProducts';
import Header from './../components/homeScreen/Header';
import Categories from './../components/homeScreen/Categories';
import { font } from '../constant/font';
import { AntDesign, SimpleLineIcons,FontAwesome,Ionicons,MaterialCommunityIcons, MaterialIcons  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import baseUrl from '../configs/baseUrl';

const serviceBg = ["#E4EDDB","#E4E3E3","#FFEBC9","#EEEBDD"]
const iconSize =  Platform.OS == "android" ? 18 : 26
const iconWH = {
    width: Platform.OS == "android" ? 50 : 60, height: Platform.OS == "android" ? 50 :60
}

const history  = [
    {id: 1, name: "MTN VTU", type: "Airtime", Description: "", discount: 0, price: "20,000", icon: <Image style={iconWH} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg"}} />},
    {id: 2, name: "Jumia Food", type: "Belle Refill", Description: "", discount: 0, price: "12,000", icon:  <Image style={iconWH} source={{uri: "https://brandcom.ng/wp-content/uploads/2018/04/jumia-food.jpg"}} />},
    {id: 3, name: "GOtv", type: "Subscription", Description: "", discount: 0, price: "8,000", icon: <Image style={iconWH} source={{uri: "https://contents101.com/wp-content/uploads/2019/11/92124e1f-05a0-48b9-b7db-0cd2c0530336-8219-000006b9a16f6b76.png"}} /> } ,
    {id: 4, name: "Airtel VTU", type: "Data TopUp", Description: "", discount: 0, price: "9,000", icon: <Image style={iconWH} source={{uri: "https://www.gizmochina.com/wp-content/uploads/2020/04/Airtel-Logo.png"}} />  },
    {id: 6, name: "Apple Airpod", type: "Payment", Description: "", discount: 0, price: "22,000", icon: <Image style={iconWH} source={{uri: "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg"}} />}  ,
    {id: 5, name: "Electricity", type: "Payment", Description: "", discount: 0, price: "20,000", icon: <Image style={iconWH} source={{uri: "https://cdn.vanguardngr.com/wp-content/uploads/2021/05/IE-logo-iE-logo-.png"}} />}  ,
    {id: 7, name: "9mobile VTU", type: "Airtime", Description: "", discount: 0, price: "100,000", icon: <Image style={iconWH} source={{uri: "https://i0.wp.com/www.brandcrunch.com.ng/wp-content/uploads/2020/08/9-Mobile-Logo-Portrait-1-e1522792425752.jpg?fit=600%2C338&ssl=1"}} />}  ,
]
const services  = [
    {id: 1, name: "Airtime", Description: "", discount: 0, icon: <SimpleLineIcons name="screen-smartphone" size={iconSize} color="#C31C23" />},
    {id: 2, name: "Data", Description: "", discount: 0, icon:  <AntDesign name="wifi" size={iconSize} color="#C31C23" />},
    {id: 3, name: "GOtv", Description: "", discount: 0, icon:<FontAwesome name="television" size={iconSize} color="#C31C23" /> } ,
    {id: 4, name: "Dstv", Description: "", discount: 0, icon: <FontAwesome name="television" size={iconSize} color="#C31C23" />  },
    {id: 6, name: "Startime", Description: "", discount: 0, icon: <FontAwesome name="television" size={iconSize} color="#C31C23" /> }  ,
    {id: 5, name: "Electricity", Description: "", discount: 0, icon: <SimpleLineIcons name="bulb" size={iconSize} color="#C31C23" />}  ,
    {id: 7, name: "Transport", Description: "", discount: 0, icon: <AntDesign name="car" size={iconSize} color="#C31C23" />}  ,
]
const featuredServices  = [
    {id: 1, name: "Flights", Description: "", discount: 0, icon: <Ionicons name="airplane-outline" size={iconSize} color="#C31C23" />}  ,
    {id: 2, name: "Crypto", Description: "", discount: 0, icon: <MaterialCommunityIcons name="litecoin" size={iconSize} color="#C31C23" />}  ,
    {id: 3, name: "Loan", Description: "", discount: 0, icon: <MaterialIcons name="attach-money" size={iconSize} color="#C31C23" /> } ,
    {id: 4, name: "Adverts", Description: "", discount: 0, icon: <AntDesign name="notification" size={iconSize} color="#C31C23" />}  ,
]

const Transactions = () => {
    return (
        <View style={styles.transWrapper}>
            <View style={{flexDirection: "row", justifyContent: "space-between", height: 160, width: "95%", marginLeft: "auto", marginRight: "auto",
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
        <TouchableOpacity style={{width: "100%", height: 75, marginBottom: 10, flexDirection: "row", alignItems: "center"}}
        onPress={()=>navigator.navigate("Recharge",{service})}
        >
            <View style={{
                borderRadius: 15, 
                marginRight: 15,
                overflow: "hidden",
                justifyContent:"center", alignItems: "center", padding: 14, ...iconWH, backgroundColor: "rgba(195, 28, 36, 0.05)",
            }}>
                {service?.icon}
            </View>
            <View>
                <Text style={{fontFamily: "Ubuntu-Medium", fontSize: 18, color: "#1F1D36"}}>{service?.name}</Text>
                <Text style={{fontFamily: "Ubuntu-Regular", fontSize: 15, color: "#888", marginTop: 3}}>{service?.type}</Text>
            </View>
            <View style={{marginLeft: "auto"}}>
                <Text style={{fontFamily: "Ubuntu-Medium", fontSize: 18, color: "#1F1D36", marginTop: 3}}>- $ {service?.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Services = () => {
    return (
        <View 
            style={styles.serviceContainer}>   
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{fontFamily: "Ubuntu-Bold", fontSize: 16, marginBottom: iconSize, color: "#1F1D36"}}>RECENT TRANSACTIONS</Text>
                <TouchableOpacity style={{ marginBottom: iconSize, marginLeft: -10, backgroundColor:"#E9EDF9", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10}}>
                    <Text style={{color: "#2666EC", fontFamily: "Ubuntu-Medium", fontSize: 14, }}>See All</Text>
                </TouchableOpacity>
            </View>
            {/* today's section */}
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{fontFamily: "Ubuntu-Regular", fontSize: 16, marginBottom: 16, color: "#888"}}>Today</Text>
            </View>
            <View>
                {history?.slice(0, 5)?.map(service => <Service key={service.id} service={service}/>)}
            </View>
            {/* yesterday section */}
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Text style={{fontFamily: "Ubuntu-Regular", fontSize: 16, marginBottom: 16, color: "#888"}}>Yesterday</Text>
            </View>
            <View>
                {history?.slice(5, 8)?.map(service => <Service key={service.id} service={service}/>)}
            </View>
        </View>
    )
}

const HomeScreen = () => {

    useEffect(() => {

        const payload = {
            "client_id": "JXwhcyFu9t54jXWokQbXKklNSkPVKtIM",
            "client_secret": "KaeuajiRDW-sjffJJApbr0qENKzQxL-i0qzOIF9xslXHNITloicqBBTon4BqRm4",
            "grant_type": "client_credentials",
            "audience": "https://topups-sandbox.reloadly.com"
        }

        const loadToken = async () => {
            try {
                const {data, status} = await axios.post("https://auth.reloadly.com/oauth/token", payload)
                if(status === 200){
                    const token = data.access_token
                    axios.defaults.headers.common["Authorization"] = `bearer ${token}`
                    await AsyncStorage.setItem("token", token)
                }
            } catch (error) {
                console.log(error)
            }
        }
        loadToken()
    },[])

    const fontsLoaded = font()

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
        <Header />
        <SafeAreaView style={styles.container}>
            <View style={{height: "100%", marginBottom: 222}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{zIndex: -1, position: "relative", backgroundColor: "#F3F4F9", paddingHorizontal: 5, paddingTop: 55, }}>
                    <Services />
                    {/* <Transactions /> */}
                </ScrollView>
            </View>
            
        </SafeAreaView>
        </>
    )
}

export default HomeScreen



const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        zIndex: -2
    },
    // service
    serviceContainer: {
        width: "95%",
        marginBottom: 600,
        backgroundColor: "#F3F4F9",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        borderRadius: 15,
        padding: Platform.OS === "android" ? 20 :15,
    },
    // transactions
    transWrapper:{
        width: "100%",
        height: 550,
    }
})