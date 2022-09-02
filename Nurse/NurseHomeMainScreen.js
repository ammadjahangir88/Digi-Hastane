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
  } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from '../constants/themes'
import ScanQR from '../components/ScanQR';
const {width}=Dimensions.get("screen");
import React from 'react'
import History from '../Doctor/History';
import { useRoute } from '@react-navigation/native';
import PrescribeMedicine from '../Doctor/PrescribeMedicine';
import { useState,useEffect } from 'react';
import patient from '../components/Api/patient';
import { showMessage, hideMessage } from "react-native-flash-message";
import dateFormat from "dateformat";

export default function NurseHomeMainScreen({navigation}) {
    const routes=useRoute()
  const [name,setName]=useState('')
  const [_id,setID] = useState(routes.params._id)
  const mac="2C:F4:32:3C:70:93"
  let [temprature, setTemprature] = useState();
    let [ECG, setECG] = useState();
    let [heartRate, setheartRate] = useState();
  let [date, setDate] = useState();

   let [first, setFirst] = useState();
  let [second, setSecond] = useState();
  let [third, setThird] = useState();
   let [firstDayTemp,setfirstDayTemp]=useState([]);
   let [firstDayHeart,setfirstDayHeart]=useState([]);
   let [secondDayTemp,setsecondDayTemp]=useState([]);
   let [secondDayHeart,setsecondDayHeart]=useState([]);

   let [ThirdDayTemp,setThirdDayTemp]=useState([]);
   let [ThirdDayHeart,setThirdDayHeart]=useState([]);

   let [FourthDayTemp,setFourthDayTemp]=useState([]);
   let [FourthDayHeart,setFourthDayHeart]=useState([]);

   let [FifthDayTemp,setFifthDayTemp]=useState([]);
   let [FifthDayHeart,setFifthDayHeart]=useState([]);

   let [SixDayTemp,setSixDayTemp]=useState([]);
   let [SixDayHeart,setSixDayHeart]=useState([]);

   let [SeventhDayTemp,setSeventhDayTemp]=useState([]);
   let [SeventhDayHeart,setSeventhDayHeart]=useState([]);
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

    const CallApi=async ()=>
    {
        const _id="62275416970c69a22417b99d"
    console.log("Hello")
    const  res=await patient.get('/Find_Record',{
    }) 
    
    console.log(res)
    
   
    if (res)
    {
        const x=res.data.doctor.date
        console.log(x)
        console.log(res.data.doctor.Department)
        const z="Patient from Department "+res.data.doctor.Department  +" Ward No"+res.data.doctor.ward+" Bed No "+res.data.doctor.bed+" is calling you"
    showMessage({
        message: z,
        type: "success",
        duration:99999999
        
      });
    }
   
    } 
    const trendlist=['potw','totw','motw']
    const [selectedTrend,setselectedTrend]=useState('potw')

   let  i=0;
    useEffect(()=>{
        if (i==0)
        {
            fetchApi()
        }
        i++;
        const interval = setInterval(() => {
            CallApi()
          }, 5000);
        
       
           

    })
  return (
    <SafeAreaView>
    <View style={styles.headers}>
        <View>
        <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome </Text>
        <Text  style={{fontSize:32,fontWeight:'bold',color:'#324ab2'}}>Nurse {name}</Text>

        </View>

    </View>
    <View style={styles.optionListContainer}>
        <TouchableRipple onPress={()=>{navigation.navigate('ScanQR')}}>
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/scanqr1.png')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>Scan QR code</Text>
                </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{navigation.navigate('History')}} >
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/history.jpeg')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>Patient History</Text>
                </View>
        </TouchableRipple>
       

     </View>

     <View style={styles.optionListContainer}>
        
        <TouchableRipple onPress={()=>{navigation.navigate('LabTests')}} >
                <View style={styles.optionCard} >
                   <Image source={require('/Users/ammadjahangir/Documents/digihastany/assets/labtest.jpeg')} style={styles.optionCardImage}/>
                   <Text style={{marginTop:10,fontSize:18,fontWeight:'700'}}>Lab Tests</Text>
                </View>
        </TouchableRipple>
                
 
     </View>

    
    
      
   


   
    
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