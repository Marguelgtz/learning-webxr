import React, { useRef } from "react";
import { useController, useXR } from "react-xr";
import { useFrame } from "react-three-fiber";
import { Box } from "drei";

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
      leftControllerData.current.leftPosition.copy(
        leftController.controller.position
      );
      leftControllerData.current.rightRotation.copy(
        leftController.controller.rotation
      );
    }
    if (rightController) {
      rigthControllerData.current.leftPosition.copy(
        leftController.controller.position
      );
      rigthControllerData.current.rightRotation.copy(
        leftController.controller.rotation
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
