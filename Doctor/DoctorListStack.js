import { StyleSheet, Text, View,SafeAreaView,Button} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorMainList from './DoctorMainList'
import OnBoard from '../components/Onboard'
import Onboard1 from '../Onboard1';
import privacy1 from './Privacy1';
import PrivacyPolicy from './PrivacyPolicy';
import { useRoute } from '@react-navigation/native'
export default function DoctorListStack() {
const z="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
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
  const routes=useRoute()
  const _id = routes.params._id
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="MainList" component={DoctorMainList} initialParams={{_id:routes.params._id}}    />
    <Stack.Screen name="Onboard1" component={Onboard1}  />
   

   </Stack.Navigator> 
  )
}

const styles = StyleSheet.create({})