import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import { useEffect,useState } from 'react';
import React from 'react'
import patient from '../components/Api/patient';
import { BarChart,LineChart } from "react-native-chart-kit";

import dateFormat from "dateformat";

import { Dimensions } from 'react-native';

export default function BMPCore() {

    const screenWidth = 280;
  const mac="2C:F4:32:3C:70:93"
  const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(254, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.6,
    useShadowColorFromDataset: false // optional
  };
  let [temprature, setTemprature] = useState();
    let [ECG, setECG] = useState();
    let [heartRate, setheartRate] = useState();
  let [date, setDate] = useState();

   let [first, setFirst] = useState();
  let [second, setSecond] = useState();
  let [third, setThird] = useState();
   let [firstDayTemp,setfirstDayTemp]=useState([]);
   let [firstDayHeart,setfirstDayHeart]=useState([]);
   let [secondDayTemp,setsecondDayTemp]=useState([]);
   let [secondDayHeart,setsecondDayHeart]=useState([]);

   let [ThirdDayTemp,setThirdDayTemp]=useState([]);
   let [ThirdDayHeart,setThirdDayHeart]=useState([]);

   let [FourthDayTemp,setFourthDayTemp]=useState([]);
   let [FourthDayHeart,setFourthDayHeart]=useState([]);

   let [FifthDayTemp,setFifthDayTemp]=useState([]);
   let [FifthDayHeart,setFifthDayHeart]=useState([]);

   let [SixDayTemp,setSixDayTemp]=useState([]);
   let [SixDayHeart,setSixDayHeart]=useState([]);

   let [SeventhDayTemp,setSeventhDayTemp]=useState([]);
   let [SeventhDayHeart,setSeventhDayHeart]=useState([]);
   

  const fetchApi=async ()=>
      {
          
         const res=await patient.post('/getbpmdata',{
              mac    
          })    
      console.log(res.data.currentUserBPM)
      let allBpmRecords = res.data.currentUserBPM;
      let todayCompleteDate = new Date();
      let todayOnlyDate = todayCompleteDate.getDate();

      console.log("date", todayOnlyDate);
      let startDate = todayOnlyDate - 6;
      let currentUserData = [];

      allBpmRecords.forEach((eachRecord) => {
        //filter current user data
        if (eachRecord.mac === mac) {
          currentUserData.push(eachRecord);
        }
      });

      let pastSevenDaysData = [];

      // dateFormat("2019-04-30T08:59:00.000Z", "mmmm dS, yyyy")
      let dateobj = {};
      currentUserData.forEach((eachRecord) => {
        //filter last week data
        let eachRecordOnlyDate = dateFormat(eachRecord.date, "   d");
        let date = dateFormat(eachRecord.date, " mmmm  dS,yyyy");

        if (dateobj[date] === undefined) {
          dateobj[date] = date;
        }

        if (
          eachRecordOnlyDate >= startDate &&
          eachRecordOnlyDate <= todayOnlyDate
        ) {
          pastSevenDaysData.push(eachRecord);
        }
      });

      let tempratureFirst = [];
      let heartRateFirst = [];

      let tempratureSecond = [];
      let heartRateSecond = [];

      let tempratureThird = [];
      let heartRateThird = [];

      let tempratureFourth = [];
      let heartRateFourth = [];

      let tempratureFifth = [];
      let heartRateFifth = [];

      let tempratureSixth = [];
      let heartRateSixth = [];

      let tempratureSeventh = [];
      let heartRateSeventh = [];


      pastSevenDaysData.forEach((eachPastRecord) => {
        let eachRecordDate = dateFormat(eachPastRecord.date, "   d");
        console.log("todayCompleteDate", todayOnlyDate);
        if (eachRecordDate == todayOnlyDate - 6) {
          tempratureFirst.push(eachPastRecord.temprature);
          heartRateFirst.push(eachPastRecord.heartRate);
        }

        if (eachRecordDate == todayOnlyDate - 5) {
          tempratureSecond.push(eachPastRecord.temprature);
          heartRateSecond.push(eachPastRecord.heartRate);
        }

        if (eachRecordDate == todayOnlyDate - 4) {
          tempratureThird.push(eachPastRecord.temprature);
          heartRateThird.push(eachPastRecord.heartRate);
        }

        if (eachRecordDate == todayOnlyDate - 3) {
          tempratureFourth.push(eachPastRecord.temprature);
          heartRateFourth.push(eachPastRecord.heartRate);
        }

        if (eachRecordDate == todayOnlyDate - 2) {
          tempratureFifth.push(eachPastRecord.temprature);
          heartRateFifth.push(eachPastRecord.heartRate);
        }

        if (eachRecordDate == todayOnlyDate - 1) {
          tempratureSixth.push(eachPastRecord.temprature);
          heartRateSixth.push(eachPastRecord.heartRate);
        }
      });

       setfirstDayTemp(tempratureFirst);
       setfirstDayHeart(heartRateFirst);
       setsecondDayTemp(tempratureSecond)
       setsecondDayHeart(heartRateSecond);
       setThirdDayTemp(tempratureThird)
       setThirdDayHeart(heartRateThird)

       setFourthDayTemp(tempratureFourth)
       setFourthDayHeart(heartRateFourth)

       setFifthDayTemp(tempratureFifth)
       setFifthDayHeart(heartRateFifth)


       
       setSixDayTemp(tempratureSixth)
       setSixDayHeart(heartRateSixth)






       console.log(res.data.currentUserBPM)
       console.log(tempratureFirst)
       console.log(heartRateFirst)
       



          
      }

    useEffect(()=>{
        fetchApi()
    },[])
    
    const Timings=['morning        ','After Noon   ','Evening        ']
    const data = {
        labels: ["Morning", "AfterNoon", "Evening"],
        datasets: [
          {
            data: [92,78,86],
            color: (opacity = 1) => `rgba(0, 255, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
       
        legend: ["Last Day Temprature"] // optional
      };
      const data1 = {
        labels: ["Morning", "AfterNoon", "Evening"],
        datasets: [
          {
            data: [90,82,99],
            color: (opacity = 1) => `rgba(0, 255, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
       
        legend: ["Last Day Heart Rate"] // optional
      };
  return (
    <SafeAreaView>
     <ScrollView>
       
             
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:25,flexDirection:'row',marginLeft:30}}>Day</Text>
                    <Text style={{fontSize:25,flexDirection:'row',marginLeft:20}}>Timing</Text>
                    <Text style={{fontSize:25,flexDirection:'row',marginLeft:20}}>Temp</Text>
                    <Text style={{fontSize:25,flexDirection:'row',marginLeft:20}}>heartRate</Text>
                </View>
                <Text></Text>

                <View style={{backgroundColor:'#FFFFFF',marginLeft:30,marginRight:40}}>
              { firstDayTemp.map((item, key)=>(
                 <Text key={key} style={{fontSize:15,color:"#000000",}} >Day 1           {Timings[key]}      {firstDayTemp[key]}                {firstDayHeart[key]} </Text>)
                )} 


                { secondDayTemp.map((item, key)=>(
                 <Text key={key} style={{fontSize:15,color:"#000000"}} >Day 2         {Timings[key]}       {secondDayTemp[key]}                {secondDayHeart[key]} </Text>)
                )} 
                { ThirdDayTemp.map((item, key)=>(
                 <Text key={key} style={{fontSize:15,color:"#000000"}} >Day 3         {Timings[key]}       {ThirdDayTemp[key]}                {ThirdDayHeart[key]} </Text>)
                )} 
                 { FourthDayTemp.map((item, key)=>(
                 <Text key={key} style={{fontSize:15,color:"#000000"}} >Day 4         {Timings[key]}       {FourthDayTemp[key]}                {FourthDayHeart[key]} </Text>)
                )} 
                 { FifthDayTemp.map((item, key)=>(
                 <Text key={key} style={{fontSize:15,color:"#000000"}} >Day 5         {Timings[key]}       {FifthDayTemp[key]}                {FifthDayHeart[key]} </Text>)
                )} 
                { SixDayTemp.map((item, key)=>(
                 <Text key={key} style={{fontSize:15,color:"#000000"}} >Day 6         {Timings[key]}       {SixDayTemp[key]}                {SixDayHeart[key]} </Text>)
                )} 
                </View>

            
              


             </View>



            
       
    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}> 
        <View style={{marginTop:40}}>
        <LineChart

        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}

    /> 
    </View> 

     <View style={{marginTop:40}}>
        <LineChart

        data={data1}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}

    /> 
    </View> 
   
    
     </View>

    </ScrollView>
    
    </SafeAreaView>
  )
}

const styleSheet = StyleSheet.create({
 
   
   
  });