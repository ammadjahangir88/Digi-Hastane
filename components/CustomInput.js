import { StyleSheet, Text, View,SafeAreaView,Image,TextInput} from 'react-native'
import React from 'react'

export default function CustomInput({value,setvalue,placeholder,secureTextEntry}) {
  
  return (
    <View>

     <TextInput 
       value={value}
       onChangeText={setvalue}
       placeholder={placeholder}
       style={styles.placeholder}  
       secureTextEntry={secureTextEntry}  />
     
    </View>
  )
}

const styles = StyleSheet.create({
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

    }

})