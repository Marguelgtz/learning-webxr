import { useState } from "react";
import { useFrame } from "react-three-fiber";
//
import { debounce } from "lodash";
const useTimer = (callback, { status, date }, timerTime) => {
  // console.log("useTimer  fire");

  const [timerStatus, setTimerStatus] = useState("not-running");
  const [timePercentage, setTimePercentage] = useState(0);
  useFrame(() => {
    // timerPercentage => 0 = 0%, 1 = 100%
    // console.log("useTimer frame fire", Date.now());

    // timerTime (tT)
    // date (sT)
    // currentTime [Date.now] (cT)
    // finalTime (fT) == date + timerTime
    // currentTimeLeft (cTl) == currentTime - finalTime
    // timerPercentage (Tp)
    //
    //    Tp = (ct - ft) / sT + tT ==> Tp = cTl / tT
    //
    //    timerPercentage =
    // currentTimeLeft / finalTime

    //    timerPercentage =  (currentTime - finalTime) / (date - timerTime )
    //
    //
    //

    setTimePercentage(
      (Date.now() - (date + timerTime * 1000)) / date + timerTime
    );

    // console.log(hoverStatus.date - Date.now());
    // console.log(Date.now() - hoverStatus.date);
    // console.log("Time Left", currentTime - date);
    if (status) {
      setTimerStatus("running");
      console.log(status, timePercentage);
      console.log(date - Date.now());
      if (date - Date.now() <= -timerTime * 1000) {
        console.log("timer fire");
        const deb = debounce(callback, 5000);
        deb();
      }
    }
  });
  return [timePercentage, timerStatus];
};

export default useTimer;
