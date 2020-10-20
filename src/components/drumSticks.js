import React, { useRef } from "react";
import { useController, useXR } from "react-xr";
import { useFrame } from "react-three-fiber";
import { Box } from "drei";

const Drumsticks = (params) => {
  const ref = useRef(); // Reference for the box instance

  const leftController = useController("left");
  const rightController = useController("right");

  useFrame(() => {
    // Don't forget to check this, controller may be disconnected
    if (leftController === undefined) return;

    ref.current.position.copy(leftController.controller.position);
    ref.current.rotation.copy(leftController.controller.rotation);
  });

  console.log("position/rotation left :", ref);
  // NEED LIVE CONTROLLER POSITION

  return (
    <>
      {/* left */}
      {leftController ? (
        <Box
          castShadow
          args={[0.02, 0.02, 0.5]}
          position={[
            leftController.grip.position.x,
            leftController.grip.position.y,
            leftController.grip.position.z,
          ]}
          rotation={[
            leftController.controller.rotation.x,
            leftController.controller.rotation.y,
            leftController.controller.rotation.z,
          ]}
        >
          <meshStandardMaterial color="#966F33" />
        </Box>
      ) : null}
      {/* right */}
      {rightController ? (
        <Box
          castShadow
          args={[0.02, 0.02, 0.5]}
          position={[
            rightController.controller.position.x,
            rightController.controller.position.y,
            rightController.controller.position.z,
          ]}
          rotation={[
            rightController.controller.rotation.x,
            rightController.controller.rotation.y,
            rightController.controller.rotation.z,
          ]}
        >
          <meshStandardMaterial color="#966F33" />
        </Box>
      ) : null}
    </>
  );
};

export default Drumsticks;
