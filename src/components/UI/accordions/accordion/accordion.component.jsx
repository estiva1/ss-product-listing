import React, { useState } from "react";
import { AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";

import { Circle, StyledAccordion } from "./accordion.styles";

const CustomAccordion = ({ summary, children, ...props }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledAccordion {...props}>
      <Stack direction="row" gap="16px">
        <Circle expanded={expanded === 'panel1'}/>
        <AccordionSummary
          expandIcon={<ArrowOutwardOutlinedIcon sx={{ fontSize: 14 }} />}
        >
          {summary}
        </AccordionSummary>
      </Stack>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default CustomAccordion;
