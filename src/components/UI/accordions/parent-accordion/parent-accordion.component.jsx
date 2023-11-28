import React from "react";
import { AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import { AccordionLabel, StyledAccordion } from "./parent-accordion.styles";

const ParentAccordion = ({ summary, label = "", children, ...props }) => {
  return (
    <StyledAccordion {...props}>
      <Stack direction="row" gap="16px" alignItems="center">
        <AccordionSummary
          expandIcon={<ArrowOutwardOutlinedIcon sx={{ fontSize: 14 }} />}
          //id="panel1a-header"
        >
          {summary}
        </AccordionSummary>
        <AccordionLabel>{label}</AccordionLabel>
      </Stack>
      <AccordionDetails sx={{ mt: "16px" }}>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default ParentAccordion;
