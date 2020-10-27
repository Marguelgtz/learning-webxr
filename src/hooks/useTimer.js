import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
//
const useTimer = (callback, { status, date }, timerTime) => {
  useFrame(() => {
    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    if (status) {
      // console.log(hoverStatus.date - Date.now());
      if (date - Date.now() <= -timerTime * 1000) {
        callback();
      }
    }
  });
};

export default useTimer;
