import styled from "styled-components";
import { Accordion } from "@mui/material";

export const StyledAccordion = styled(Accordion)`
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;

  .MuiAccordionSummary-root {
    min-height: max-content;
    padding: 0;
    justify-content: start;
    gap: 6px;
    transition: all 0.3s ease;

    &.Mui-expanded {
      min-height: max-content;
      //margin-bottom: 10px;
      transition: all 0.3s ease;
    }
  }

  .MuiAccordionSummary-content {
    flex-grow: unset;
    color: #000;
    font-family: Titillium Web;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.875rem;
    margin: 0;
    transition: all 0.3s ease;

    &.Mui-expanded {
      margin: 0;
    }
  }

  .Mui-expanded {
    color: #1565d8;
    transition: all 0.3s ease-in-out;
  }

  &.MuiPaper-root {
    border-radius: 0;
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: none;
    &::before {
      content: unset;
    }

    &.Mui-expanded {
      margin: 0;
    }
  }

  .MuiAccordionDetails-root {
    padding: 0;
  }
`;

export const AccordionLabel = styled.span`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.00375rem;
  white-space: pre-wrap;
`;
