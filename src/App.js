import React, { useState } from "react";
import { OrbitControls, Box, PerspectiveCamera } from "drei";
// import { Canvas } from "react-three-fiber";
import { VRCanvas, DefaultXRControllers } from "react-xr";
import { Hover } from "@react-three/xr";
import "./App.css";

import Plane from "./components/plane";

// ADD VR SUPPORT

function App() {
  const [isHovered, setIsHovered] = useState(false);
  //box color state

  const hoverHandler = (hovered) => {
    hovered ? setIsHovered(true) : setIsHovered(false);
  };

  return (
    <div className="app">
      <VRCanvas>
        <PerspectiveCamera
          makeDefault // Registers it as the default camera system-wide (default=false)
          position={[0, 0, 10]}
        >
          <mesh />
        </PerspectiveCamera>
        {/* adds controlers to scene */}
        <DefaultXRControllers />
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
        {/* need to set orbit controls to a diferent camera position */}
        <OrbitControls />

        {/* Some geometry */}
        {/* box is positioned in front of vr camera */}
        <Hover onChange={(isHovered) => () => hoverHandler(isHovered)}>
          <Box
            castShadow
            args={[0.5, 0.5, 0.5]}
            Box
            position={[0, 1, -0.7]}
            rotation={[2, 3, 0]}
          >
            <meshStandardMaterial color={isHovered ? "green" : "blue"} />
          </Box>
        </Hover>
      </VRCanvas>
    </div>
  );
}

export default App;
