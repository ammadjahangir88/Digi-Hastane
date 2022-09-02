import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRoute } from '@react-navigation/native';
import React from 'react'
import NurseHomeScreenStack from './NurseHomeScreenStack';
import NurseListStack from './NurseListStack';



export default function DoctorLogged() {
    const Tab = createBottomTabNavigator();
    const routes=useRoute()
    const _id = routes.params._id
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Home") {
            iconName = focused ? 'home' : 'home-outline';
  
          } 
          else if (rn === "List") {
            iconName = focused ? 'list' : 'list-outline';
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
        <Tab.Screen name="Home" component={NurseHomeScreenStack} initialParams={{_id:routes.params._id}}   />
     
       
        <Tab.Screen name="List" component={NurseListStack} initialParams={{_id:routes.params._id}}  />
        
        

        
      </Tab.Navigator>
  
  )
}

const styles = StyleSheet.create({})