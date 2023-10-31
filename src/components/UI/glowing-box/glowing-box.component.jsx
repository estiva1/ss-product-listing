import React from "react";
import { Content, GlowingContainer, Label, LabelContainer } from "./glowing-box.styles";

const GlowingBox = ({ label = "", disableGlow, children }) => {
  return (
    <GlowingContainer disableGlow={disableGlow}>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <Content>{children}</Content>
    </GlowingContainer>
  );
};

export default GlowingBox;
