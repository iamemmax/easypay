import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RechargeScreen from './screens/RechargeScreen';
import PaymentScreen from './screens/PaymentScreen';

const Stack = createNativeStackNavigator();
// routes stack
const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} screenOptions={{headerShown:false}} options={{presentation:"modal",  animation:"slide_from_bottom"}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{presentation:"modal", animation:"slide_from_bottom"}} />
      <Stack.Screen name="Recharge" component={RechargeScreen}  screenOptions={{headerShown:true}}  options={{presentation:"modal", animation:"slide_from_bottom"}} />
      <Stack.Screen name="Payment" component={PaymentScreen} screenOptions={{headerShown:true}} options={{presentation:"modal", animation:"slide_from_bottom"}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer><Stacks /></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
