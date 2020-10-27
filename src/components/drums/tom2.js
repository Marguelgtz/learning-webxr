import React, { useState } from "react";
import { Cylinder } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import tomSfx from "../../sounds/808-tom-10.wav";

const Tom2 = ({ positionData }) => {
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
        position={positionData.position}
        rotation={positionData.rotation}
      >
        <meshStandardMaterial color={isTomHovered ? "red" : "yellow"} />
      </Cylinder>
    </Hover>
  );
};

export default Tom2;
