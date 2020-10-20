import React from "react";
import { useController } from "react-xr";
import { Box } from "drei";
const Drumsticks = (params) => {
  const leftController = useController("left");
  const rightController = useController("right");
  if (leftController) {
    console.log(leftController.controller.position.x);
  }
  return (
    <>
      {leftController ? (
        <Box
          castShadow
          args={[0.04, 0.04, 0.5]}
          position={[0, 0.7, -0.7]}
          // rotation={[
          //   leftController.controller.rotation.x,
          //   leftController.controller.rotation.y,
          //   leftController.controller.rotation.z,
          // ]}
        >
          <meshStandardMaterial color="#966F33" />
        </Box>
      ) : null}
    </>
  );
};

export default Drumsticks;
