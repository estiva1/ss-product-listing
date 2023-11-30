import React, { useEffect, useState } from "react";
import { SliderText, StyledInput, StyledSlider, StyledSliderButton, SwitchContainer } from "./big-switch.styles";

const BigSwitch = ({ switchText, isOn, handleToggle }) => {
  const [textWidth, setTextWidth] = useState(48);

  useEffect(() => {
    // Calculate the width based on the length of switchText
    const textElement = document.createElement("span");
    textElement.style.visibility = "hidden";
    textElement.style.position = "absolute";
    textElement.style.whiteSpace = "nowrap";
    textElement.innerText = switchText;
    document.body.appendChild(textElement);
    const calculatedWidth = textElement.offsetWidth + 40; // Adjust for padding and spacing
    document.body.removeChild(textElement);

    setTextWidth(calculatedWidth);
  }, [switchText]);

  // Calculate the translateX value based on textWidth
  const translateX = textWidth - 24;

  return (
    <SwitchContainer style={{ width: `${textWidth}px` }}>
      <StyledInput name="input-for-switch" type="checkbox" checked={isOn} onChange={handleToggle}/>
      <StyledSlider $isOn={isOn}>
        <StyledSliderButton $isOn={isOn} style={{ transform: `translateX(${isOn ? `${translateX}px` : 0})` }} />
      </StyledSlider>
      <SliderText $isOn={isOn}>{switchText}</SliderText>
    </SwitchContainer>
  );
};

export default BigSwitch;
