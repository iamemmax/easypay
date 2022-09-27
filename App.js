import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RechargeScreen from './screens/RechargeScreen';
import PaymentScreen from './screens/PaymentScreen';
import MainTabBar from './navigation/tab';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './navigation/HomeStack';
import { NativeBaseProvider } from "native-base";

const Tab = createBottomTabNavigator()
// routes stack
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}  tabBar={(props) => <MainTabBar {...props} />}  sceneContainerStyle={{backgroundColor: "#F3F4F9"}} >
      <Tab.Screen name="Home" component={HomeStack} screenOptions={{headerShown:false}} options={{presentation:"modal",  
        animation:"slide_from_bottom", 
        tabBarLabel: "Home", 
      }}/>
      <Tab.Screen name="Recharge" component={RechargeScreen}  screenOptions={{headerShown:true, animation: 'fade_from_bottom', }}  />
      <Tab.Screen name="Fund" component={PaymentScreen} screenOptions={{headerShown:true}}/>
      <Tab.Screen name="Payment" component={PaymentScreen} screenOptions={{headerShown:true}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} screenOptions={{presentation:"modal", animation:"slide_from_bottom"}} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tabs />
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
