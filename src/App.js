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
import { useSelector } from "react-redux";
//
// ADD VR SUPPORT

function App() {
  // const { position, rotation } = useSelector((state) => ({
  //   position: state.hihat.position,
  //   rotation: state.hihat.rotation,
  // }));
  // console.log("position", position, "rotation", rotation);
  //  need to build move selected object position function

  // rright squeezs kick drum pending

  // const rightController = useController("right");
  // const rightController = useController("right");

  // const onSqueeze = useCallback(() => console.log("Squeezed"), []);
  // useXREvent("squeeze", onSqueeze, { handedness: "right" });

  const drumKit = useSelector((state) => state);
  const gameStatus = useSelector((state) => state.gameStatus);

  console.log(drumKit.leftCymbal);
  return (
    <div className="app">
      <VRCanvas>
        {/* this is the off vr camera */}
        <PerspectiveCamera
          makeDefault // Registers it as the default camera system-wide (default=false)
          position={[10, 0, 10]}
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

        <TomDrum positionData={drumKit.tom1} />
        <Tom2Drum positionData={drumKit.tom2} />
        <SnareDrum positionData={drumKit.snare} />
        <KickDrum positionData={drumKit.kick} />
        <LeftCymbal positionData={drumKit.leftCymbal} />
        <HiHat positionData={drumKit.hihat} />
      </VRCanvas>
    </div>
  );
}

export default App;
