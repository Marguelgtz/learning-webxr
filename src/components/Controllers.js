import React, { useCallback, useEffect } from "react";
import { useXREvent, useController } from "react-xr";
import useSound from "use-sound";

import kickSfx from "../sounds/808-kick-01.wav";
import snareSfx from "../sounds/808-snare-02.wav";
const Controllers = () => {
  // const leftController = useController("left");
  // console.log(leftController);

  const [kickSound] = useSound(kickSfx);
  const [snareSound] = useSound(snareSfx);
  // snareSound();
  const playKick = () => {
    console.log("playKick fire");
    kickSound();
  };
  const onSqueeze = () => {
    kickSound();
    console.log("sqeek right controller");
  };
  useXREvent("squeeze", onSqueeze, { handedness: "right" });

  return <></>;
};

export default Controllers;
