import { StyleSheet, Text, View,SafeAreaView,Button,ScrollView } from 'react-native'
import { useState,useEffect } from 'react';
import patient from '../components/Api/patient';
import { RNCamera } from 'react-native-camera'
import React from 'react'
import PieChart from 'react-native-pie-chart';
export default function LabTests() {
    const [id,setid]=useState("")
    let [labels, setLabels] = useState([]);
    const [Check,setCheck]=useState(true)

    let [testLable, settestLable] = useState([]);
    let filtertestsdata = [];
    const [detect,setdetect]=useState(' ')
    const widthAndHeight = 160
    const series = []
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800','#A52A2A','#87CEEB']
    const fruits = [2.6, 1.9, 2.5, 2.8, 26, 21]
    let [description, setDescription] = useState([]);
    let [lamda,setlamda]=useState([])
    let data = [];
   let i=0
    const fetchApi=async ()=>
    {
        
        // Instead of parseInt(), Number()
        // can also be used
       
  
    // Print the array of numbers
    // console.log(numberArray);
        console.log(series)
          const lab=await patient.post('/LabResults',{
            id     
        }) 
        console.log("h")
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
          for (var i = 0; i < data.length; i++)
          {
             series.push(parseInt(data[i]))
          }
          console.log(series)
          setDescription(tests);
    
          console.log("tests", tests);
          console.log("filter", filtertestsdata);
          console.log("labels", labels);
          console.log("data", data);
          console.log("TestLabel", testLable);
          setlamda(series)
          console.log(series)
    
        
    }
    useEffect(()=>{
        setid(id)
})
//    const x=
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
    

  return (
    
    <SafeAreaView>
    { Check && <RNCamera style={styles.camera} onBarCodeRead={barcodeReadHandler}captureAudio={false} /> }


    {!Check && (
                    



      <View >

       <View style={{margin:30}}>
       <Text style={{fontSize:30,fontWeight:'600',marginVertical:10,color:"#000000"}}>LabTests</Text>
      {description.map((j,k1) => (
        <View   key={k1} >
          <Text style={{fontSize:20,fontWeight:'600',marginVertical:10,color:"#000000",color:"#000000"}}>{j.TestName}</Text>
          <View style={{backgroundColor:"#FFFFFF"}}>
          {j.eachTest.map((b,key) => (
              <Text style={{fontSize:17,color:"#000000"}}key={key} >{'\u25CF'} {b.testProperty}     {b.result}   {b.normalValue}   </Text>
          ))}
        </View>
        </View>
      ))}
     </View>
     <View style={{width:'100%',flexDirection:'row',marginLeft:20}}>
            <View style={{marginTop:30}}>
            <Text>{lamda[2]}</Text>
            <PieChart
            widthAndHeight={widthAndHeight}
            series={lamda}
            sliceColor={sliceColor}
            doughnut={true}
            coverFill={'#FFF'}
          />
          </View>
          <View style={{marginLeft:40,marginTop:50}}>
            {
               labels.map((item,index)=>
              <View style={{flexDirection:'row'}} key={index}>
                <View style={{justifyContent:'center',marginLeft:0,padding:10}}>
                  <Text style={{backgroundColor:sliceColor[index],borderRadius:10,width:10,height:10}}>{'\u2024'}</Text>

                 </View>

                 <View>
                   <Text style={{color:'#000',fontSize:18}}>{item}</Text>
                 </View>
                 </View>

              )
           

            }

          </View>
        
            </View>

            </View>
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
})