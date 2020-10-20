import React from "react";
import { useController } from "react-xr";
import { Box } from "drei";
const Drumsticks = (params) => {
  const leftController = useController("left");
  const rightController = useController("right");
  if (leftController) {
    console.log(leftController.controller);
  }
  return (
    <>
      {/* left */}
      {leftController ? (
        <Box
          castShadow
          args={[0.02, 0.02, 0.5]}
          position={[
            leftController.controller.position.x,
            leftController.controller.position.y,
            leftController.controller.position.z,
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
