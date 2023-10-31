import React from "react";
import Stack from "@mui/material/Stack";

import { ReactComponent as LightBulb } from "../../../../assets/light-bulb.svg";
import { Description, DescriptionContainer, GlowingBox, Label, LabelContainer } from "./info-bar.styles";

const InfoBar = ({ label = "", description = "", disableGlow }) => {
  return (
    <GlowingBox disableGlow={disableGlow}>
      <LabelContainer>
        <Stack direction="row" spacing="8px" alignItems="center">
          <LightBulb />
          <Label>{label}</Label>
        </Stack>
      </LabelContainer>

      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </GlowingBox>
  );
};

export default InfoBar;
