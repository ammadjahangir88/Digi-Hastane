import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

export default function DoctorAppointment() {
  return (
    <SafeAreaView>
     {/* <View style={{flexDirection:'row',borderWidth:1,marginHorizontal:20}}>
       <Text style={{fontSize:20,}}>Your Appointment is scheduled between {'\n'} </Text>
       <Text style= {{color:'blue',fontSize:20}}>   9:30 to 10:30 </Text> 
       <Text style={{fontSize:20}}>  on Monday 14 April 2020 with  Abdul Rehman </Text>
     </View> */}

           <View style={{paddingHorizontal:15,paddingVertical:15}}>
           
             <View style={{borderBottomWidth:0.2,marginBottom:3}}>
               <Text style={styles.title}> Your Appointment is  with Ali between </Text>
               <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:20,fontWeight:'normal',color:'red'}}> 9:00 am to 10 am </Text>
               <Text style={{fontSize:20,fontWeight:'normal'}}>  on 14 April </Text>
               </View>
               </View>
             
              <View style={{borderBottomWidth:0.2,marginTop:2}}>
               <Text style={styles.title}> Your Appointment is  with asad between </Text>
               <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:20,fontWeight:'normal',color:'red'}}> 10:00 am to 11 am </Text>
               <Text style={{fontSize:20,fontWeight:'normal'}}>  on 14 April </Text>
              </View>
              </View>


              <View style={{borderBottomWidth:0.2,marginTop:2}}>
               <Text style={styles.title}> Your Appointment is  with asad between </Text>
               <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:20,fontWeight:'normal',color:'red'}}> 11:00 am to 12 pm </Text>
               <Text style={{fontSize:20,fontWeight:'normal'}}>  on 14 April </Text>
              </View>
              </View>
              
              
           

           </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  title :{
    fontSize:20,
    fontWeight:'normal',
},
})