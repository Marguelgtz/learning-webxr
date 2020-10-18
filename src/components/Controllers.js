import React, { useCallback } from "react";
import { useXREvent, useController } from "react-xr";
import useSound from "use-sound";
const Controllers = () => {
  // const leftController = useController("left");
  // console.log(leftController);

  const [kickSound] = useSound(kickSfx);

  const onSqueeze = useCallback(() => console.log("Squeezed"), []);
  useXREvent("squeeze", onSqueeze, { handedness: "right" });

  return <></>;
};

export default Controllers;
