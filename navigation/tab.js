import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Entypo, MaterialCommunityIcons, FontAwesome , Ionicons , Foundation, MaterialIcons   } from '@expo/vector-icons';


const tabBarIcons = (label, focused) => {
    switch (label) {
        case "Home":
            return <Foundation
            name="home"
            size={26}
            color={focused ? "#2666EC" : "#999"}
          />
        case "Recharge":
            return <Ionicons  
            name="ios-wallet"
           size={26}
            color={focused ? "#2666EC" : "#999"}
          />
        case "Payment":
            return <MaterialIcons 
            name="payments"
           size={26}
            color={focused ? "#2666EC" : "#999"}
          />
        case "Profile":
            return <FontAwesome 
            name="user"
           size={26}
            color={focused ? "#2666EC" : "#999"}
          />
        default:
            <Entypo
              name="md-home"
              size={20}
              color="#006600"
            />
    }
}

const FundButton = () => {
  return (
    <View style={{backgroundColor: "#F3F4F9", marginTop: -60, borderRadius: 50, height: 80, width: 80, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.fundButton}>
        <MaterialCommunityIcons size={24} color="#fff" name='line-scan'/>
      </View>
    </View>
  )
}

export default function MainTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row', position:"relative", backgroundColor: "#fff", padding: 8, height: 80, paddingBottom: 20}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
              
              
        const isFocused = state.index === index;

        const icons = tabBarIcons(label,isFocused)
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{...styles.tab}}
            >
                {icons} 
                {
                  label === "Fund" ? <FundButton /> : <Text style={{ color: isFocused ? '#C31C23' : '#555', fontSize:12, fontWeight: "600", fontFamily: "Ubuntu-Regular", marginLeft: 3, alignSelf: "center" }}>
              </Text>
                }
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }


const styles = StyleSheet.create({
    fundButton: {
      backgroundColor: "#2666EC", height: 60, width: 60, borderRadius: 50, justifyContent: "center", alignItems: "center",
      shadowColor: '#888',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.3,
      elevation: 15,
      shadowRadius: 8,
      padding: 14
    },
    tab: {
        paddingHorizontal: 10,
        borderRadius: 20,
        minWidth: "auto",
        flex: 1, justifyContent: "center", alignItems: "center" 
    }
})