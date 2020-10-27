import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
//
const useTimer = (callback, { status, startTime }, timerTime) => {
  const [timerStatus, setTimerStatus] = useState("not-running");
  useFrame(async () => {
    // timerPercentage => 0 = 0%, 1 = 100%

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

    const timerPercentage =
      (Date.now() - (startTime + timerTime)) / startTime + timerTime;

    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    console.log("Time Left", currentTime - date);
    if (status) {
      setTimerStatus("running");
      // console.log(hoverStatus.date - Date.now());
      if (date - currentTime <= -timerTime * 1000) {
        await callback();
      }
    }
    return { timerPercentage, timerStatus };
  });
};

export default useTimer;
