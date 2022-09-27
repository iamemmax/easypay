import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import { Image, ScrollView } from 'native-base';
import { useState } from 'react';

const operators = [
    { id: 1, name: "MTN VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg" }} resizeMode="contain" /> },

    { id: 2, name: "Airtel VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://www.gizmochina.com/wp-content/uploads/2020/04/Airtel-Logo.png" }} /> },
    { id: 3, name: "9mobile VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://i0.wp.com/www.brandcrunch.com.ng/wp-content/uploads/2020/08/9-Mobile-Logo-Portrait-1-e1522792425752.jpg?fit=600%2C338&ssl=1" }} /> },
    { id: 4, name: "MTN VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg" }} resizeMode="contain" /> },

    { id: 5, name: "Airtel VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://www.gizmochina.com/wp-content/uploads/2020/04/Airtel-Logo.png" }} /> },
    { id: 6, name: "9mobile VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://i0.wp.com/www.brandcrunch.com.ng/wp-content/uploads/2020/08/9-Mobile-Logo-Portrait-1-e1522792425752.jpg?fit=600%2C338&ssl=1" }} /> },
   
    { id: 7, name: "MTN VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg" }} resizeMode="contain" /> },

    { id: 8, name: "Airtel VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://www.gizmochina.com/wp-content/uploads/2020/04/Airtel-Logo.png" }} /> },
    { id: 9, name: "9mobile VTU Nigeria", icon: <Image style={{width: "100%", height: "100%", }} source={{ uri: "https://i0.wp.com/www.brandcrunch.com.ng/wp-content/uploads/2020/08/9-Mobile-Logo-Portrait-1-e1522792425752.jpg?fit=600%2C338&ssl=1" }} /> },
   
]

export default function CarrierScreen({ route }) {
    const { goBack, navigate } = useNavigation()
    const { name, id } = route.params;

    const [active, setActive] = useState(1)
    const [airtime, setAirtime] = useState([])
    const [dataPlan, setDataPlan] = useState([])
    // const [operators, setOperators] = useState([])
    const [plans, setPlans] = useState([])

   

    const Carrier = ({item}) => {
        const {name, icon, id} = item
        return (
            <View style={styles.carrierBox}>
                    <TouchableOpacity onPress={() => setActive(id)} style={[styles.carrier, active === id ? styles.activeOperator : ""]}>
                    {/* <Image style={{ width: 30, height: 30,  100, resizeMode: "cover" }} source={{ uri: item?.logoUrls[0] }} /> */}
                        <View style={styles.imgWrapper}>
                            {icon}
                        </View>
                        <View style={styles.carrierText}>
                            <Text style={styles.discount}>50% Off</Text>
                            <Text style={styles.location}>Boonz</Text>
                            <Text style={styles.name}>{name}</Text>
                        </View>
                 
            </TouchableOpacity>
                </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}><MaterialIcons name="arrow-back-ios" size={16} color="#fff" /></TouchableOpacity>
                <Text style={styles.title}>Select Carrier</Text>
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
              <View style={styles.carrierWrapper}>      
                <FlatList
                        data={operators}
                        // keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <Carrier item={item}/>}
                        
                        numColumns="2"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "#2666EC"
    },
    header: {
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: 20,
        paddingHorizontal: 30, 
        height: 90,
        width: "100%",
        backgroundColor: "#2666EC",
        borderBottomRightRadius: 20,
        marginBottom: -60,
        zIndex: 9999
    },
    title: {
        fontFamily: "Ubuntu-Medium",
        color: "#fff",
        fontSize: 16,
        marginLeft: 5
    },
   
    carrierWrapper:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        paddingTop: 90,
        paddingBottom:120,
        paddingHorizontal: 25,
        backgroundColor: "#fff"
    },
    carrierBox:{
        width:"48%",
        height:160,
        marginHorizontal:3,
        marginVertical:3,
        padding: 15,
        alignItems:"center",
        backgroundColor:"#F7F9FE",
        borderRadius: 10
    },
    imgWrapper: {
        width: 60,
        height: 60,
        marginLeft: "auto",
        marginRight: "auto",
        overflow: "hidden",
        borderRadius: 20
    },
    carrierText:{
        paddingHorizontal:0,
        height:70,
        paddingVertical:5,
        marginTop:5,
        
    },
    discount:{
        fontSize: 16,
        fontFamily:"Lato-Bold",
        fontWeight: "800",
        textAlign:"center",
        color: "#1F1D36"
    },
    location: {
        fontSize: 12,
        color: "#1F1D36",
        opacity: 0.3,
        textAlign: "center",
        fontFamily: "Lato-Regular"

    },
    name:{
        marginTop: "auto",
        fontSize: 12,
        textAlign:"center",
        color: "#2666EC",
        fontFamily: "Lato-Regular"
    }
})