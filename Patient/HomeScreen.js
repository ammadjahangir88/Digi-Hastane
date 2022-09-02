import { StyleSheet, Text, View,SafeAreaView,Image,TouchableRipple,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import patient from '../components/Api/patient';
import Svg, { Path, SvgProps, Circle } from 'react-native-svg';
import Pie from 'react-native-pie'
import PieChart from 'react-native-pie-chart';
import {VictoryPie} from 'victory-native'
export default function HomeScreen({navigation}) {
 
  
  const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800','#A52A2A',"#00FF00"]
  let [lamda,setlamda]=useState([])
  // const fruits = [2.6, 1.9, 2.5, 2.8, 26, 21]
  let data = [];
  const series = []
  
  let [description, setDescription] = useState([]);
    
    const [image,setimage]=useState("https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000")
    route=useRoute()
    let [labels, setLabels] = useState([]);
    let [testLable, settestLable] = useState([]);
    let filtertestsdata = [];

    const [name,setName]=useState(" ")
    const [Address,setAddress]=useState(" ")
    const [Gender,setGender]=useState(" ")

    const [Phone,setPhone]=useState(" ")
    const [cnic,setcnic]=useState(" ")

   
    const _id = route.params._id
    const  id=route.params._id
    const fetchApi=async ()=>
    {
        
        const res=await patient.post('/scan-qr',{
            _id     
        }) 
    console.log("Hello")
    console.log(res.data._id)
    setimage(res.data.avatar)
    setName(res.data.name)
    setAddress(res.data.Adress)
    setPhone(res.data.phone)
    setcnic(res.data.cnic)
    setGender(res.data.Gender)
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
        fetchApi()
    },[])
  
    const age=23
     const blood='A+'
     const weight="58 kg"
     const height="183 cm"
     const widthAndHeight = 180
    
   
   
    
    return (
      <ScrollView>
       <SafeAreaView  style={{ flex: 0.5,  alignItems: 'center',}}>
         
         <Image
             style={styles.image}
             source={{uri: image}}
         />

        
   



         <Text style={{marginTop:25,fontWeight:'bold',fontSize:25,fontFamily:'Times New Roman'}}>{name}</Text>

         <View style={{flexDirection:'row',marginTop:20}}>
         <Text style={{marginLeft:15,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>   Contact : </Text>
         <Text style={{marginLeft:5,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{Phone}       </Text>

         </View>

         <View style={{flexDirection:'row',marginTop:5}}>
         <Text style={{marginLeft:10,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>Address :      </Text>
         <Text style={{marginLeft:5,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{Address}       </Text>

         </View>


         <View style={{flexDirection:'row',marginTop:5}}>
         <Text style={{marginLeft:52,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}> cnic :      </Text>
         <Text style={{marginLeft:5,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{cnic}       </Text>

         </View>


         <View style={{flexDirection:'row',marginTop:5}}>
         <Text style={{marginLeft:5,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>Gender :      </Text>
         <Text style={{marginLeft:0,fontWeight:'bold',fontSize:18,fontFamily:'Times New Roman'}}>{Gender}       </Text>

         </View>
         
   
       
       <View
            style={{
              paddingVertical: 15,
              width: 250,
              alignItems:'center',
              justifyContent: 'space-between',
            }}
          >
            {/* <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.5}
            coverFill={'#FFF'}
          /> */}

       

   
   
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


      

        







        {/* <LineChart data = {data} areaChart />
        <PieChart data = {data} donut /> */}
       
       </SafeAreaView>
       </ScrollView>
     )

    }

    const styles = StyleSheet.create({

        image :{
            marginTop:20,
            height:250,
            width:' 80%',
            borderRadius: 50,
        },
    })