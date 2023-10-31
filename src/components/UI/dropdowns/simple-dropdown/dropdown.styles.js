import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    color: #404040;
    font-family: Titillium Web;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
  }

  .MuiFormLabel-root {
    color: #404040;
    font-family: Titillium Web;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    padding-top: 1px;
    width: calc(100% - 50px);
  }
  .MuiAutocomplete-clearIndicator,
  .MuiAutocomplete-popupIndicator {
    color: #1565d8;
  }
`;

export const PrimaryText = styled.h3`
  color: #272b41;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
`;
