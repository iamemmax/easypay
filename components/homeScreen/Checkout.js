import { AsyncStorage, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import { Select } from 'native-base';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Input } from "@rneui/themed";
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import baseUrl from '../../configs/baseUrl';
import BonnzSelect from '../shared/Select';
import BonnzInput from '../shared/BonnzInput';

export default function Checkout({ route }) {
    const [active, setActive] = useState(1)
    const [airtime, setAirtime] = useState([])
    const [dataPlan, setDataPlan] = useState([])
    const [operators, setOperators] = useState([])
    const [plans, setPlans] = useState([])
    // page data
    const { goBack, navigate } = useNavigation()
    const { name, id } = route.params;
    const [selectedLanguage, setSelectedLanguage] = useState();

    const iconSize = Platform.OS == "android" ? 18 : 26

    const iconWH = {
        width: Platform.OS == "android" ? 30 : 60, height: Platform.OS == "android" ? 30 : 60,
        borderRadius: 100
    }

    // const operators = [
    //     { id: 1, name: "MTN VTU", icon: <Image style={iconWH} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg" }} resizeMode="contain" /> },

    //     { id: 4, name: "Airtel VTU", icon: <Image style={iconWH} source={{ uri: "https://www.gizmochina.com/wp-content/uploads/2020/04/Airtel-Logo.png" }} /> },
    //     { id: 7, name: "9mobile VTU", icon: <Image style={iconWH} source={{ uri: "https://i0.wp.com/www.brandcrunch.com.ng/wp-content/uploads/2020/08/9-Mobile-Logo-Portrait-1-e1522792425752.jpg?fit=600%2C338&ssl=1" }} /> },
    //     { id: 3, name: "GOtv", icon: <Image style={iconWH} source={{ uri: "https://contents101.com/wp-content/uploads/2019/11/92124e1f-05a0-48b9-b7db-0cd2c0530336-8219-000006b9a16f6b76.png" }} /> },
    // ]

    useEffect(() => {
        const fetchOperators = async () => {
            const token = await AsyncStorage.getItem("token")
            const config = {
                headers: {
                    Authorization: `bearer ${token}`
                }
            }
            try {
                const { data, status } = await axios.get(`${baseUrl}/operators/countries/ng`, config)
                if (status === 200) {
                    console.log({ data })
                    // airtime
                    const airtimeArr = data.filter(elem => !elem?.data)
                    setAirtime(airtimeArr?.reverse())
                    // data plan
                    const dataArr = data.filter(elem => elem?.data === true)
                    setDataPlan(dataArr?.reverse())
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchOperators()
    }, [])

    useEffect(() => {
        setActive(dataPlan[0]?.id)
    },[dataPlan])

    useEffect(() => {
        if (id === 1) {
            return setOperators(airtime)
        }
        setOperators(dataPlan)
    }, [airtime, dataPlan, id])

    useEffect(() => {
        const selectOper = operators?.find(elem => elem?.id === active)
        if (selectOper) {
            const result = Object.keys(selectOper?.fixedAmountsDescriptions).map((key) => [Number(key), selectOper?.fixedAmountsDescriptions[key]]);
            setPlans(result)
        }

    }, [operators, active])


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}><MaterialIcons name="arrow-back-ios" size={20} color="#fff" /></TouchableOpacity>
                <Text style={styles.title}>Buy {name}</Text>
            </View>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={{ height: 1000 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.operator_type}>
                        <Text style={styles.label}>
                            Select Mobile Carrier
                        </Text>
                        <View style={styles.list_operator}>
                            <FlatList
                                data={operators}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => setActive(item?.id)} style={[styles.operator, active === item?.id ? styles.activeOperator : ""]}>
                                        <View>
                                            <Image style={{ width: 30, height: 30, borderRadius: 100, resizeMode: "cover" }} source={{ uri: item?.logoUrls[0] }} />
                                        </View>
                                        
                                    </TouchableOpacity>
                                )}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />

                        </View>
                    </View>

                    <View>
                        <Input placeholder='09069003426' keyboardType='number-pad'
                            rightIcon={<AntDesign name="contacts" size={20} color="#2666EC" />}
                            labelStyle={styles.label}

                            containerStyle={styles.inputContainer}
                            inputContainerStyle={styles.input}
                        />

                        <BonnzInput placeholder={"09069003426"} iconRight={<AntDesign name="contacts" size={20} color="#2666EC" />}
                        keyboardType={"number-pad"}
                        label="Reciever's Phone Number"
                        />

                        {id === 1 ? <Input placeholder='500' keyboardType='number-pad' label="Amount"
                            labelStyle={styles.label}
                            containerStyle={styles.inputContainer}
                            inputContainerStyle={styles.input}

                        />
                            : <>
                            {/* <Text style={styles.label}>
                                Select Data Plan
                            </Text>
                                <View style={styles.input}>
                                    <Picker
    
                                        mode="dialog"
                                        selectedValue={selectedLanguage}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        
                                    </Picker>
                                </View> */}
                                <BonnzSelect label="Select Data Plan" items={plans}>
                                {plans.length ? plans?.map((plan, index) =>  <Select.Item key={index} label={`${operators?.[0]?.destinationCurrencySymbol}${(plan[0].toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))} - ${plan[1]}`} value={index} />) : <Select.Item label={"Loading..."} value="java" />}
                                </BonnzSelect>
                            </>}

                        <View style={styles.transaction}>
                            <Text style={[styles.label, { fontSize: 16, paddingLeft: 20, borderBottomColor: "#999", borderBottomWidth: .3, paddingVertical: 10 }]}>Transaction Summary</Text>
                            <View style={styles.transactionBox}>

                                <View style={styles.fees}>
                                    <Text style={styles.transactionText}>Discount:</Text>
                                    <Text style={styles.transactionText}>5%</Text>
                                </View>
                                <View style={styles.fees}>
                                    <Text style={styles.transactionText}>Transaction value:</Text>
                                    <Text style={styles.transactionText}>200.00 NGA</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 40 }} >
                            <Button onPress={() => navigate("Success")} size='lg' titleStyle={styles.button} color="#2666EC">Complete</Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2666EC",
        width: "100%",
    },
    header: {
        position: "relative",
        bottom: "0%",
        height: 120,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    title: {
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Ubuntu-Light",
        color: "#fafafa",
        fontSize: 20
    },
    button: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 16,
    },
    content: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        minHeight: 120,
        marginTop: -20,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 30,
        zIndex: 9999,
        position: "relative"
    },
    operator: {
        opacity: .6,
        borderWidth: 1,
        borderColor: "#eee",
        marginRight: 10,
        // width:140,
        paddingHorizontal: 20,
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    activeOperator: {
        opacity: 1,
        borderWidth: 1,
        borderColor: "#2666EC"
    },

    // -----------input style---------------------
    selectDialogInput: {
        borderWidth: 20,
        borderColor: "yellow",
        backgroundColor: "red"
    },
    label: {
        color: "#888",
        fontSize: 14,
        fontFamily: "Ubuntu-Regular",
        fontWeight: '500',
        marginTop: 5,
        marginBottom: 12

    },
    list_operator: {
        height: 60,
        marginBottom: 14
    },
    operator_img: {

    },
    operator_desc: {
        paddingHorizontal: 10,

    },
    operator_name: {
        fontFamily: "Ubuntu-Medium",
        fontSize: 16,
        color: "#1F1D36"
    },
    operator_dis: {
        fontSize: 12,
        color: "#888"
    },


    // input styles
    input: {
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        paddingHorizontal: 10,
        width: "100%",
        height: 50,
        color: "#1F1D36",

    },
    inputContainer: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginVertical: 0,
        width: "100%",
        height: 80,
        marginBottom: 14
    },

    //fees style
    transaction: {
        marginTop: 30,
        backgroundColor: "#eee",
        borderRadius: 5
    },

    transactionBox: {
        paddingBottom: 5,
        paddingHorizontal: 20,
        height: 80

    },
    fees: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 8,


    },
    transactionText: {
        fontFamily: "Ubuntu-Regular",
        fontSize: 14,
        color: "#1F1D36",
        opacity: .5
    }

})