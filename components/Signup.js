import { StyleSheet, Text, View,SafeAreaView,Image,ScrollView,Button,TextInput,Pressable,Platform } from 'react-native'
import React,{useState} from 'react'
import Input from './Input'
import  MaterialIcons from 'react-native-vector-icons/AntDesign'
import { RadioButton } from 'react-native-paper';
import RadioButtonRN from 'radio-buttons-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Login from './Login';
import { showMessage, hideMessage } from "react-native-flash-message";
import patient from './Api/patient';
import { validatePathConfig } from '@react-navigation/native';

export default function Signup({navigation}) {
  
  const [PatientError,setPatientError]=useState('')
  const [passwordError,setpasswordError]=useState('')
  const [phoneError,setphoneError]=useState('')
  const [cnicError,setcnicError]=useState('')
  const [EmailError,setEmailError]=useState('')
  const [AddressError,setAddressError]=useState('')
  const [GenderError,setGenderError]=useState('')
  const [DateError,setDateError]=useState('')

  const [name,setPatientName]=useState('Ammad')
  const [password,setPassword]=useState('090078601')
  const [phone,setphone]=useState('0305-4623500')
  const [cnic,setcnic]=useState('35202-3503826-7')
  const [email,setEmail]=useState('ammad@chemist.com')
  const [Adress,setAddress]=useState('google')
  const [Gender,useGender]=useState("Male")
  const [DATE,setDATE]=useState("Select Date")
  



  const [date, setDate] = useState(new Date());
  const [mode,setMode]=useState('date')
  const [show,setShow]=useState(false)
  
 
  const [open,setOpen]=useState(false);
 
  const gender = [
    {
      label: 'Male'
     },
     {
      label: 'Female'
     }
    ];
   
  
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

   const onChange=(event,selectedDate) =>{
     const currentDate=selectedDate || date;
     setShow(Platform.OS==='ios')
     setDate(currentDate);

     let tempDate=new Date(currentDate)
     let fdate=tempDate.getDate() + '/' + (tempDate.getMonth()+1)+'/'+tempDate.getFullYear()
     let ftime=tempDate.getHours

     setDATE(fdate)
     console.log(fdate)
     console.warn(fdate)
   }
   const showMode=(currentMode) =>{
     setShow(true)
     setMode(currentMode)
   }
  return (
    <SafeAreaView style={styles.root}>

    <ScrollView
      contentContainerStyle={{
        paddingTop:30,
        paddingHorizontal:20,
      }}
    >
     <Text style={styles.level}>Register</Text>

     <Text style={styles.level1}>Enter your details to Register</Text>

     <View style={{marginVertical:10}}> 
      <Input label="Name"  iconName="person" placeholder="Enter your Name" 
      value={name} setvalue={setPatientName}  error={PatientError}
      />
      <Input label="Email" iconName="email" placeholder="Enter your email address" 
       value={email} setvalue={setEmail} error={EmailError}  />
  
      
    <Input label="cnic" iconName="cnic" placeholder="Enter your CNIC" keyboardType="numeric"
      value={cnic} setvalue={setcnic}
    />
    
    <Input keyboardType="numeric" label="Contact" iconName="phone-iphone" placeholder="Enter your Phone number" 
       value={phone} setvalue={setphone} secureTextEntry={false}
    />
   
    <Input label="Password"  iconName="lock" placeholder="Enter your Password " secureTextEntry={true}  Password='truedcw'
       value={password} setvalue={setPassword} 
    />
  
    <Text style={{fontSize:17}}>Select your gender</Text>
     <RadioButtonRN style={{ width:'100%' ,paddingHorizontal:2}}
       data={gender}
    

    selectedBtn={(e) => {
      useGender(e.label)
      console.log(Gender)
      
    }}
    />
    <Input label="Address" iconName="home"  placeholder="Enter your Address"  value={Adress} setvalue={setAddress} />
   

    <Text style={{fontSize:17}}>Select Date of Birth</Text>
     <View style={[styles.inputcontainer]}>
     <MaterialIcons name={"calendar"} style={{fontSize:25,color:'#00008b',marginRight:10}}  />
    
    <Pressable onPress={()=> showMode('date')} >
     
     {  show && (

       <DateTimePicker
       testID='dateTimePicker'
       value={date}
       mode={mode}
       display='default'
       onChange={onChange}

       />


     )}

    <Text style={{textAlign:'center'}}>{DATE} </Text>
    </Pressable>
    </View>
          <Pressable onPress={async ()=>{
          const res= await patient.post('/create-user',{
          name,email,password,phone,cnic, Adress,Gender,DATE
          })
           console.log(res.data)

           if (res.data.sucess !=false)
           { 
            navigation.navigate('Login')
           }
           else{
            showMessage({
              message: res.data.message,
              type: "danger",
              
            });
           }
          
            
            
          }} >
           <View style={styles.btn}>
           <Text style={{fontSize:18}}>Register </Text>
           </View>
          </Pressable>

     </View>
    




     

    
      
    

    
    
   
    
    
     </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  level:{

    
    fontSize:40,
    fontWeight:'bold',
    fontFamily:'Times New Roman',
  },
  root :{
    backgroundColor:'#F9FBFC',
    flex:1,
  },
  level1:{

    marginTop:15,
    fontSize:18,
    color:'#808080',
    fontFamily:'Times New Roman',
  },
  btn : {
    height:50,
    width:"80%",
    marginHorizontal:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    fontSize:100,
    flexDirection:'row',
    marginTop:40,
    opacity:30,
   
   backgroundColor :'#87ceeb'
  },
  container: {
  flex: 1,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
  },
  title: {
  textAlign: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  padding: 20,
  },
  datePickerStyle: {
  width: 200,
  marginTop: 20,
  },
  inputcontainer :{
    backgroundColor: 'white',
    height:55,
    flexDirection :'row',
    paddingHorizontal: 15,
    // borderWidth:0.8,
    borderRadius:7,
    alignItems:'center',
    textAlign:'center'


   }

})