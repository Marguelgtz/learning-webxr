import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
//
const useTimer = async (callback, { status, startTime }, timerTime) => {
  await startTime;
  console.log("useTimer  fire");
  console.log(startTime);
  const [timerStatus, setTimerStatus] = useState("not-running");
  const [timePercentage, setTimePercentage] = useState(0);
  useFrame(() => {
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

    setTimePercentage(
      (Date.now() - (startTime + timerTime)) / startTime + timerTime
    );

    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    // console.log("Time Left", currentTime - date);
    if (status) {
      setTimerStatus("running");
      console.log(status, ", status running", Date.now());
      console.log(startTime - Date.now());
      if (startTime - Date.now() <= -timerTime * 1000) {
        console.log("timer fire");
        callback();
      }
    }
  });
  return [timePercentage, timerStatus];
};

export default useTimer;
