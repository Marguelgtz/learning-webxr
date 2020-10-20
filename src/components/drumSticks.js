import React from "react";
import { useController } from "react-xr";
import { Box } from "drei";
const Drumsticks = (params) => {
  const leftController = useController("left");
  const rightController = useController("right");

  console.log("left Controller", leftController);

  return (
    <>
      <Box
        castShadow
        args={[0.04, 0.04, 0.5]}
        position={[0.2, 0, -0.2]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color="#966F33" />
      </Box>
    </>
  );
};

export default Drumsticks;
