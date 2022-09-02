import { StyleSheet, Text, View,Image ,SafeAreaView, Button, Pressable, ScrollView} from 'react-native'
import React from 'react'
import {  } from 'react-native-safe-area-context'
import Login from './Login'
import Signup from './Signup';
import DoctorLogin from '../Doctor/DoctorLogin'
export default function Onboard({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor:'#F9FBFC',flex:1}} >
      
       <ScrollView >
       
      <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/y2.jpeg')} style={styles.image} />
      
       
   <View >
       <View style={styles.indicatorContainer}>
           <View style={styles.indicator}></View>
           <View style={styles.indicator}></View>
           <View style={[styles.indicator,styles.indicatorActive]}></View>
           
       </View>
       <View style={{paddingHorizontal:20,paddingVertical:20}}>
           <View>
               <Text style={styles.title}>Book appointment with </Text>
               <Text style={styles.title}>Doctors  instantly! </Text>
           </View>
          
           <View style={{flexDirection:'row', }}  >
            
            <View style={styles.btn}>
            <Pressable onPress={() => navigation.navigate('Login')} >
           <Text   style={{fontSize:18}}>Login </Text>
           </Pressable>
           </View>
          
           <Pressable onPress={() => navigation.navigate('Signup')}   >
           <View style={styles.btn1}>
           <Text style={{fontSize:18}}>Signup </Text>
           </View>
           </Pressable >
           </View>
           
           </View>
          <View style={{flexDirection:'row',marginHorizontal:70}}>
          <Text style={{fontSize:20,fontFamily:'Times New Roman',fontWeight:'normal',alignContent:"center"}}>Are you a Doctor? </Text>
          <Pressable onPress={() => navigation.navigate('DoctorLogin')}>
           <Text style={{fontSize:20,fontFamily:'Times New Roman',fontWeight:'bold',textDecorationLine:"underline"}}> Get here!</Text>

           </Pressable>
          </View>
           
          
       
    </View>

    <Text></Text>
    </ScrollView>
    
    </SafeAreaView  >
  )
}

const styles = StyleSheet.create({
    image :{
        height:420,
        width:'100%',
        borderBottomLeftRadius: 70,
    },
    indicatorContainer :
    {
        height:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    indicator :{
        height:3,
        width:50,
        backgroundColor:'grey',
        marginHorizontal:15,
        borderRadius:5,
    },
    indicatorActive :{
        backgroundColor:'#A9A9A9'

    },
    title :{
        fontSize:32,
        fontWeight:'bold',
    },
    btn : {
        height:50,
        width:160,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        fontSize:100,
        flexDirection:'row',
        marginTop:50,
        opacity:30,
        marginHorizontal:5,
       backgroundColor :'#87ceeb'
    },
    btn1 : {
        height:50,
        width:160,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        fontSize:100,
        flexDirection:'row',
        marginTop:50,
        marginHorizontal:5,
       backgroundColor :'#5db8fe'
    }
})