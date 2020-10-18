import React from "react";
import { OrbitControls, Box } from "drei";
import { Canvas } from "react-three-fiber";
import "./App.css";
function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
