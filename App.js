/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Onboard1 from './Onboard1';
import Onboard from './components/Onboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Signup from './components/Signup';
import Logged from './Patient/Logged'
import DoctorLogged from './Doctor/DoctorLogged';
import FlashMessage from "react-native-flash-message";
import Prescription from './Patient/Prescription';
import DoctorLogin from './Doctor/DoctorLogin'
import privacy1 from './Doctor/Privacy1';
import PrivacyPolicy from './Doctor/PrivacyPolicy';
import PatientProfile from './Patient/PatientProfile';
import ScanQR from './components/ScanQR';
import History from './Doctor/History';
import LabTests from './Doctor/LabTests';
import PrescribeMedicine from './Doctor/PrescribeMedicine';
import Basic from './Patient/Basic';
import EditDoctorProfile from './Doctor/EditDoctorProfile';
import BMPCore from './Doctor/BMPCore';
import NurseLogged  from './Nurse/NurseLogged'
import Payment from './Patient/Payment';
const Stack = createNativeStackNavigator();


function App() {
  const [user, setUser]=useState(true);
  return (
  
    <NavigationContainer  >
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Onboard" component={Onboard} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Logged" component={Logged} />
    <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
    <Stack.Screen name="DoctorLogged" component={DoctorLogged} />
    <Stack.Screen name="Onboard1" component={Onboard1} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Stack.Screen name="PatientProfile" component={PatientProfile} />
    <Stack.Screen name="Prescription" component={Prescription} />
    <Stack.Screen name="ScanQR" component={ScanQR} />
    <Stack.Screen name="History" component={History} />
    <Stack.Screen name="Payment" component={Payment} />
    
    
    <Stack.Screen name="PrescribeMedicine" component={PrescribeMedicine} />

    <Stack.Screen name="Basic" component={Basic} />
    <Stack.Screen name="LabTests" component={LabTests} />
    <Stack.Screen name="EditDoctorProfile" component={EditDoctorProfile} />
    <Stack.Screen name="NurseLogged" component={NurseLogged} />

    <Stack.Screen name="BMPCore" component={BMPCore} />
    
    
    

   

      </Stack.Navigator>
      <FlashMessage position="bottom" floating={true} />
     
  </NavigationContainer>
  
 
  );
}



export default App;
