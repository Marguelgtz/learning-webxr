import React, { useCallback } from "react";
import { useXREvent, useController } from "react-xr";
import useSound from "use-sound";

import kickSfx from "../sounds/808-kick-01.wav";

const Controllers = () => {
  // const leftController = useController("left");
  // console.log(leftController);

  const [kickSound] = useSound(kickSfx);

  const onSqueeze = useCallback(() => {
    console.log("squeeze");
    kickSound();
  }, []);
  useXREvent("squeeze", onSqueeze, { handedness: "right" });

  return <></>;
};

export default Controllers;
