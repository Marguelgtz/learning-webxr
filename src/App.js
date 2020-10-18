import React from "react";
import { OrbitControls, Box } from "drei";
// import { Canvas } from "react-three-fiber";
import { VRCanvas } from "react-xr";
import "./App.css";

import Plane from "./components/plane";

// ADD VR SUPPORT

function App() {
  return (
    <div className="app">
      <VRCanvas>
        <Plane />
        {/* Scene lighting */}
        <ambientLight intensity={0.2} />
        {/* //Moving spotlight using the position of mouse in the screen (for now is set permantly will add control with oculus controller)*/}
        <spotLight
          intensity={0.6}
          position={[2, 3, 5]}
          penumbra={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        >
          <object3D position={[0, 0, 0]} />
        </spotLight>

        {/* Controll camera with mouse */}
        <OrbitControls />

        {/* Some geometry */}
        <Box castShadow>
          <meshStandardMaterial color="gray" />
        </Box>
      </VRCanvas>
    </div>
  );
}

export default App;
