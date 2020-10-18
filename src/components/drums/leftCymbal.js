import React, { useState } from "react";
import { Cone } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import cymbalSfx from "../../sounds/808-cymbal-01.wav";

const LeftCymbal = () => {
  const [cymbalSound] = useSound(cymbalSfx);
  const [isCymbalHovered, setIsCymbalHovered] = useState(false);
  const tomHandler = (hovered) => {
    if (hovered) {
      setIsCymbalHovered(true);
      cymbalSound();
    } else {
      setIsCymbalHovered(false);
    }
  };

  return (
    <Hover onChange={(isCymbalHovered) => tomHandler(isCymbalHovered)}>
      <Cone
        castShadow
        args={[0.3, 0.1]}
        Box
        position={[-0.5, 1.3, -0.7]}
        rotation={[0.7, 0, (12 * Math.PI) / 6]}
      >
        <meshStandardMaterial color={isCymbalHovered ? "red" : "yellow"} />
      </Cone>
    </Hover>
  );
};

export default LeftCymbal;
