import React, { useEffect, useState } from "react";

import axios, { Axios } from "axios";
import "./bpm.css";
import { getLocalStorage } from "../../components/auth/Login/localstorage";
import dateFormat from "dateformat";
import { BarChartApp } from "./Barchart";
function DoctorBPM() {
  let [temprature, setTemprature] = useState();
  let [ECG, setECG] = useState();

  let [heartRate, setheartRate] = useState();
  let [date, setDate] = useState();

  let [first, setFirst] = useState();
  let [second, setSecond] = useState();
  let [third, setThird] = useState();
  let [mylabels, setLabels] = useState();

  useEffect(() => {
    let mac = getLocalStorage("mac");

    axios.post("http://localhost:80/getbpmdata", mac).then((res) => {
      console.log(res);
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

      let mainFirst = [];
      let mainSecond = [];
      let mainThird = [];

      mainFirst.push(tempratureFirst[0]);
      mainSecond.push(tempratureFirst[1]);
      mainThird.push(tempratureFirst[2]);

      mainFirst.push(tempratureSecond[0]);
      mainSecond.push(tempratureSecond[1]);
      mainThird.push(tempratureSecond[2]);

      mainFirst.push(tempratureThird[0]);
      mainSecond.push(tempratureThird[1]);
      mainThird.push(tempratureThird[2]);

      mainFirst.push(tempratureFourth[0]);
      mainSecond.push(tempratureFourth[1]);
      mainThird.push(tempratureFourth[2]);

      mainFirst.push(tempratureFifth[0]);
      mainSecond.push(tempratureFifth[1]);
      mainThird.push(tempratureFifth[2]);

      mainFirst.push(tempratureSixth[0]);
      mainSecond.push(tempratureSixth[1]);
      mainThird.push(tempratureSixth[2]);

      mainFirst.push(tempratureSeventh[0]);
      mainSecond.push(tempratureSeventh[1]);
      mainThird.push(tempratureSeventh[2]);

      console.log("main1", mainFirst);
      console.log("main2", mainSecond);
      console.log("main3", mainThird);
      console.log("daetobj", dateobj);

      setFirst(mainFirst);
      setSecond(mainSecond);
      setThird(mainThird);

      let labels = [];

      for (let temp in dateobj) {
        labels.push(temp);
      }

      setLabels(labels);
      // pastSevenDaysData.forEach((eachPastRecord) => {
      //   //make arrays in OBJects

      //   let eachRecordDate = dateFormat(eachPastRecord.date, "   d");

      //   if (tempratureObj[eachRecordDate] === undefined) {
      //     tempratureObj[eachRecordDate] = new Array().push(
      //       eachPastRecord.temprature
      //     );
      //   } else {
      //     let existingArray = tempratureObj[eachRecordDate];
      //     existingArray.push(eachPastRecord.temprature);
      //   }

      //   if (heartRateObj[eachRecordDate] === undefined) {
      //     heartRateObj[eachRecordDate] = new Array().push(
      //       eachPastRecord.temprature
      //     );
      //   } else {
      //     let existingArray = heartRateObj[eachRecordDate];
      //     existingArray.push(eachPastRecord.heartRate);
      //   }
      // });

      // } else {
      //   let existingArray = tempratureObj[eachRecordDate];
      //   existingArray.push(eachPastRecord.temprature);
      // }

      console.log("currentUserData", currentUserData);
      console.log("pastSevendays", pastSevenDaysData);

      setTemprature(res.data.currentUserBPM.temprature);
      setECG(res.data.currentUserBPM.ECG);
      setheartRate(res.data.currentUserBPM.heartRate);
      setDate(res.data.currentUserBPM.date);
    });
  }, []);

  return (
    <div className="bpm">
      <h1> Doctor BPM Core</h1>

      <h1>temprature {temprature}</h1>
      <h1> ECG{ECG}</h1>
      <h1>HeartRate{heartRate}</h1>

      <h1>{date}</h1>

      <BarChartApp
        firsData={first}
        secondData={second}
        thirdData={third}
        chartLabel={mylabels}
      />
    </div>
  );
}

export default DoctorBPM;
