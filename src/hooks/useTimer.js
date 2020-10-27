import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
//
const useTimer = (callback, { status, startTime }, timerTime) => {
  useState;

  useFrame(async () => {
    // timerPercentage => 0 = 0%, 1 = 100%

    const timerPercentage =
      (Date.now() - startTime + timerTime) / startTime + timerTime;
    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    console.log("Time Left", currentTime - date);
    if (status) {
      // console.log(hoverStatus.date - Date.now());
      if (date - currentTime <= -timerTime * 1000) {
        await callback();
      }
    }
    return { timerLeft, callbackFire };
  });
};
c;
export default useTimer;
