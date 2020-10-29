import React, { useState } from "react";
import { Box, Text } from "drei";
import { Hover } from "react-xr";
import { debounce } from "lodash";
import { useFrame } from "react-three-fiber";

import useTimer from "../../hooks/useTimer";

const MainMenu = ({ dispatch }) => {
  const [hoverStatus, setHoverStatus] = useState({
    status: false,
    date: Date.now()
  });

  const timerPercentage = useTimer(
    () => dispatch({ type: "START_PLAYING" }),
    hoverStatus,
    5
  );


  const handleStartHover = (hovered) => {
    if (hovered) {
      setHoverStatus({ status: true, date: Date.now() });
    } else {
      setHoverStatus({ status: false, date: Date.now() });
    }
  };

  return (
    <>
      {/*  right now set to only hover because I am developing with android vr, need to add controller support */}
      {/* NEED CONTROLLER SUPPORT! */}
      <Hover onChange={(hovered) => handleStartHover(hovered)}>
        <Box castShadow args={[1, 0.4, 0.3]} position={[0, 1.5, -2]}>
          <meshStandardMaterial
            color={hoverStatus.status ? "#966F33" : "#b58c4c"}
          />

          <Text
            position={[0, 0, 0.16]}
            color={hoverStatus ? "#000" : "blue"}
            fontSize={0.18}
          >
            Start
          </Text>
        </Box>
      </Hover>
      <Text
        position={[0, 1, -2]}
        color={hoverStatus ? "#000" : "blue"}
        fontSize={0.5}
      >
        {(timerPercentage * 100).toFixed(2).toString() + "%"}
      </Text>
    </>
  );
};

export default MainMenu;
