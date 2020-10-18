import React, { useState } from "react";
import { Cylinder } from "drei";
import { useXREvent } from "react-xr";
import useSound from "use-sound";

import kickSfx from "../../sounds/808-kick-01.wav";

const Kick = () => {
  const [kickSound] = useSound(kickSfx);

  const [kickActive, setKickActive] = useState(false);
  const onSqueezeStart = (arg) => {
    setKickActive(true);
    kickSound();
    console.log("sqeek right controller", arg);
  };
  const onSqueezeEnd = (arg) => {
    setKickActive(false);
    kickSound();
    console.log("sqeek right controller", arg);
  };
  useXREvent("squeezestart", onSqueezeStart, { handedness: "right" });
  useXREvent("squeezeend", onSqueezeEnd, { handedness: "right" });

  return (
    <Cylinder
      castShadow
      args={[0.5, 0.5, 0.2]}
      Box
      position={[0.2, 0, -0.6]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial color={kickActive ? "purple" : "orange"} />
    </Cylinder>
  );
};

export default Kick;
