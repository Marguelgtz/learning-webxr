import React, { useState } from "react";
import { OrbitControls, Box, PerspectiveCamera } from "drei";
// import { Canvas } from "react-three-fiber";
import { VRCanvas, DefaultXRControllers, Hover } from "react-xr";
import "./App.css";

import Plane from "./components/plane";

// ADD VR SUPPORT

function App() {
  const [isHovered, setIsHovered] = useState(false);
  //box color state
  const [boxColor, setBoxColor] = useState("green");
  const hoverHandler = (hovered) => {
    hovered ? setBoxColor("blue") : setBoxColor("green");
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
            position={[0, 1, -0.8]}
            rotation={[2, 3, 0]}
          >
            <meshStandardMaterial color={boxColor} />
          </Box>
        </Hover>
      </VRCanvas>
    </div>
  );
}

export default App;
