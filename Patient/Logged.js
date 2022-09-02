import { StyleSheet, Text, View,Button,SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ScanQR from '../components/ScanQR';
import ListStack from './ListStack';
import Appointment from './Appointment';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRoute } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
export default function Logged({navigation}) {
  const LoggedIN=false
  const Home = "Home";
  const ScanQRcode = "ScanQRcode";
  const settingsName = "Settings";
  const List="List"
  const routes=useRoute()
  return (
        
      // <Tab.Navigator  initialRouteName="HomeScreen"

      // screenOptions={{headerShown:false,(route)=>{}}}
      // <View>
      //  <Text>{{route.params._id}}</Text>
      //  </View>
      
      // >
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Home") {
            iconName = focused ? 'home' : 'home-outline';
  
          } else if (rn === ScanQRcode) {
            iconName = focused ? 'calendar' : 'calendar-outline';
  
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          else if (rn === "List") {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === "Appointment") {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          
          

         if (iconName !="calender")
          return <Ionicons name={iconName} size={size} color={color} />;

        },
        tabBarActiveTintColor: '#5db8fe',
        tabBarInactiveTintColor: 'gray',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70},
        headerShown:false
        
      })}
    >
        <Tab.Screen name="Home" component={HomeScreen} initialParams={{_id:routes.params._id}}  />
     
        <Tab.Screen name="Appointment" component={Appointment} initialParams={{_id:routes.params._id}}/>
       
        <Tab.Screen name="List" component={ListStack} initialParams={{_id:routes.params._id}} />
        
        

        
      </Tab.Navigator>
  
  )
}

const styles = StyleSheet.create({})