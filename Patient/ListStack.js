import { StyleSheet, Text, View,Image,SafeAreaView,Button} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListMainScreen from './ListMainScreen';
import { useRoute } from '@react-navigation/native';
export default function ListStack({navigation}) {
  function Alpha({navigation}){
    return(
      <SafeAreaView>
        <Text>Hello Alpha</Text>
        <Button title='Go to Bete' onPress={()=>{navigation.navigate('Beta')}} />
  
       
      </SafeAreaView>
    )
  }
  
  function Beta(){
    return(
      <SafeAreaView>
        <Text>Hello Alpha</Text>
      </SafeAreaView>
    )
  }
  const Stack =createNativeStackNavigator();
  route=useRoute()
  const _id = route.params._id
 return (
  <Stack.Navigator screenOptions={{headerShown:false}} >
  <Stack.Screen name="ListMain" component={ListMainScreen} initialParams={{_id:route.params._id}} />

   </Stack.Navigator> 
  
   
  )
}

const styles = StyleSheet.create({

    image :{
        marginTop:20,
        height:200,
        width:'80%',
        borderRadius: 50,
    },
})