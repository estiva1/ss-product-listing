import React from "react";
import { StyledSwitch } from "./regular-switch.styles";

const RegularSwitch = ({ checked, onChange }) => {
  return <StyledSwitch name="regular-switch" defaultChecked={checked} onChange={onChange} inputProps={{ "aria-label": "styled switch" }} />;
};

export default RegularSwitch;
