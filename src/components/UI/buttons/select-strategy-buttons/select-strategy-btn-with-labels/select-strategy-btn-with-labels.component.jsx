import React from "react";
import {
  BottomLabel,
  ButtonText,
  ImageWithText,
  MainContent,
  StyledStrategyButton,
  TopLabel,
} from "./select-strategy-btn-with-labels.styles";

const EnhancedStrategyButton = ({ text = "", labelTop = "", labelBottom = "", children, ...props }) => {
  return (
    <StyledStrategyButton {...props}>
      <MainContent>
        <TopLabel>{labelTop}</TopLabel>
        <ImageWithText>
          {children}
          <ButtonText>{text}</ButtonText>
        </ImageWithText>
      </MainContent>
      <BottomLabel>{labelBottom}</BottomLabel>
    </StyledStrategyButton>
  );
};

export default EnhancedStrategyButton;
