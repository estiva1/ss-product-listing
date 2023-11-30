import styled from "styled-components";
import Chip from "@mui/material/Chip";

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    border: 1px solid #1565d8;
    &.MuiChip-clickable {
      &:hover {
        background-color: #fff;
      }
    }

    .MuiChip-deleteIcon {
      color: #1565d8;
      transition: color 0.3s ease;
      &:hover {
        color: #d32f2f;
      }
    }
  }
`;

export const ChipLabel = styled.h4`
  display: inline;
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const ChipValue = styled(ChipLabel)`
  color: #000;
  font-weight: 700;
  margin-right: 10px;
`;
