import React from "react";
import { Stack } from "@mui/material";
import { HintBarContainer, HintText, LightBulbIcon } from "./hint-bar.styles";

const HintBar = ({ text = "" }) => {
  return (
    <HintBarContainer>
      <Stack direction="row" gap="10px" alignItems="center">
        <LightBulbIcon />
        <HintText>{text}</HintText>
      </Stack>
    </HintBarContainer>
  );
};

export default HintBar;
