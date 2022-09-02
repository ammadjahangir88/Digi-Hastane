import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMainScreen from './HomeMainScreen';
import { useRoute } from '@react-navigation/native';
export default function DoctorHomeScreenStack() {
 
  const Stack =createNativeStackNavigator();
  const routes=useRoute()
  const _id = routes.params._id
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="HomeMainScreen" component={HomeMainScreen} initialParams={{_id:routes.params._id}}  /> 

   </Stack.Navigator> 
  )
}

const styles = StyleSheet.create({})