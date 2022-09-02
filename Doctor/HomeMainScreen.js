import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView
  } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants/themes'
import ScanQR from '../components/ScanQR';
const {width}=Dimensions.get("screen");
import React from 'react'
import History from './History';
import { useRoute } from '@react-navigation/native';
import PrescribeMedicine from './PrescribeMedicine';
import { useState,useEffect } from 'react';
import patient from '../components/Api/patient';

export default function HomeMainScreen({navigation}) {
  const routes=useRoute()
  const [name,setName]=useState('')
  const _id = routes.params._id
  const fetchApi=async ()=>
    {
        
        const res=await patient.post('/ViewId',{
            _id     
        }) 
    console.log("Hello")
    console.log(res.data._id)
    // setimage(res.data.avatar)
    setName(res.data.name)
    // setAddress(res.data.Adress)
    // setPhone(res.data.phone)
    // setcnic(res.data.cnic)
    // setGender(res.data.Gender)
    

    }
    useEffect(()=>{
        fetchApi()
    })
  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.headers}>
        <View>
        <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome </Text>
        <Text  style={{fontSize:32,fontWeight:'bold',color:'#324ab2'}}>Dr {name}</Text>

        </View>

    </View>
    <View style={styles.optionListContainer}>
        <TouchableRipple onPress={()=>{navigation.navigate('ScanQR')}}>
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/scanqr1.png')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>Scan QR code</Text>
                </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{navigation.navigate('PrescribeMedicine')}}>
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/pres.jpeg')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>Prescriptions</Text>
                </View>
        </TouchableRipple>

     </View>

     <View style={styles.optionListContainer}>
         <TouchableRipple onPress={()=>{navigation.navigate('History')}} >
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/history.jpeg')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>Patient History</Text>
                </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{navigation.navigate('LabTests')}} >
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/labtest.jpeg')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>Lab Tests</Text>
                </View>
        </TouchableRipple>

                
 
     </View>

    
    

    
     <View style={styles.optionListContainer}>
     <TouchableRipple onPress={()=>{navigation.navigate('BMPCore')}} >
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/bpm-core.jpeg')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>BPM Core</Text>
                </View>
        </TouchableRipple>

    </View>
   


        </ScrollView>
    
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headers:{
          marginTop:30,
          marginLeft:15,
          flexDirection:'row',
          justifyContent:'space-between',

    },
    optionListContainer :{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        paddingHorizontal:10,
    },
    optionCard :{
        height:210,
    //     shadowOffset: { width: 10, height: 10 },
    //    shadowColor: 'black',
    //    shadowOpacity: 0.2,
        width:(width/2) -30,
        elevation:30,
        backgroundColor:'#FFFF',
        alignItems:'center',
        borderRadius:20,
        paddingTop:10,
        paddingHorizontal:10,
       
    },
    optionCardImage:{
        height:140,
        borderRadius:10,
        width:'100%'
    }
})

