import { useLayoutEffect, useState } from "react";
import {
  BlueButton,
  BlueButtonSmall,
  RippleContainer,
  WhiteButton,
  WhiteButtonSmall,
} from "./regular-button.styles.js";

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
  blue: "blue",
  blueSmall: "blueSmall",
  white: "white",
  whiteSmall: "whiteSmall",
};
const getButton = (buttonType = BUTTON_TYPE_CLASSES.blue) =>
  ({
    [BUTTON_TYPE_CLASSES.blue]: BlueButton,
    [BUTTON_TYPE_CLASSES.blueSmall]: BlueButtonSmall,
    [BUTTON_TYPE_CLASSES.white]: WhiteButton,
    [BUTTON_TYPE_CLASSES.whiteSmall]: WhiteButtonSmall,
  }[buttonType]);

const Button = ({ buttonType, width = "auto", height = "auto", padding = "0px", ...props }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton width={width} height={height} padding={padding} {...props}></CustomButton>;
};

export default Button;
