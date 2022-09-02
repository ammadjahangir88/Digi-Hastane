import { StyleSheet, Text, View,TextInput} from 'react-native'
import React,{useEffect, useState} from 'react'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Icon from 'react-native-vector-icons/AntDesign'
import COLORS from './Colors'

export default function Input({label,iconName,error,Password,secureTextEntry,value,setvalue,
    onFocus=()=>{},
    ...props
   }) {
  
   const [ErrorCheck,setErrorCheck]=useState(false)
   const [hidepassword,setHidePassword]=useState(secureTextEntry)
  useEffect(()=>{{
    if (error !='')
    {
      setErrorCheck(true)
    }
    else
    {
      setErrorCheck(false)
    }

   
        
  }},[])


  const [ic,setIC]=useState(label)
  const [isFocused,setisFocused]=useState(false)
  
  return (
    <View style={{marginBottom:20}}>

    <Text style={styles.label}>{label}</Text>
    
    {/* <Text>
    <Icon name={iconName}  />
    </Text> */}
    
    <View style={[styles.inputcontainer ]}>
    {ic !='cnic' ? <MaterialIcons name={iconName} style={{fontSize:25,color:'#00008b',marginRight:10}}  />
    : <Icon name='idcard' style={{fontSize:25,color:'#00008b',marginRight:10}}  />}

    <TextInput
    secureTextEntry={hidepassword}
    value={value}
    onChangeText={setvalue}
    onFocus={()=>{
        onFocus();
        setisFocused(true)
    }}
      autoCorrect={false}
      {...props}

      
    />
    { Password && (
        <MaterialIcons  onPress={()=>setHidePassword(!hidepassword)}
        style={{fontSize:22,color:'#00008b',position: 'absolute', right: 0}}
        name='remove-red-eye'
        
      
        />
      )}
    
  
   
    
    </View>
    {
    ErrorCheck && (
    <Text style={{color:'red',fontSize:10,marginTop:5,marginBottom:0}}>
    {error}
    </Text>
    )}
    
       
    </View>
  )
}

const styles = StyleSheet.create({
   label :{
       marginVertical:5,
       fontSize:17,
       
   },
   inputcontainer :{
    backgroundColor: 'white',
    height:55,
    marginVertical:0,
    flexDirection :'row',
    paddingHorizontal: 15,
    // borderWidth:0.8,
    borderRadius:7,
    alignItems:'center',
  


   }


})