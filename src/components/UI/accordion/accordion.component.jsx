import React from "react";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import { StyledAccordion } from "./accordion.styles";

const CustomAccordion = ({ summary, children }) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ArrowOutwardOutlinedIcon sx={{ fontSize: 14 }} />}
        //id="panel1a-header"
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default CustomAccordion;
