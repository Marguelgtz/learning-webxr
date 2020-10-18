import React, { useState } from "react";
import { Cylinder } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import tomSfx from "../../sounds/808-tom-01.wav";

const Snare = () => {
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
      <Cylinder
        castShadow
        args={[0.2, 0.2, 0.3]}
        Box
        position={[0, 0.5, -0.7]}
        rotation={[0.7, 0, 0]}
      >
        <meshStandardMaterial color={isTomHovered ? "green" : "blue"} />
      </Cylinder>
    </Hover>
  );
};

export default Snare;
