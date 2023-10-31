import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  border: "none",
  borderRadius: "4px",
  boxShadow: "none",
  height: "350px",
  "&::-webkit-scrollbar": {
    width: " 0.4em",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundCcolor: "transparent",
    " &:hover": {
      backgroundColor: "hsl(0, 0%, 81.2%)",
    },
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "hsl(0, 0%, 81.2%)",
  },
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    color: "#979797",
    borderBottom: "1px solid #000",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "0.875rem",
    letterSpacing: "0.00375rem",
    minHeight: "32px",
    padding: "10px",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "10px",
    fontFamily: "Titillium Web",
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "#FFF",
  adding: "12px",
}));

export const PrimaryText = styled.h4`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;
