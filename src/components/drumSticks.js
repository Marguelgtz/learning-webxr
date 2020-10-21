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
  useFrame((frameArg) => {
    //thanks @sniok live positions now works like a charm
    if (leftController) {
      leftControllerData.current.position.copy(
        new THREE.Vector3(
          leftControllerData.controller.position.x -
            0.2 * Math.sin(rightController.controller.rotation.y),
          leftControllerData.controller.position.y +
            0.2 * Math.sin(rightController.controller.rotation.x),
          leftControllerData.controller.position.z -
            (0.2 * Math.cos(rightController.controller.rotation.x) +
              0.2 * Math.sin(rightController.controller.rotation.y)) /
              2
        )
      );
      leftControllerData.current.rotation.copy(
        leftController.controller.rotation
      );
    }
    if (rightController) {
      rigthControllerData.current.position.copy(
        // need to position drumsticks on the top edge of controllers and follow their movement
        // idea: calculate the position with the rotation
        new THREE.Vector3(
          rightController.controller.position.x -
            0.2 * Math.sin(rightController.controller.rotation.y),
          rightController.controller.position.y +
            0.2 * Math.sin(rightController.controller.rotation.x),
          rightController.controller.position.z -
            (0.2 * Math.cos(rightController.controller.rotation.x) +
              0.2 * Math.sin(rightController.controller.rotation.y)) /
              2
        )
      );

      rigthControllerData.current.rotation.copy(
        rightController.controller.rotation
      );
      // console.log(
      //   "z-position calc: ",
      //   (0.2 * Math.cos(rightController.controller.rotation.x) +
      //     0.2 * Math.sin(rightController.controller.rotation.y)) /
      //     2
      // );
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
