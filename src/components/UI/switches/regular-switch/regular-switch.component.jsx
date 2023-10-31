import React from "react";
import { StyledSwitch } from "./regular-switch.styles";

const RegularSwitch = ({ checked, onChange }) => {
  return <StyledSwitch checked={checked} onChange={onChange} inputProps={{ "aria-label": "styled switch" }} on />;
};

export default RegularSwitch;
