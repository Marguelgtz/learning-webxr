import React from "react";
import { Cylinder } from "drei";
const Kick = () => {
  return (
    <Cylinder
      castShadow
      args={[0.5, 0.5, 0.2]}
      Box
      position={[0.2, 0, -0.6]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial color="orange" />
    </Cylinder>
  );
};

export default Kick;
