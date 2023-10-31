import React from "react";
import { ButtonText, StyledStrategyButton } from "./select-strategy-btn-regular.styles";

const RegularStrategyButton = ({ text = "", children, ...props }) => {
  return (
    <StyledStrategyButton {...props} >
      {children}
      <ButtonText>{text}</ButtonText>
    </StyledStrategyButton>
  );
};

export default RegularStrategyButton;
