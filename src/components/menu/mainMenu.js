import React, { useState } from "react";
import { Box, Text } from "drei";
import { Hover } from "react-xr";
import { debounce } from "lodash";

const MainMenu = () => {
  const [hoverStatus, setHoverStatus] = useState(false);

  const handleStartHover = (hovered) => {
    //need hover timer (do something when hovering for x amount of time)
    //is playing to true

    const phoneVrSelect = () => {
      //connect redux
      //this switches is playing to TRUE
      console.log("start funct fire");
    };

    console.log(hovered);
    if (hovered) {
      // tomSound
      debounce(() => phoneVrSelect(), 1000);
      setHoverStatus(true);
    } else {
      setHoverStatus(false);
    }
  };

  return (
    <>
      {/*  right now set to only hover because I am developing with android vr, need to add controller support */}
      {/* NEED CONTROLLER SUPPORT! */}
      <Hover onChange={(hovered) => handleStartHover(hovered)}>
        <Box castShadow args={[1, 0.4, 0.3]} position={[0, 1.5, -2]}>
          <meshStandardMaterial color={hoverStatus ? "#966F33" : "#b58c4c"} />
          <Text
            position={[0, 0, 0.16]}
            color={hoverStatus ? "#000" : "blue"}
            fontSize={0.18}
          >
            Start
          </Text>
        </Box>
      </Hover>
    </>
  );
};

export default MainMenu;
