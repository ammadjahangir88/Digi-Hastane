import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import patient from '../components/Api/patient';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';
import { showMessage, hideMessage } from "react-native-flash-message";
export default function EditDoctorProfile() {
    route=useRoute()
    const _id = route.params._id
    const [image,setimage]=useState("")
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [Department,setcnic]=useState("")
    const fetchApi=async ()=>
    {
        
       const  res=await patient.post('/ViewId',{
            _id     
        }) 
    console.log("Hello")
    console.log(res.data._id)
    setimage(res.data.avatar)
    setName(res.data.name)
    setPhone(res.data.phone)
    setcnic(res.data.Department)
    setEmail(res.data.email)
    
    console.log(res.data.age)
    }

    const UpdateProfile=async ()=>{

      const  res=await patient.post('/updateDoctorProfile',{
        _id ,name,phone,email,Department
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
    <View>
     <View style={{margin:15}}>
      <Text style={{fontSize:20,fontFamily:'Times New Roman',fontWeight:'bold',alignSelf:'center'}}>Edit Profile</Text>
  
     <View style={{marginTop:20}}>
     <View style={styles.action}>
          <FontAwesome name="user-o" color={'#808080'} size={20}  />
          <TextInput
           defaultValue={name}
           onChangeText={newText => setName(newText)}
           
            placeholder="Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#808080',
              },
            ]}
          />
        </View>

        <View style={styles.action}>
          <Feather name="phone" color={'#808080'} size={20}  />
          <TextInput
            value={phone}
            onChangeText={newText => setPhone(newText)}
            placeholder="Phone"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#808080',
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={'#808080'} size={20}  />
          <TextInput
            value={email}
            onChangeText={newText => setEmail(newText)}
            placeholder="Email"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#808080',
              },
            ]}
          />
        </View>
        

        <View style={styles.action}>
          <Ant name="idcard" color={'#808080'} size={20}  />
          <TextInput
           value={Department}
            placeholder="CNIC"
            onChangeText={newText => setcnic(newText)}
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: '#808080',
              },
            ]}
          />
        </View>
    </View>
    </View>
    <Button title="Update Profile"  
    onPress={()=>{
      UpdateProfile()
    }}
    />
    </View>
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
  flexDirection: 'row',
  marginTop: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5,
},
textInput: {
  flex: 1,
  marginTop: Platform.OS === 'ios' ? 0 : -12,
  paddingLeft: 10,
  color: '#05375a',
},
})
