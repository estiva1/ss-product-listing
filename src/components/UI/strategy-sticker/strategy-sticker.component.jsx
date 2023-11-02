import React from "react";
import {
  StrategyStickerContainer,
  StrategyStickerText,
  StyledChip,
  TextBox,
  TextContainer,
} from "./strategy-sticker.styles";

const StrategySticker = ({ label = "", text = "", color = "", disabled }) => {
  return (
    <StrategyStickerContainer>
      <StyledChip label={label} backgroundColor={color} disabled={disabled} />
      <TextContainer disabled={disabled}>
        <TextBox>
          <StrategyStickerText disabled={disabled}>{text}</StrategyStickerText>
        </TextBox>
      </TextContainer>
    </StrategyStickerContainer>
  );
};

export default StrategySticker;
