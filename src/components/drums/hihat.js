import React, { useState } from "react";
import { Cone } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import cymbalSfx from "../../sounds/808-cymbal-01.wav";

const HiHat = () => {
  const [cymbalSound] = useSound(cymbalSfx);
  const [isHiHatHovered, setIsHiHatHovered] = useState(false);
  const hihatHandler = (hovered) => {
    if (hovered) {
      setIsHiHatHovered(true);
      cymbalSound();
    } else {
      setIsHiHatHovered(false);
    }
  };

  return (
    <Hover onChange={(isHiHatHovered) => hihatHandler(isHiHatHovered)}>
      <Cone
        castShadow
        args={[0.3, 0.1]}
        Box
        position={[-0.5, 0.7, -0.5]}
        rotation={[0.7, 0, 0]}
      >
        <meshStandardMaterial color={isHiHatHovered ? "red" : "yellow"} />
      </Cone>
    </Hover>
  );
};

export default HiHat;
