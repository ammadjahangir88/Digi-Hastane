import { StyleSheet, Text, View,SafeAreaView,TextInput,Button,ScrollView,Pressable } from 'react-native'
import React,{useState} from 'react'
import { showMessage, hideMessage } from "react-native-flash-message";
import patient from '../components/Api/patient';
import { RNCamera } from 'react-native-camera'

export default function PrescribeMedicine() {
  
    const [id,setid]=useState("")
    const [Check,setCheck]=useState(true)
    const [inputList, setInputList] = useState([{ symptomName: "" }]);
    const [val,setVal]=useState("ali")
    const [testInputList, setTestInputList] = useState([{ TestName: "" }]);
     const x='setval'
     const [detect,setdetect]=useState(' ')
     const handleSave = async () => {
      console.log("symptom", inputList);
      console.log("test", testInputList);
  
      const finallist = [];
  
      for (let temp of inputList) {
        finallist.push(temp);
      }
  
      for (let temp of testInputList) {
        finallist.push(temp);
      }
  
      for (let temp of medicineInputList) {
        finallist.push(temp);
      }
  
      let Id = id;
      finallist.push(Id);
  
      console.log("final", finallist);
  
      const res=await patient.post('/addPrescription',{
         finallist
    })  
    if (res.data.sucess==true)
            {
                
              showMessage({
                message: "Tests Saved Successfully",
                type: "success",
                
              });
                
            }
    };
    let i=0
    const [medicineInputList, setMedicineInputList] = useState([
      { MedicineName: "", Timing: "" },
    ]);

    const handleInputChange = (e, index=0,name) => {
     
      const value=e
      console.log(value)
      console.log(name, " ", value, " ", index);

    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);

    console.log(inputList)
      };

      // handle input change for Test
      const handleInputChangeTest = (e, index,name) => {
        const value=e
        console.log(value)
        console.log(name, " ", value, " ", index);
    
        const listTest = [...testInputList];
        listTest[index][name] = value;
        setTestInputList(listTest);
      };




      const handleInputChangeMedicine = (e, index,name) => {
        const value=e

        console.log(name, " ", value, " ", index);
    
        const listTest = [...medicineInputList];
        listTest[index][name] = value;
        setMedicineInputList(listTest);
        console.log(listTest);


      }
         // handle click event of the Remove button for Test
      const handleRemoveClickTest = (index) => {
      const listTest = [...testInputList];
      listTest.splice(index, 1);
      setTestInputList(listTest);
  };
      const handleRemoveClickMedicine = (index) => {
        const listTest = [...medicineInputList];
        listTest.splice(index, 1);
        setMedicineInputList(listTest);
      };


      const handleAddClickMedicine = () => {
        setMedicineInputList([...medicineInputList, { MedicineName: "" }]);
      };

    

  

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  
      const handleAddClick = () => {
        setInputList([...inputList, { symptomName: "" }]);
      };
      const handleAddClickTest = () => {
        setTestInputList([...testInputList, { TestName: "" }]);
      };
    const barcodeReadHandler=({data})=>{
       
        
        i++;
        setid(data)
       if (i!=1)
       {
        setCheck(false)
        setdetect(data)
        console.log("QR Code Data "+ id)
      

      }
        
        
        
     
    }
    
    
  return (
    <SafeAreaView>
  {/* <TextInput value={val}
                 
                 placeholder="Email"
                 name="symptomName"
                 onChangeText={text => handleInputChange(text)}  /> */}


    { Check && <RNCamera style={styles.camera} onBarCodeRead={barcodeReadHandler}captureAudio={false} /> }


    {!Check && (
      <ScrollView  style={{margin:20}}>
           <Text style={{fontSize:30,fontWeight:'700',marginBottom:10,color:"#000000"}}>Symptoms</Text>
           {inputList.map((x, i) => {
                   return (
                     <View key={i} >
                        <TextInput 
                         style={styles.placeholder}
                         name="symptomName"
                         placeholder="Enter Symptom Name"
                         value={x.symptomName}
                         onChangeText={text => handleInputChange(text,i,"symptomName")}  />
       
                     
                       
                         
                       <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                         {inputList.length !== 1 && (

                          <Pressable onPress={() => handleRemoveClick(i)}>
                           <Text style={{backgroundColor:"#00FF00",fontSize:15,marginVertical:19,marginHorizontal:15,height:30,width:70,alignContent:'center',borderRadius:7,alignSelf:'center',textAlign:'center'}}>Remove</Text>
       
                         
      
                          </Pressable>
                         )}
                         {inputList.length - 1 === i && (
                          //  <Button className="btnsave" onPress={handleAddClick} title="Add"  />
                          <Pressable onPress={handleAddClick}>
                          <Text style={{backgroundColor:"#F0FFFF",fontSize:15,marginVertical:19,marginHorizontal:15,height:30,width:50,alignContent:'center',borderRadius:7,alignSelf:'center',textAlign:'center'}}>Add</Text>
                          </Pressable>
                         )}
                       </View>
                     </View>
                   );
                 })}
        <Text style={{fontSize:30,fontWeight:'700',marginBottom:10,color:"#000000"}}>Tests</Text>
        {testInputList.map((x, i) => {
                   return (
                     <View key={i}>
                        <TextInput 
                         style={styles.placeholder}
                         name="TestName"
                         placeholder="Enter Test Name"
                         value={x.TestName}
                        onChangeText={text => handleInputChangeTest(text,i,"TestName")}  />
       
                     
                       
                         
                       <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                         {testInputList.length !== 1 && (
                        
                          <Pressable onPress={() => handleRemoveClickTest(i)}>
                           <Text style={{backgroundColor:"#00FF00",fontSize:15,marginVertical:19,marginHorizontal:15,height:30,width:70,alignContent:'center',borderRadius:7,alignSelf:'center',textAlign:'center'}}>Remove</Text>
      
      
                          </Pressable>
                            
                         )}
                         {testInputList.length - 1 === i && (
                          <Pressable onPress={handleAddClickTest}>
                          <Text style={{backgroundColor:"#F0FFFF",fontSize:15,marginVertical:19,marginHorizontal:15,height:30,width:50,alignContent:'center',borderRadius:7,alignSelf:'center',textAlign:'center'}}>Add</Text>
                          </Pressable>
                           
                          
                         )}
                       </View>
                     </View>
                   );
                 })}
        
       
       <Text style={{fontSize:30,fontWeight:'700',marginBottom:10,color:"#000000"}} >Medicine</Text>
       {medicineInputList.map((x, i) => {
                   return (
                     <View key={i}>
                       
                        <TextInput 
                         name="symptomName"
                         placeholder="Enter Symptom Name"
                         style={styles.placeholder}
                         value={x.MedicineName}
                        onChangeText={text => handleInputChangeMedicine(text,i,"MedicineName")}  />
       
                       <TextInput 
                         name="symptomName"
                         placeholder="Enter Timing"
                         style={styles.placeholder}
                         value={x.Timing}
                        onChangeText={text => handleInputChangeMedicine(text,i,"Timing")}  />
                  
                       
       
                       <View style={{flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
                         {medicineInputList.length !== 1 && (
            
                          <Pressable onPress={() =>handleRemoveClickMedicine(i)}>
                          <Text style={{backgroundColor:"#00FF00",fontSize:15,marginVertical:19,marginHorizontal:15,height:30,width:70,alignContent:'center',borderRadius:7,alignSelf:'center',textAlign:'center'}}>Remove</Text>
     
     
                         </Pressable>
                            
                         )}
                         {medicineInputList.length - 1 === i && (
                          //  <Button className="btnsave" onPress={handleAddClickMedicine} title="Add"  />

                          <Pressable onPress={handleAddClickMedicine}>
                          <Text style={{backgroundColor:"#F0FFFF",fontSize:15,marginVertical:19,marginHorizontal:15,height:30,width:50,alignContent:'center',borderRadius:7,alignSelf:'center',textAlign:'center'}}>Add</Text>
                          </Pressable>
                           
                          
                         )}
                       </View>
                     </View>
                   );
                 })}
                 
       
           <Button onPress={handleSave} title="save" />
           </ScrollView>

            
       )
      }

    


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
mystyle:{

},

mrx :{

},
camera:{
  height:350,
  width:'80%',
  justifyContent:'center',
 
},

placeholder :{
       
  backgroundColor: 'white',
  height:45,
  width: '95%',
  alignItems: 'center',
  borderRadius:7,
  marginHorizontal:0,
  marginVertical:10,
  justifyContent:'center',
  borderColor:'black',

}

})