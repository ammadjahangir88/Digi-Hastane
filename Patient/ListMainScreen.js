import { StyleSheet, Text, View,SafeAreaView,Image,Icon,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import patient from '../components/Api/patient';
import { useRoute } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/AntDesign'
import Cbs from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Found from  'react-native-vector-icons/Foundation' 
import File from 'react-native-vector-icons/FontAwesome' 
import Lock from 'react-native-vector-icons/Fontisto' 
import Logout from 'react-native-vector-icons/Entypo' 
import PatientProfile from './PatientProfile';
import Prescription from './Prescription';
import Onboard from '../components/Onboard';
import Basic from './Basic';
export default function ListMainScreen({navigation}) {
    route=useRoute()
    const [image,setimage]=useState("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000")
    const [name,setName]=useState(" ")
    const _id = route.params._id
    let res=""
    const fetchApi=async ()=>
    {
        
           res=await patient.post('/scan-qr',{
            _id     
        }) 
    console.log("Hello")
    console.log(res.data._id)
    setimage(res.data.avatar)
    setName(res.data.name)
    
    console.log(res.data.age)
    }
    useEffect(()=>{
        fetchApi()
    },)

  return (
    <SafeAreaView>
        <View style={{flexDirection:'row',borderBottomWidth:0.2}}>
        <Image
             style={styles.image}
             source={{uri: image}}
         />
         <View style={{alignContent:'center',margin:27,justifyContent:'center',alignItems:'center'}}>
             <Text style={{fontFamily:'Times New Roman',fontSize:20,fontWeight:'bold'}} >{name}</Text>
         </View>
         <View style={{alignContent:'center',margin:10,justifyContent:'center',alignItems:'center'}}>
             <TouchableOpacity onPress={()=>{
                 navigation.navigate('PatientProfile',{_id})
                 fetchApi()
                 fetchApi()

             }}>
             <Text style={{fontFamily:'Times New Roman',fontSize:15,fontWeight:'bold',color:'#324ab2'}} >Edit Profile</Text>
             </TouchableOpacity>
         </View>
         </View>
         <Text style={{fontFamily:'Times New Roman',marginTop:20,marginHorizontal:20,fontSize:25,fontWeight:'900',}}>Account Info</Text>
    <View styles={styles.menuWrapper}>
        <TouchableRipple onPress={()=>{navigation.navigate('Basic',{_id})}}>
            <View style={styles.menuItem}>
            <Icons name='person' size={25} color='#324ab2'  />
            <Text style={styles.menuItemText}>Basic Information</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
            <Material name='barschart' size={25} color='#324ab2'  />
            <Text style={styles.menuItemText}>Health Matrices</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{navigation.navigate('Prescription',{_id})}}>
            <View style={styles.menuItem1}>
            <Cbs name='hospital-symbol' size={25} color='#324ab2'  />
            <Text style={styles.menuItemText}>Conditions & Symptoms</Text>
            </View>
        </TouchableRipple>

        
        
       

    </View>
 

   
    <Text style={{fontFamily:'Times New Roman',marginTop:20,marginHorizontal:20,fontSize:25,fontWeight:'900',}}>About App</Text>

    <View styles={styles.menuWrapper}>
        <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
            <Found name='info' size={25} color='#324ab2'  />
            <Text style={styles.menuItemText}>About </Text>
            <Text style={styles.menuItemText1}>Digi</Text>
            <Text style={styles.menuItemText2}>Hastane</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem}>
            <File name='file-text' size={25} color='#324ab2'  />
            <Text style={styles.menuItemText}>Terms and Conditions</Text>
            </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}}>
            <View style={styles.menuItem1}>
            <Lock name='locked' size={25} color='#324ab2'  />
            <Text style={styles.menuItemText}>Privacy Policy</Text>
            </View>
        </TouchableRipple>
        
       

    </View>

    <TouchableRipple onPress={()=>navigation.navigate('Onboard')}>
            <View style={styles.menuItem}>
            <Logout name='log-out' size={25} color='#324ab2'  />
            <Text style={styles.menuItemText}>Log Out</Text>
            </View>
        </TouchableRipple>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    images :{
        height:70,
        width:'20%',
        borderRadius: 100,

    },

    image :{
        marginTop:0,
        height:70,
        width:'20%',
        borderRadius: 100,
    },
    menuWrapper:{
        
        marginTop:80,
        borderBottomWidth:0.2,
        height:50,
    },
    menuItem :{
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:30,
       
    },
    menuItemText :{
        marginLeft:20,
        fontWeight:'600',
        fontSize:16,
        lineHeight:26,
        justifyContent:'center'

 
    },
    menuItemText1 :{
        color:'#324ab2',
        fontWeight:'600',
        fontSize:16,
        lineHeight:26,
        justifyContent:'center'

 
    },
    menuItemText2 :{
        color:'#8B8000',
        fontWeight:'600',
        fontSize:16,
        lineHeight:26,
        justifyContent:'center',

 
    },
    menuItem1 :{
       
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:30,
        borderBottomWidth:0.2
        
       
    },
    

})