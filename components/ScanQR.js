import { StyleSheet, Text, View,SafeAreaView,Button,Image } from 'react-native'
import React,{useState} from 'react'
import { RNCamera } from 'react-native-camera'
import axios from 'axios'
import patient from './Api/patient';
export default function ScanQR()
 {
  const [image,setimage]=useState("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000")
   const [_id,setid]=useState('62b6a59490c3d9a37f15a77f')
   const [name,setName]=useState("")
   const [height,setheight]=useState("83 cm")
   const  [age,setAge]=useState("23")
   const [blood,setblood]=useState("C+")
   const [weight,setWeight]=useState("53")

  const [Check,setCheck]=useState(true)

  const [detect,setdetect]=useState(' ')
  let i=0;
  const barcodeReadHandler=({data})=>{

    const fetch=async ()=>{
       setid(data)
      const res= await patient.post('/scan-qr',{
        _id
      })
      console.log("Hello")
      console.log(res.data._id)
      // console.warn(res.data)
      setimage(res.data.avatar)
      setName(res.data.name)
      if (typeof(res.data.height) !== 'undefined')
      {
          setWeight(res.data.weight)
          setblood(res.data.bloodGroup)
          setAge(res.data.age)
          setheight(res.data.height)

      }
     
      
  
  }
    i++;
    
    
      
     
      setCheck(false)
      setdetect(data)
     
      console.log("QR Code Data "+ _id)
      fetch()
   
  }
 
  return (
    <SafeAreaView >
      
      { Check && <RNCamera style={styles.camera} onBarCodeRead={barcodeReadHandler}captureAudio={false} /> }
      {!Check && (
        <View>
        <Image
             style={styles.image}
             source={{uri: image}}
         />
         

         <Text style={{marginTop:25,fontWeight:'bold',fontSize:25,fontFamily:'Times New Roman',alignSelf:'center'}}>{name}</Text>
   
         <View  style={{marginTop:15,fontWeight:'bold',fontSize:25,fontFamily:'Times New Roman',flexDirection:'row'}}>
   
         <Text style={{marginLeft:70,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{age} </Text>
         <Text style={{marginLeft:195,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{blood} </Text>
   
          
         </View>  
         <View  style={{marginTop:10,fontSize:25,fontFamily:'Times New Roman',flexDirection:'row'}}>
   
         <Text style={{marginLeft:54,fontWeight:'normal',fontSize:18,fontFamily:'Times New Roman'}}>   Age </Text>
         <Text style={{marginLeft:160,fontWeight:'normal',fontSize:18,fontFamily:'Times New Roman'}}>Blood group </Text>
   
          
         </View>  
   
   
         <View  style={{marginTop:25,fontWeight:'bold',fontSize:25,fontFamily:'Times New Roman',flexDirection:'row'}}>
   
           <Text style={{marginLeft:70,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{weight}   </Text>
           <Text style={{marginLeft:177,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{height}   </Text>
   
       </View>  
       <View  style={{marginTop:10,fontSize:25,fontFamily:'Times New Roman',flexDirection:'row'}}>
   
       <Text style={{marginLeft:54,fontWeight:'normal',fontSize:18,fontFamily:'Times New Roman'}}>Weight                                    Height </Text>
       </View>  
       </View>)
      }
      <View>
      <Text>{Check}</Text>
      <Button onPress={()=>{
        setCheck(!Check)
        
        }} title={Check?'Turn Camera Off':'Scan Again'} />
      </View>

      
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  camera:{
    height:350,
    width:'80%',
    justifyContent:'center',
   
  },
  image :{
    alignSelf:'center',
    marginTop:20,
    height:250,
    width:' 80%',
    borderRadius: 50,
},
})