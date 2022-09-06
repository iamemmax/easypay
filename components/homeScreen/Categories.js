import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Category from './Category';

const Categories = () => {

    const categories = [
        {id: 1, recipe: 20, title: "Tartine Bread" , img: "https://img.taste.com.au/D9DPobZA/w1200-h630-cfill/taste/2016/11/iced-doughnuts-and-cinnamon-doughnut-holes-104029-1.jpeg"},
        {id: 2, recipe: 5, title: "Hot Chicken", img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d89607fd-aaa9-4ac9-aa6b-f79bb59f9177/d5du4y2-b6f94767-4a4b-4352-9631-36653a78d0a4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4OTYwN2ZkLWFhYTktNGFjOS1hYTZiLWY3OWJiNTlmOTE3N1wvZDVkdTR5Mi1iNmY5NDc2Ny00YTRiLTQzNTItOTYzMS0zNjY1M2E3OGQwYTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fgO1MudkhSNFU6QKnbFIrWcumbioRP3njepnuJ3t3N8"},
        {id: 3, recipe: 15, title: "Fresh Spinach", img: "https://img.livestrong.com/375/clsd/getty/f200d9173fcd4dbab32b0d602d9c130f.jpg"},
        {id: 4, recipe: 26,title: "Checken Noodles", img: "https://img-global.cpcdn.com/recipes/ae0a40251a4f98a5/1200x630cq70/photo.jpg"},
        {id: 5, recipe: 6,title: "Shawarma", img: "https://b.zmtcdn.com/data/pictures/9/20263009/3ceeae0ac564f5f70b2cabcb08996e73.jpg"},
        {id: 6, recipe: 8,title: "Barbeque", img: "https://www.wellplated.com/wp-content/uploads/2021/05/How-Long-to-Cook-Grilled-Chicken-Breast-480x270.jpg"},
    ]
    
    
    
    return (
        <View  style={styles.container}>
            <Text style={styles.categoryHeader}>Categories</Text>
            <FlatList
                data={categories}
                horizontal={true}
                renderItem={({ item }) => <Category category={item} />}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        marginTop: 30
    },
    categoryHeader:{
        color: "#555555", 
        fontWeight: "600", 
        fontSize: 18, 
        fontFamily: 'Ubuntu-Medium'
    }
})