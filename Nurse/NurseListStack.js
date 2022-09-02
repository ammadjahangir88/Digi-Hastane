import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NurseMainList from './NurseMainList'
import OnBoard from '../components/Onboard'
import Onboard1 from '../Onboard1';
import { useRoute } from '@react-navigation/native'
export default function NurseListStack() {
  const z="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
  const Stack =createNativeStackNavigator();
  const routes=useRoute()
  const _id = routes.params._id
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="MainList" component={NurseMainList} initialParams={{_id:routes.params._id}}    />
    <Stack.Screen name="Onboard1" component={Onboard1}  />
   

   </Stack.Navigator> 
  )
}

const styles = StyleSheet.create({})