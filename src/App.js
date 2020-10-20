import React, { useState, useCallback, useEffect } from "react";
import { OrbitControls, Box, Cylinder, PerspectiveCamera } from "drei";
// import { Canvas } from "react-three-fiber";
import { VRCanvas, DefaultXRControllers, Hover } from "react-xr";
import "./App.css";

import Plane from "./components/plane";

//drums
import KickDrum from "./components/drums/kick";
import SnareDrum from "./components/drums/snare";
import TomDrum from "./components/drums/tom";
import Tom2Drum from "./components/drums/tom2";
import LeftCymbal from "./components/drums/leftCymbal";
import HiHat from "./components/drums/hihat";
import DrumSticks from "./components/drumSticks";

// ADD VR SUPPORT

function App() {
  //  need to build move selected object position function

  // rright squeezs kick drum pending

  // const rightController = useController("right");
  // const rightController = useController("right");

  // const onSqueeze = useCallback(() => console.log("Squeezed"), []);
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

        {/* DrumSticks */}
        <DrumSticks />
        {/* Drum components */}

        <TomDrum />
        <Tom2Drum />
        <SnareDrum />
        <KickDrum />
        <LeftCymbal />
        <HiHat />
      </VRCanvas>
    </div>
  );
}

export default App;
