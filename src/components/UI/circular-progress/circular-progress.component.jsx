import React from "react";
import { Box, CircularProgress } from "@mui/material";

import { Label, PrimaryText, SampleMinMaxPriceBox } from "./circular-progress.styles";

const CircularProgressVisualizer = ({ color = "#1a90ff", value = 0, price = "", label = "", ...props }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#F1FBFE",
          transform: "rotate(-180deg) !important",
        }}
        size={240}
        thickness={6}
        {...props}
        value={50}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: `${color}`,
          position: "absolute",
          left: 0,
          transform: "rotate(-180deg) !important",
        }}
        size={240}
        thickness={6}
        {...props}
        value={value}
      />

      <SampleMinMaxPriceBox>
        <PrimaryText style={{ color: `${color}` }}>${price}</PrimaryText>
        <Label>{label}</Label>
      </SampleMinMaxPriceBox>
    </Box>
  );
};

export default CircularProgressVisualizer;
