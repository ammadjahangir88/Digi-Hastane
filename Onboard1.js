import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Onboard from './components/Onboard'

export default function Onboard1({navigation}) {

    useEffect(()=>{
        navigation.navigate('Onboard')
    })
  return (
    <View>
      <Text>Onboard1</Text>
    </View>
  )
}

const styles = StyleSheet.create({})