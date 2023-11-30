import React, { useLayoutEffect, useState } from "react";
import { Stack } from "@mui/material";

import {
  BaseButton,
  BlueFilledButton,
  ButtonImage,
  ButtonText,
  RippleContainer,
  TransparentBlueButton,
  WhiteOutlinedButton,
  WhiteRoundedOutlinedButton,
} from "./icon-button-stretched.styles";

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

export const Ripple = ({ duration = 850, color = "#fff" }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;

    const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray((prevState) => [...prevState, newRipple]);
  };

  return (
    <RippleContainer $duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"ripple_" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  blueFilled: "blueFilled",
  //   whiteFilled: "whiteFilled",
  whiteOutlined: "whiteOutlined",
  whiteRoundedOutlined: "whiteRoundedOutlined",
  transparentBlue: "transparentBlue",
};
const getButton = (buttonType = BUTTON_TYPE_CLASSES.blue) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.blueFilled]: BlueFilledButton,
    // [BUTTON_TYPE_CLASSES.whiteFilled]: WhiteFilledButton,
    [BUTTON_TYPE_CLASSES.whiteOutlined]: WhiteOutlinedButton,
    [BUTTON_TYPE_CLASSES.whiteRoundedOutlined]: WhiteRoundedOutlinedButton,
    [BUTTON_TYPE_CLASSES.transparentBlue]: TransparentBlueButton,
  }[buttonType]);

const IconButtonStretched = ({
  buttonType,
  buttonText = "",
  buttonImage = null,
  noAnimations,
  bold,
  children,
  ...props
}) => {
  const CustomIconButtonStretched = getButton(buttonType);

  return (
    <CustomIconButtonStretched {...props}>
      <Stack direction="row" gap="8px" alignItems="center" justifyContent="center">
        <ButtonText $bold={bold}>{buttonText}</ButtonText>
        <ButtonImage src={buttonImage} style={{ width: "16px", height: "16px" }} $noAnimations={noAnimations} />
      </Stack>
      {children}
    </CustomIconButtonStretched>
  );
};

export default IconButtonStretched;
