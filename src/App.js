import React, { useState, useCallback, useEffect } from "react";
import { OrbitControls, Box, Cylinder, PerspectiveCamera } from "drei";
// import { Canvas } from "react-three-fiber";
import {
  VRCanvas,
  DefaultXRControllers,
  Hover,
  useController,
  useXR,
  useXREvent,
} from "react-xr";
import useSound from "use-sound";

import tomSfx from "./sounds/808-tom-01.wav";
import snareSfx from "./sounds/808-snare-02.wav";
import kickSfx from "./sounds/808-kick-01.wav";

import "./App.css";

import Plane from "./components/plane";

// ADD VR SUPPORT

function App() {
  const [tomSound] = useSound(tomSfx);
  const [snareSound] = useSound(snareSfx);
  const [kickSound] = useSound(kickSfx);

  const [isTomHovered, setIsTomHovered] = useState(false);
  const [isSnareHovered, setIsSnareHovered] = useState(false);

  const tomHandler = (hovered) => {
    if (hovered) {
      setIsTomHovered(true);
      tomSound();
    } else {
      setIsTomHovered(false);
    }
  };
  const snareHandler = (hovered) => {
    if (hovered) {
      setIsSnareHovered(true);
      snareSound();
    } else {
      setIsSnareHovered(false);
    }
  };

  //  need to build move selected object position function

  // rright squeezs kick drum pending

  // const rightController = useController("right");
  const rightController = useController("right");

  const onSqueeze = useCallback(() => console.log("Squeezed"), []);
  // useXREvent("squeeze", onSqueeze, { handedness: "right" });
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
        <Hover onChange={(isTomHovered) => tomHandler(isTomHovered)}>
          <Cylinder
            castShadow
            args={[0.2, 0.2, 0.3]}
            Box
            position={[0, 0.5, -0.7]}
            rotation={[0.7, 0, 0]}
          >
            <meshStandardMaterial color={isTomHovered ? "green" : "blue"} />
          </Cylinder>
        </Hover>
        <Hover onChange={(isTomHovered) => snareHandler(isTomHovered)}>
          <Cylinder
            castShadow
            args={[0.2, 0.2, 0.3]}
            Box
            position={[0.5, 0.5, -0.65]}
            rotation={[0.7, 0.7, 0]}
          >
            <meshStandardMaterial color={isSnareHovered ? "red" : "yellow"} />
          </Cylinder>
        </Hover>
      </VRCanvas>
    </div>
  );
}

export default App;
