import React from 'react'
import { Octicons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import {  Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'




const Product = ({ product }) => {
    const { recipe, title, img } = product
    return (
      <TouchableOpacity style={styles.item}>
        <Image style={{
          width: "100%",
          height: "100%",

        }} source={{ uri: img }} />
        <View style={styles.productDetails}>
          <View style={styles.productTag}>
            <MaterialIcons style={{ marginRight: 3 }} name="photo-camera-front" size={18} color="#F07B3F" /><Text style={{ ...styles.recipe, fontFamily: 'Ubuntu-Medium', color: "#555555" }}> Guided </Text>
          </View>
          <View style={styles.productTag}>
            <Octicons style={{ marginRight: 3 }} name="shield-check" size={18} color="#F07B3F" /><Text style={{ ...styles.recipe, fontFamily: 'Ubuntu-Medium', color: "#555555" }}> Pro Only </Text>
          </View>
        </View>

        <View style={styles.productTitle}>
          <Text style={{ ...styles.productName, fontWeight: "600", fontFamily: 'Ubuntu-Bold' }}>{title}</Text>
          <View style={styles.recipeWrapper}>
            <Ionicons name="ios-time-outline" size={18} color="white" /><Text style={{ ...styles.recipe, fontFamily: 'Ubuntu-Regular' }}> {recipe} Minutes</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

export default Product

const styles = StyleSheet.create({
    item: {
        position: "relative",
        overflow: 'hidden',
        backgroundColor: '#000',
        width: 320,
        height: 280,
        marginRight: 10,
        marginTop: 15,
        borderRadius: 25
      },
    
      productDetails: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: 0,
        padding: 20,
        width: "100%"
    },
    productTag: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 25,
        borderRadius: 10,
        paddingHorizontal: 6
    },
    recipeWrapper: {
        flexDirection: "row",
    },
    recipe: {
        color: "#fff",
        fontSize: 14,
    },
    productName: {
        color: "#fff",
        fontSize: 22
    },
    productTitle: {
        position: "absolute",
        bottom: 0,
        padding: 20,
        width: "100%"
    },  
})