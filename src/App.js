import React, { useState } from "react";
import { OrbitControls, Box, Cylinder, PerspectiveCamera } from "drei";
// import { Canvas } from "react-three-fiber";
import { VRCanvas, DefaultXRControllers, Hover } from "react-xr";
import useSound from "use-sound";

import tomSfx from "./sounds/808-tom-01.wav";
import snareSfx from "./sounds/808-snare-02.wav";

import "./App.css";

import Plane from "./components/plane";

// ADD VR SUPPORT

function App() {
  const [tomSound] = useSound(tomSfx);
  const [snareSound] = useSound(snareSfx);

  const [isHovered, setIsHovered] = useState(false);

  const tomHandler = (hovered) => {
    if (hovered) {
      setIsHovered(true);
      tomSound();
    } else {
      setIsHovered(false);
    }
  };
  const snareHandler = (hovered) => {
    if (hovered) {
      setIsHovered(true);
      snareSound();
    } else {
      setIsHovered(false);
    }
  };

  //  need to build move selected object position function

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
        <Hover onChange={(isHovered) => tomHandler(isHovered)}>
          <Cylinder
            castShadow
            args={[0.2, 0.2, 0.3]}
            Box
            position={[0, 0.5, -0.7]}
            rotation={[0.7, 0, 0]}
          >
            <meshStandardMaterial color={isHovered ? "green" : "blue"} />
          </Cylinder>
        </Hover>
        <Hover onChange={(isHovered) => snareHandler(isHovered)}>
          <Cylinder
            castShadow
            args={[0.2, 0.2, 0.3]}
            Box
            position={[0.5, 0.5, -0.65]}
            rotation={[0.7, 0, 0]}
          >
            <meshStandardMaterial color={isHovered ? "red" : "yellow"} />
          </Cylinder>
        </Hover>
      </VRCanvas>
    </div>
  );
}

export default App;
