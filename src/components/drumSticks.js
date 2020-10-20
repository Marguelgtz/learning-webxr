import React from "react";
import { useController } from "react-xr";
import { Box } from "drei";
const Drumsticks = (params) => {
  const leftController = useController("left");
  const rightController = useController("right");
  console.log(leftController);
  return (
    <>
      {leftController ? (
        <Box
          castShadow
          args={[0.04, 0.04, 0.5]}
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
    </>
  );
};

export default Drumsticks;
