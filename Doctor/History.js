import { StyleSheet, Text, View,SafeAreaView,Button,Image,ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { RNCamera } from 'react-native-camera'
import axios from 'axios'
import patient from '../components/Api/patient'

export default function History() {
  let i=0;
    const [Check,setCheck]=useState(true)

    let [labels, setLabels] = useState([]);
    let [testLable, settestLable] = useState([]);
    let filtertestsdata = [];
  
    let [description, setDescription] = useState([]);
  
    let data = [];
    const [detect,setdetect]=useState(' ')
    const  [symptoms,setSymptoms]=useState([])
    const  [TestName,setTestName]=useState([])
    const  [Medicine,setMedicine]=useState([])

    let TestNamesaArray = [];
    let symptomNamesArray = [];
    let MedicineNamesaArray = [];

     let prescription = [];

    let [a, setA] = useState([]);

    const [b, setB] = useState([]);
    const [c, setC] = useState([
    
  ]);
  let medi = [];
    const [id,setid]=useState('')

   useEffect(()=>{
            setid(id)
   })
    
    const barcodeReadHandler=({data})=>{
       
        
          i++;
          setid(data)
         if (i!=1)
         {
          setCheck(false)
          setdetect(data)
          console.log("QR Code Data "+ id)
        
          fetchApi()
         }
          
          
          
       
      }
      const fetchApi=async ()=>
      {
          
            const result=await patient.post('/prescription',{
              id     
          }) 
         if (result.data.success==true)
         {
          console.log("Hello")
          console.log(result.data.user.patientprescription)
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
         else{
             setSymptoms([])
             setMedicine([])
             setTestName([])
         }
       const lab=await patient.post('/LabResults',{
        id     
    }) 
    console.log(lab.data.test.Results)
    let tests=lab.data.test.Results
    let tiltles = [];
      // extract label array OR Tests Name
      for (let temp of tests) {
        tiltles.push(temp.TestName);
      }
      // extract labels from data
      settestLable(tiltles);
      for (let i = 0; i < tests.length; i++) {
        filtertestsdata.push(tests[i].eachTest);
      }
      // extract property names

      for (let temp of filtertestsdata) {
        for (let nexttemp of temp) {
          labels.push(nexttemp.testProperty);
          data.push(nexttemp.result);
        }
      }

      setDescription(tests);

      console.log("tests", tests);
      console.log("filter", filtertestsdata);
      console.log("labels", labels);
      console.log("data", data);
      console.log("TestLabel", testLable);

        
             
          
     
         
          
      }
  return (
    <SafeAreaView>
         { Check && <RNCamera style={styles.camera} onBarCodeRead={barcodeReadHandler}captureAudio={false} /> }

         
        {!Check && (
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
       <View>
      <Text>{Check}</Text>
      {/* <Button onPress={()=>{
        setCheck(!Check)
        
        }} title={Check?'Turn Camera Off':'Scan Again'} /> */}
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