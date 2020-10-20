import React from "react";
import { useController, useXR } from "react-xr";
import { Box } from "drei";
const Drumsticks = (params) => {
  const leftController = useController("left");
  const rightController = useController("right");
  if (leftController) {
    console.log(leftController.controller);
  }

  // NEED LIVE CONTROLLER POSITION

  const { controllers } = useXR();
  if (controllers[0]) {
    console.log("grip", controllers[0].grip);
  }

  return (
    <>
      {/* left */}
      {leftController && controllers[0] ? (
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
