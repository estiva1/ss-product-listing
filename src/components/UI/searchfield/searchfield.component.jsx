import React from "react";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { StyledInput, StyledPaper } from "./searchfield.styles";

const CustomizedSearchField = ({ value, onChange, ...props }) => {
  return (
    <StyledPaper component="form">
      <StyledInput {...props} sx={{ flex: 1 }} value={value} onChange={onChange} />
      <IconButton type="button" aria-label="search">
        <SearchIcon sx={{ color: "#1565D8", width: "16px", height: "16px" }} />
      </IconButton>
    </StyledPaper>
  );
};

export default CustomizedSearchField;
