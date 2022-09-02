import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import patient from '../components/Api/patient';
import { useRoute } from '@react-navigation/native';
export default function Prescription({navigation}) {
 
 const  [symptoms,setSymptoms]=useState([])
 const  [TestName,setTestName]=useState([])
 const  [Medicine,setMedicine]=useState([])
 let arr = [];
 route=useRoute()
  const id = route.params._id
  let TestNamesaArray = [];
  let symptomNamesArray = [];
  let MedicineNamesaArray = [];

  let prescription = [];

  let [a, setA] = useState([]);

  const [b, setB] = useState([]);
  const [c, setC] = useState([
    
  ]);
  
  let medi = [];
 const fetchApi=async ()=>
 {
     
       const result=await patient.post('/prescription',{
         id     
     }) 
     console.log("Hello")
     console.log(result.data.user.patientprescription)
    //  let xt=result.data.user.patientprescription
    //  setSymptoms(result.data.user.patientprescription[0].symptomName)
    //   console.log(symptoms)
    // const x=result.data.user.patientprescription[0].Medicine
    //  console.log(x)
    //  setMedicine(x)

    //  setTestName(result.data.user.patientprescription[0].TestName)
    //  console.log(result.data.user.patientprescription[0].symptomName)

    prescription = result.data.user.patientprescription;
    // EXtract Data For TestNamesaArray
    prescription.map((testsarray) => {
      testsarray.TestName.map((singleTestName) => {
        TestNamesaArray.push(singleTestName);
      });
    });
    console.log("TestNamesaArray", TestNamesaArray);
    setA(TestNamesaArray);
    // EXtract Data For SymptomsaArray
    prescription.map((testsarray) => {
      testsarray.symptomName.map((singleSymptomName) => {
        symptomNamesArray.push(singleSymptomName);
      });
    });
    console.log("singleSymptomName", symptomNamesArray);
    setB(symptomNamesArray);
    //EXtract Data For Medicines
    prescription.map((mediarray) => {
      mediarray.Medicine.map((singleMediName) => {
        if (singleMediName.MedicineName !='')
        MedicineNamesaArray.push(singleMediName);
      });
    });
    console.log(" MedicineNamesaArray", MedicineNamesaArray);

    medi = MedicineNamesaArray;

    console.log("medi", medi);

    setC((data) => [
      ...data,
      ...medi.map(({ MedicineName, Timing }) => ({

        MedicineName,
        Timing,
      })),
    ]);
     console.log(c)
    console.log("aaaaaaaaaarrrrrr", c);
     
 }



 useEffect(()=>{
     fetchApi()
 },[])
 
 
  return (
    <ScrollView style={{margin:30}}>
            <Text style={{fontSize:30,fontWeight:'700',marginBottom:10,color:"#000000"}}>Symptoms</Text>
            <View  style={{backgroundColor:"#FFFFFF"}}>
             { a.map((item, key)=>(
                 <Text key={key}  style={{fontSize:15,color:"#000000"}} >{'\u25CF'}  { item } </Text>)
                )}
            </View>
            <Text style={{fontSize:30,fontWeight:'700',marginVertical:10,color:"#000000"}}>Test Name</Text>
             <View style={{backgroundColor:"#FFFFFF"}}>
           
            { b.map((item, key)=>(
                 <Text key={key} style={{fontSize:15,color:"#000000"}} > {'\u25CF'} { item } </Text>)
                )}
             </View>
            <Text style={{fontSize:30,fontWeight:'700',marginVertical:10,color:"#000000"}}>Medicine</Text>
            <View style={{backgroundColor:"#FFFFFF"}}>
            { c.map((item, key)=>(
                <View key={key}  >
                 <Text style={{fontSize:15,color:"#000000"}} >{'\u25CF'}  { item.MedicineName }  .. { item.Timing } </Text>    
                 </View>
                 ) 
                )
                }
              </View>

{/* 
      <View>
      {description.map((j,k1) => (
        <View key={k1} >
          <Text >{j.TestName}</Text>
          {j.eachTest.map((b,key) => (
              <Text key={key} >{b.testProperty}     {b.result}   {b.normalValue}   </Text>
          ))}
        </View>
      ))}
     </View> */}
        
        
            </ScrollView>
  )
}

const styles = StyleSheet.create({
  st :{
    fontWeight:'bold',
    fontSize:90,
    margin:0,
  }
})