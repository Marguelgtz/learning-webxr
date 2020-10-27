import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
//
const useTimer = async (callback, { status, startTime }, timerTime) => {
  console.log("useTimer  fire");

  const [timerStatus, setTimerStatus] = useState("not-running");
  useFrame(async () => {
    // timerPercentage => 0 = 0%, 1 = 100%
    // console.log("useTimer frame fire", Date.now());

    // timerTime (tT)
    // startTime (sT)
    // currentTime [Date.now] (cT)
    // finalTime (fT) == startTime + timerTime
    // currentTimeLeft (cTl) == currentTime - finalTime
    // timerPercentage (Tp)
    //
    //    Tp = (ct - ft) / sT + tT ==> Tp = cTl / tT
    //
    //    timerPercentage =
    // currentTimeLeft / finalTime

    //    timerPercentage =  (currentTime - finalTime) / (startTime - timerTime )
    //
    //
    //

    let timerPercentage =
      (await (Date.now() - (startTime + timerTime))) / startTime + timerTime;

    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    // console.log("Time Left", currentTime - date);
    if (status) {
      setTimerStatus("running");
      console.log(status, ", status running", Date.now());
      if (startTime - Date.now() <= -timerTime * 1000) {
        console.log("timer fire");
        await callback();
      }
    }
    return timerPercentage;
  });
};

export default useTimer;
