import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#F0F0F0",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));