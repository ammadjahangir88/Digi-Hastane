import { StyleSheet, Text, View,SafeAreaView,Image,TextInput,Button,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { showMessage, hideMessage } from "react-native-flash-message";
import CustomInput from './CustomInput'
import Signup from './Signup';
import axios from 'axios'
import Logged from '../Patient/Logged';
import patient from './Api/patient';
const fetchApi=async ()=>
{
    console.log("Hello bachy")
    try {
        const res=await axios.get('http://localhost:4500/')
        console.log(res.data)

    } catch (error) {
        console.log(error.message)
        
    }
   
}
export default function Login({navigation}) {
    const [email,setemail]=useState("");
    const [cnic,setcnic]=useState('')
    const [password,setPassword]=useState("");
    // const [_id,setid]=useState('Helle')
   
    useEffect(()=>{
        fetchApi()
    })
  return (
    
    <SafeAreaView style={styles.root}>
     <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/logo.png')} style={styles.image} />
     <Text style={styles.stext}>Email or CNIC </Text>
    <CustomInput placeholder="UserName" value={email}  setvalue={setemail}  />
    <Text style={styles.stext}>Password </Text>
    <CustomInput placeholder="Password" value={password} setvalue={setPassword} secureTextEntry={true} />
   
    <Pressable onPress={async () =>{
       setcnic(email)
        try {
            
            const res=await patient.post('/sign-in',{
              
                cnic,email,password
            })  
            console.log(email)
            console.log("Hello")
            console.log(res.data)
            // console.warn(res.data)
            // console.log(res.data.user._id)
            try {
                
            } catch (error) {
                
            }
            if (res.data.sucess==true)
            {
                
                navigation.navigate('Logged',{_id:res.data.user._id})
                
            }
            else
            {
                showMessage({
                    message: res.data.message,
                    type: "danger",
                    
                  });
               
            
        }
            
        } catch (error) {
            showMessage({
                message: error.message,
                type: "danger",
                
              });
              console.log(error.message)
        }
        console.log(cnic)
        setcnic(email)
    }} >
       

           <View style={styles.btn}>
           <Text style={{fontSize:18}}>Login </Text>
           </View>
    </Pressable>
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:18,fontFamily:'Times New Roman',textDecorationLine:"underline",marginTop:40}}> 
    Forgot Password?
    </Text>

    <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:18,fontFamily:'Times New Roman',marginTop:40}}> 
     Don't have an account?   
    </Text>
    <Pressable onPress={()=>{
        
        navigation.navigate('Signup')
        
    }}>
    <Text style={{fontSize:18,fontFamily:'Times New Roman',marginTop:40,marginLeft:9,color:'blue'}}> 
     Signup
    </Text>
    </Pressable>
    </View>

    




    

    </View>
   
    
    

      </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
    image :{
        marginTop:40,
        height:200,
        width:'100%',
        borderBottomLeftRadius: 70,
    },
    root :{
    //    alignItems:'center',
       backgroundColor:'#F9FBFC',
       flex:1,

    },
    stext :{
        marginHorizontal:20,
        fontSize:17,
        alignItems:'center'
    },
    placeholder :{
       
        backgroundColor: 'white',
        height:55,
        width: '90%',
        alignItems: 'center',
        borderRadius:7,
        marginHorizontal:20,
        marginVertical:10,
        justifyContent:'center',
        borderColor:'black',

    },
    btn : {
        height:50,
        width:"80%",
        marginHorizontal:'10%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        fontSize:100,
        flexDirection:'row',
        marginTop:40,
        opacity:30,
       
       backgroundColor :'#87ceeb'
    },

})