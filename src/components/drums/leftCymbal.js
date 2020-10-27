import React, { useState } from "react";
import { Cone } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import cymbalSfx from "../../sounds/808-cymbal-01.wav";

const LeftCymbal = ({ positionData }) => {
  const [cymbalSound] = useSound(cymbalSfx);
  const [isCymbalHovered, setIsCymbalHovered] = useState(false);
  const cymbalHandler = (hovered) => {
    if (hovered) {
      setIsCymbalHovered(true);
      cymbalSound();
    } else {
      setIsCymbalHovered(false);
    }
  };

  console.log("positionData", positionData);

  return (
    <Hover onChange={(isCymbalHovered) => cymbalHandler(isCymbalHovered)}>
      <Cone
        castShadow
        args={[0.3, 0.1]}
        Box
        position={positionData.position}
        rotation={positionData.rotation}
      >
        <meshStandardMaterial color={isCymbalHovered ? "red" : "yellow"} />
      </Cone>
    </Hover>
  );
};

export default LeftCymbal;
