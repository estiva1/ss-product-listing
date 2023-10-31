import React from "react";
import Box from "@mui/material/Box";
import { Stack, linearProgressClasses } from "@mui/material";

import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { BorderLinearProgress } from "./progress-bar.styles";

const CustomizedProgressBar = ({ status }) => {
  const COLORS = {
    pending: "#FFCB00",
    error: "#CF0909",
    success: "#009C34",
  };

  const VALUES = {
    pending: 50,
    error: 100,
    success: 100,
  };

  const color = COLORS[status] || "";
  const value = VALUES[status] || 0;

  return (
    <Stack direction="row" gap="8px" alignItems="center" width="100%">
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={value}
          sx={{
            [`& .${linearProgressClasses.bar}`]: {
              backgroundColor: color,
            },
          }}
        />
      </Box>
      {status === "success" ? (
        <CheckCircleIcon sx={{ fontSize: 16, color: { color } }} />
      ) : (
        <ErrorIcon sx={{ fontSize: 16, color: { color } }} />
      )}
    </Stack>
  );
};

export default CustomizedProgressBar;
