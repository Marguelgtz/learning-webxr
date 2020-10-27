import React from "react";
import { Box, Text } from "drei";

const mainMenu = () => {
  return (
    <>
      <Box castShadow args={[1, 0.4, 0.3]} position={[0, 1.5, -2]}>
        <meshStandardMaterial color="#966F33" />
        <Text position={[0, 0, 0.16]} color="#000" fontSize={0.18}>
          Start
        </Text>
      </Box>
    </>
  );
};

export default mainMenu;
