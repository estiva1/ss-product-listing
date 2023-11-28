import styled from "styled-components";
import { TextField } from "@mui/material";

export const CustomTextField = styled(TextField)`
  .MuiInputBase-root,
  .MuiFormLabel-root,
  .MuiInputAdornment-root p {
    color: #404040;
    text-align: right;
    font-family: Titillium Web;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    align-self: center;
    background-color: #fff;
  }
`;
