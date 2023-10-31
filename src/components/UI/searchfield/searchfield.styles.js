import { InputBase, Paper } from "@mui/material";
import { styled as mStyled } from "@mui/material/styles";

export const StyledPaper = mStyled(Paper)(() => ({
  height: "34px",
  paddingLeft: "12px",
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  border: "1px solid #CCCCCC",
}));

export const StyledInput = mStyled(InputBase)(() => ({
  fontFamily: "Titillium Web",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "1rem",

  "& input::placeholder": {
    color: "black",
  },
}));
