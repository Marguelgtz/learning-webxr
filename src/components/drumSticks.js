import React, { useRef } from "react";
import { useController, useXR } from "react-xr";
import { useFrame } from "react-three-fiber";
import { Box } from "drei";
import * as THREE from "three";

const Drumsticks = (params) => {
  const leftController = useController("left");
  const rightController = useController("right");

  //controller position data
  const leftControllerData = useRef(); // Reference for the box instance
  const rigthControllerData = useRef(); // Reference for the box instance

  //useFrame so controller data updates each render
  useFrame(() => {
    //thanks @sniok live positions now works like a charm
    if (leftController) {
      leftControllerData.current.position.copy(
        leftController.controller.position
      );
      leftControllerData.current.rotation.copy(
        leftController.controller.rotation
      );
    }
    if (rightController) {
      rigthControllerData.current.position.copy(
        new THREE.Vector3(
          rightController.controller.position.x,
          rightController.controller.position.y + 0.2,
          rightController.controller.position.z
        )
      );

      rigthControllerData.current.rotation.copy(
        rightController.controller.rotation
      );
    }
  });

  return (
    <>
      {/* left */}
      {leftController ? (
        <Box castShadow args={[0.02, 0.02, 0.5]} ref={leftControllerData}>
          <meshStandardMaterial color="#966F33" />
        </Box>
      ) : null}
      {/* right */}
      {rightController ? (
        <Box castShadow args={[0.02, 0.02, 0.5]} ref={rigthControllerData}>
          <meshStandardMaterial color="#966F33" />
        </Box>
      ) : null}
    </>
  );
};

export default Drumsticks;
