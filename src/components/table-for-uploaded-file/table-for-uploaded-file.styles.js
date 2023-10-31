import styled from "styled-components";
import { styled as mStyled } from "@mui/material/styles";
import { Button, TableCell, TableContainer, TableRow, tableCellClasses } from "@mui/material";

export const StyledTableContainer = mStyled(TableContainer)(() => ({
  border: "1px solid #E6E6E6",
  borderRadius: "20px",
  boxShadow: "4px 4px 25px 0px rgba(111, 213, 246, 0.25)",
}));

export const StyledTableCell = mStyled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F8FAFB",
    color: "#78909C",
    fontFamily: "Titillium Web",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1rem",
    letterSpacing: "0.03125rem",
    minHeight: "24px",
    height: "48px",
    padding: "10px 24px",
  },
  [`&.${tableCellClasses.body}`]: {
    position: "relative",
    padding: "8px 24px",
    fontFamily: "Titillium Web",

    "&:not(:last-of-type)": {
      "&:before": {
        content: '""',
        position: "absolute",
        right: 0,
        bottom: "15%", // calc((100%-height)/2)
        height: "70%",
        width: "1px",
        borderRight: "1px solid #CFD8DC",
      },
    },
  },
}));

export const StyledTableRow = mStyled(TableRow)(() => ({
  backgroundColor: "#FFF",
  alignItems: "top",
  height: "auto",

  "&:nth-of-type(even)": {
    backgroundColor: "#F8FAFB",
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const SecondaryText = styled.h4`
  color: #979797;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  margin: 0;
`;

export const SpanText = styled.h5`
  color: #78909c;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.75rem;
  margin: 0;
`;

export const Arrow = styled.span`
  position: absolute;
  min-width: 30px;
  min-height: 8px;
  width: 30px;
  height: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  transition: left 0.3s ease;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none'%3e%3cpath fill='%23fff' fill-rule='evenodd' d='M0 4c0-.19.063-.371.174-.505a.55.55 0 0 1 .421-.21h26.372l-2.555-1.731a.736.736 0 0 1-.13-.232.842.842 0 0 1 0-.547.736.736 0 0 1 .13-.232.601.601 0 0 1 .193-.155.511.511 0 0 1 .456 0 .602.602 0 0 1 .193.155l3.571 2.951c.056.067.1.145.13.232a.84.84 0 0 1 0 .548.737.737 0 0 1-.13.232l-3.57 2.951a.55.55 0 0 1-.422.21.55.55 0 0 1-.421-.21.793.793 0 0 1-.175-.505c0-.19.063-.372.175-.506l2.555-1.732H.595a.55.55 0 0 1-.42-.21A.792.792 0 0 1 0 4Z' clip-rule='evenodd'/%3e%3c/svg%3e")`};
`;

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    padding: 8px 24px;
    text-align: right;
    text-transform: capitalize;
    font-family: Titillium Web;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: 0.01625rem;
  }
  &.MuiButton-contained {
    background: #0057d3;
  }
  &.MuiButton-text {
    color: #1565d8;
  }
`;
