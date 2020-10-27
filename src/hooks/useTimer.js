import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
//
const useTimer = (callback, { status, date }, timerTime) => {
  useState;

  useFrame(async () => {
    // timerPercentage => 0 = 0%, 1 = 100%
    const timerPercentage = date - date + timerTime * 1000;
    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    console.log("Time Left", Date.now() - date);
    if (status) {
      // console.log(hoverStatus.date - Date.now());
      if (date - Date.now() <= -timerTime * 1000) {
        await callback();
      }
    }
    return { timerLeft, callbackFire };
  });
};
c;
export default useTimer;
