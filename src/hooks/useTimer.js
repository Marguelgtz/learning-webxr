import { useState } from "react";
import { useFrame } from "react-three-fiber";
//
import { debounce } from "lodash";
const useTimer = (callback, { status, date }, timerTime) => {
  // console.log("useTimer  fire");
  let timerPercentage = 0;
  const [timerStatus, setTimerStatus] = useState("not-running");
  // const [timePercentage, setTimePercentage] = useState(0);
  useFrame(() => {
    // timerPercentage => 0 = 0%, 1 = 100%
    // console.log("useTimer frame fire", Date.now());

    // timerTime (tT)
    // startingTime (sT) [date]
    // currentTime [Date.now] (cT)
    // finalTime (fT) ==> ft = sT  + tT(1000)
    // currentTimeLeft (cTl) => cTl = fT - cT
    // timerPercentage (Tp)
    //
    //    Tp = (fT - cT) / (sT + tT) (1000) ==> Tp = cTl / tT(1000)
    //
    //    timerPercentage =
    // currentTimeLeft / finalTime

    //    timerPercentage =  (finalTime - currentTime) / (timerTime ) (1000)
    //
    //
    //

    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    // console.log("Time Left", currentTime - date);
    if (status) {
      setTimerStatus("running");
      console.log(date - Date.now());
      const top = date + timerTime * 1000 - Date.now();
      console.log("top", top);
      timerPercentage =
        date + timerTime * 1000 - (Date.now() / timerTime) * 1000;
      console.log(status, timerPercentage);

      if (
        date - Date.now() <= -timerTime * 1000 &&
        date - Date.now() >= -timerTime * 1000 - 20
      ) {
        console.log("timer fire");
        console.log(status);
        callback();
      }
    }
  });
  return [timerPercentage, timerStatus];
};

export default useTimer;
