import React from "react";

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
    <meshPhongMaterial attach="material" color="#d1cebd" />
  </mesh>
);

export default Plane;
