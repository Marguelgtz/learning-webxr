import React from "react";
import { OrbitControls, Box } from "drei";
import { Canvas } from "react-three-fiber";

function App() {
  return (
    <Canvas>
      {/* Scene lighting */}
      <ambientLight />
      <spotLight />

      {/* Controll camera with mouse */}
      <OrbitControls />

      {/* Some geometry */}
      <Box>
        <meshStandardMaterial color="#e23" />
      </Box>
    </Canvas>
  );
}

export default App;
