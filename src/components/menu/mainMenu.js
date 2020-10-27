import React, { useState } from "react";
import { Box, Text } from "drei";
import { Hover } from "react-xr";
import { debounce } from "lodash";
import { useFrame } from "react-three-fiber";

import useTimer from "../../hooks/useTimer";

const MainMenu = (hovered) => {
  const [hoverStatus, setHoverStatus] = useState({
    status: false,
    date: Date.now(),
  });
  const [phoneVrSelect, setPhoneVrSelect] = useState(false);

  const [timerData] = useTimer(
    () => console.log("callback Fire"),
    hoverStatus,
    5
  );
  console.log(timerData);

  const handleStartHover = (hovered) => {
    if (hovered) {
      setHoverStatus({ status: true, date: Date.now() });
    } else {
      setHoverStatus({ status: false, date: Date.now() });
    }
    //need hover timer (do something when hovering for x amount of time)
    //is playing to true

    // const phoneVrSelect = (hovered) => {
    //   console.log("pvs fire");
    //   //connect redux
    //   //this switches is playing to TRUE
    //   console.log("hoverStatus", hoverStatus);
    //   if (hoverStatus) {
    //     console.log("start funct fire");
    //   } else {
    //   }
    //   // console.log("start funct fire");
    // };
    // const delayed = debounce(() => {
    //   phoneVrSelect(true);
    // }, 2000);
    // console.log(hovered);
    // if (hovered) {
    //   // tomSound
    //   setHoverStatus({ ...hoverStatus, status: true, date: Date.now() });
    //   // delayed();
    //   // setTimeout(() => {
    //   //   phoneVrSelect();
    //   // }, 2000);
    // } else {
    //   setHoverStatus(false);
    // }
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
        {phoneVrSelect ? (
          <>
            <Box castShadow args={[1, 0.4, 0.3]} position={[0.3, 1.9, -2]}>
              <meshStandardMaterial color="red" />
            </Box>
          </>
        ) : null}
      </Hover>
    </>
  );
};

export default MainMenu;
