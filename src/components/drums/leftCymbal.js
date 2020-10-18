import React, { useState } from "react";
import { Cone } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import tomSfx from "../../sounds/808-tom-10.wav";

const Tom2 = () => {
  const [tomSound] = useSound(tomSfx);
  const [isTomHovered, setIsTomHovered] = useState(false);
  const tomHandler = (hovered) => {
    if (hovered) {
      setIsTomHovered(true);
      tomSound();
    } else {
      setIsTomHovered(false);
    }
  };

  return (
    <Hover onChange={(isTomHovered) => tomHandler(isTomHovered)}>
      <Cone
        castShadow
        args={[0.3, 0.1]}
        Box
        position={[0.5, 1, -0.65]}
        rotation={[0.7, 0, Math.PI / 15]}
      >
        <meshStandardMaterial color={isTomHovered ? "red" : "yellow"} />
      </Cone>
    </Hover>
  );
};

export default Tom2;
