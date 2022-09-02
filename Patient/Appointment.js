import { FlatList,StyleSheet, Text, View,SafeAreaView,TextInput,Pressable } from 'react-native'
import React,{useState} from 'react'
import { showMessage, hideMessage } from "react-native-flash-message";
import { useRoute } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import  MaterialIcons from 'react-native-vector-icons/AntDesign'
import patient from '../components/Api/patient';
import ModalDropdown from 'react-native-modal-dropdown';

export default function Appointment({navigation}) {
 route=useRoute()
 const _id = route.params._id
 const [PatientCNIC,setval]=useState("35202-35038267")
 const [doctorslist,setlist]=useState(["Ali","Ammad","Asad","Khan"])
 const [DoctorName,setDoctor]=useState()
 const [Timings, setSelectedLanguage] = useState("9:00 am - 10:00 am");
 const [DATE,setDATE]=useState("Select Date")
 const [date, setDate] = useState(new Date());
  const [mode,setMode]=useState('date')
  const [show,setShow]=useState(false)
 const onChange=(event,selectedDate) =>{
  const currentDate=selectedDate || date;
  setShow(Platform.OS==='ios')
  setDate(currentDate);

  let tempDate=new Date(currentDate)
  // let fdate=tempDate.getDate() + '/' + (tempDate.getMonth()+1)+'/'+tempDate.getFullYear()
  let fdate=tempDate.getFullYear() + '-' + (tempDate.getMonth()+1)+'-'+tempDate.getDate()
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

    <SafeAreaView style={{marginTop:90}}>
      <Text style={styles.cnic}>CNIC</Text>
      <TextInput 
       value={PatientCNIC}
       onChangeText={setval}
      
       style={styles.placeholder}  
         />
         <Text style={styles.cnic}>Time Slot</Text>
         <Picker
         mode='dialog'
      selectedValue={Timings}
      style={styles.picker}
      pickerStyleType={true}
    onValueChange={(itemValue, itemIndex) =>
       setSelectedLanguage(itemValue)
      }>
      <Picker.Item label="9:00 am - 10:00 am" value="9:00 am - 10:00 am" />
      <Picker.Item label="10:00 am - 11:00 am" value="10:00 am - 11:00 am" />
      <Picker.Item label="11:00 am - 12:00 am" value="11:00 am - 12:00 am" />
      <Picker.Item label="12:00 am - 01:00 pm" value="12:00 am - 01:00 pm" />
      <Picker.Item label="01:00 pm - 02:00 pm" value="01:00 pm - 02:00 pm" />
      
      
      </Picker>

      <Text style={styles.cnic}>Doctor</Text>
      <Picker
         mode='dialog'
      selectedValue={DoctorName}
      style={styles.picker}
      pickerStyleType={true}

      onValueChange={(itemValue, itemIndex) =>
       setDoctor(itemValue)
      }>
        
        {doctorslist.map((item,key) => {
        return (<Picker.Item key={key} label={doctorslist[key]} value={doctorslist[key]} />) //if you have a bunch of keys value pair
    })}
    </Picker>
    <Text style={styles.cnic}>Select Date</Text>
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
      console.log(PatientCNIC)
      console.log(Timings)
      console.log(DoctorName)
      console.log(DATE)

          const res= await patient.post('/addAppointment',{
          PatientCNIC,DoctorName,Timings,DATE,
          })
           console.log(res.data)

           if (res.data.sucess !=false)
           { 
            showMessage({
              message:"Appointment Scheduled Successfully",
              type: "success",
              
            });
           }
           else{
            showMessage({
              message: res.data.message,
              type: "danger",
              
            });
           }
          
            
            
          }} >

            {/* <Text style={styles.buttontext}>
             Submit

            
            </Text> */}
    <View style={styles.btn}>
           <Text style={{color:'white',fontWeight:'bold',textTransform:'uppercase',fontSize:16,textAlign:'center'}}>Submit </Text>
           </View>
           </Pressable>
    
    
      
      

     
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft:20,
   flex: 1,
   paddingTop: 22,
   
  },
  btn : {
    // height:50,
    width:"80%",
    marginHorizontal:'10%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    fontSize:100,
    flexDirection:'row',
    marginTop:40,
    opacity:30,
    paddingVertical:14,
    paddingHorizontal:10,
    borderRadius:8,
    backgroundColor:'#00FF00',
    

   
  //  backgroundColor :'#87ceeb'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  cnic :{
    marginHorizontal:20,
    marginTop:5,
    marginBottom:5,
    color:"#000000",
    fontSize:15,
    fontWeight:'900'
  },
  placeholder :{
       
    backgroundColor: 'white',
    height:40,
    width: '90%',
    alignItems: 'center',
    borderRadius:7,
    marginHorizontal:20,
    marginVertical:10,
    justifyContent:'center',
    borderColor:'black',

  },  
  picker:{
    marginTop:0,
    marginLeft:7,
  },
  inputcontainer :{
    backgroundColor: 'white',
    height:50,
    flexDirection :'row',
    paddingHorizontal: 15,
    // borderWidth:0.8,
    borderRadius:7,
    alignItems:'center',
    textAlign:'center',
    width:"90%",
    marginLeft:15


   }
});
