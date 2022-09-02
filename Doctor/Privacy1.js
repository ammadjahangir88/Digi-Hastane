import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import PrivacyPolicy from './PrivacyPolicy'
export default function Privacy1({navigation}) {
    useEffect(()=>{
        navigation.navigate('PrivacyPolicy')
    })
  return (
      <View>

      </View>
    
  )
}

const styles = StyleSheet.create({})