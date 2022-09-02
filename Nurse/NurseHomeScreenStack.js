import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NurseHomeMainScreen from './NurseHomeMainScreen'
import { useRoute } from '@react-navigation/native';
export default function NurseHomeScreenStack() {
  const Stack =createNativeStackNavigator();
  const routes=useRoute()
  const _id = routes.params._id
  return (
   
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="NurseHomeMainScreen" component={NurseHomeMainScreen} initialParams={{_id:routes.params._id}}  /> 

   </Stack.Navigator> 
  )
}

const styles = StyleSheet.create({})