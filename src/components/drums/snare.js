import React, { useState } from "react";
import { Cylinder } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import snareSfx from "../../sounds/808-snare-02.wav";

const Snare = () => {
  const [snareSound] = useSound(snareSfx);
  const [isSnareHovered, setIsSnareHovered] = useState(false);
  const snareHandler = (hovered) => {
    if (hovered) {
      setIsSnareHovered(true);
      snareSound();
    } else {
      setIsSnareHovered(false);
    }
  };

  return (
    <Hover onChange={(isTomHovered) => snareHandler(isTomHovered)}>
      <Cylinder
        castShadow
        args={[0.35, 0.35, 0.2]}
        Box
        position={[-0.3, 0.3, -0.2]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color={isSnareHovered ? "gray" : "brown"} />
      </Cylinder>
    </Hover>
  );
};

export default Snare;
