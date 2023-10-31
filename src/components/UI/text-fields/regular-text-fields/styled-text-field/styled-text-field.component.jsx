import React from "react";
import { CustomTextField } from "./styled-text-field.styles";

const StyledTextField = ({ ...props }) => {
  return <CustomTextField  {...props} size="small" />;
};

export default StyledTextField;
