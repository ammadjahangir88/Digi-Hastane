import { StyleSheet, Text, View,SafeAreaView,Image,ImageBackground,TextInput,Button,Pressable } from 'react-native'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import patient from '../components/Api/patient';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';
import Perm from  'react-native-vector-icons/MaterialIcons';
import { showMessage, hideMessage } from "react-native-flash-message";
import Call from  'react-native-vector-icons/Ionicons';
export default function PatientProfile({navigation}) {
  route=useRoute()
  const _id = route.params._id
  const [image,setimage]=useState("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000")
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [cnic,setcnic]=useState("")

  
  const fetchApi=async ()=>
    {
        
       const  res=await patient.post('/scan-qr',{
            _id     
        }) 
    console.log("Hello")
    console.log(res.data._id)
    setimage(res.data.avatar)
    setName(res.data.name)
    setPhone(res.data.phone)
    setcnic(res.data.cnic)
    setEmail(res.data.email)
    
    console.log(res.data.age)
    }

    const UpdateProfile=async ()=>{

      const  res=await patient.post('/updatePatientProfile',{
        _id ,name,phone,email,cnic
    }) 

    showMessage({
      message: res.data.message,
      type: "success",
      
    });
        

    }
    useEffect(()=>{
        fetchApi()
        console.log(name)
    },[])
  



  return (
    <SafeAreaView>
    <View style={{margin:15}}>
      <Text style={{fontSize:20,fontFamily:'Times New Roman',fontWeight:'bold',alignSelf:'center'}}>Edit Profile</Text>
     <View style={{alignSelf:'center',justifyContent:'center',borderRadius:15,height:100,width:100}}>

         <ImageBackground 
         style={{height:100,width:100,marginTop:30}}
         source={{uri: image}}
         imageStyle={{borderRadius:15}}
         >

         <View>
           <Icons name='camera' size={35} color='#808080' style={{
             opacity:0.7,
             alignItems:'center',
             justifyContent:'center',
             
             borderColor:'#808080',
             
             borderRadius:10,
           }} />
         </View>
         </ImageBackground>
     </View>
     <View style={{marginTop:20}}>
     <View style={styles.action}>
          <Perm name="perm-identity" color={'#00008b'} size={24}   />
          <TextInput
          
           defaultValue={name}
           onChangeText={newText => setName(newText)}
           
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#000000',
              },
            ]}
          />
        </View>

        <View style={styles.action}>
          <Call name="call" color={'#00008b'} size={20}  />
          <TextInput
            value={phone}
            onChangeText={newText => setPhone(newText)}
            placeholder="Phone"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#000000',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={'#00008b'} size={20}  />
          <TextInput
            value={email}
            onChangeText={newText => setEmail(newText)}
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#000000',
              },
            ]}
          />
        </View>
        

        <View style={styles.action}>
          <Ant name="idcard" color={'#00008b'} size={20}  />
          <TextInput
           value={cnic}
            placeholder="CNIC"
            onChangeText={newText => setcnic(newText)}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#000000',
              },
            ]}
          />
        </View>
    </View>
    </View>
    {/* <Button title="Update Profile"  
    // onPress={()=>{
    //   UpdateProfile()
    // }}
     /> */}
    <Pressable  onPress={UpdateProfile} >
       <View style={styles.btn}>
       <Text style={{color:'white',fontWeight:'bold',textTransform:'uppercase',fontSize:16,textAlign:'center'}}>Register </Text>
       </View>
      </Pressable>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({


  images :{
    marginTop:10,
    height:250,
    width:'90%',
    borderRadius: 40,
   

},
action: {
  backgroundColor: 'white',
    height:55,
    flexDirection :'row',
    paddingHorizontal: 15,
    // borderWidth:0.8,
    borderRadius:7,
    alignItems:'center',
    textAlign:'center',
    marginBottom:7,

},
textInput: {
    marginLeft:10,
  // flex: 1,
  // marginTop:  -12,
  // paddingLeft: 10,
  // color: '#05375a',
  // backgroundColor: 'white',
  // height:45,
  // width: '95%',
  // alignItems: 'center',
  // borderRadius:7,
  // marginHorizontal:0,
  // marginVertical:10,
  // justifyContent:'center',
  // borderColor:'black',
},
  btn : {
    // height:50,
    width:"80%",
    marginHorizontal:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    fontSize:100,
    flexDirection:'row',
    marginTop:10,
    opacity:30,
    paddingVertical:14,
    paddingHorizontal:10,
    borderRadius:8,
    backgroundColor:'#00FF00',
    

   
  //  backgroundColor :'#87ceeb'
  },
placeholder :{
       
  

},


})