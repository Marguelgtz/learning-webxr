import React, { useState } from "react";
import { Cone } from "drei";
import { Hover } from "react-xr";
import useSound from "use-sound";

import { useSelector } from "react-redux";

import hatSfx from "../../sounds/808-hat-01.wav";

const HiHat = () => {
  const [hatSound] = useSound(hatSfx);
  const [isHiHatHovered, setIsHiHatHovered] = useState(false);
  const hihatHandler = (hovered) => {
    if (hovered) {
      setIsHiHatHovered(true);
      hatSound();
    } else {
      setIsHiHatHovered(false);
    }
  };

  // const { position, rotation } = useSelector((state) => ({
  //   position: state.position,
  //   rotation: state.rotation,
  // }));

  // console.log("position", position, "rotation", rotation);
  return (
    <Hover onChange={(isHiHatHovered) => hihatHandler(isHiHatHovered)}>
      <Cone
        castShadow
        args={[0.3, 0.1]}
        Box
        position={[-0.6, 0.7, -0.48]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial color={isHiHatHovered ? "red" : "yellow"} />
      </Cone>
    </Hover>
  );
};

export default HiHat;
