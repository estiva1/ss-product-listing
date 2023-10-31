import React from "react";
import Box from "@mui/material/Box";
import { IconButton, Stack } from "@mui/material";

import { ReactComponent as EditIcon } from "../../assets/edit-icon.svg";

import {
  MinMaxValue,
  PrimaryText,
  PrimaryTextHighlighted,
  SecondaryText,
  StyledStep,
  StyledStepContent,
  StyledStepLabel,
  StyledStepper,
} from "./strategy-progress.styles";

const StepOne = ({ strategy = "Custom Rule Base", strategyType = "--" }) => {
  return (
    <Stack spacing="4px">
      <Stack direction="row" gap="10px" alignItems="center">
        <PrimaryTextHighlighted>{strategy}</PrimaryTextHighlighted>
        <IconButton sx={{ p: 0 }}>
          <EditIcon />
        </IconButton>
      </Stack>
      <SecondaryText>{strategyType}</SecondaryText>
    </Stack>
  );
};

const StepTwo = ({ min = "--", max = "--" }) => {
  return (
    <Stack spacing="-5px">
      <Stack spacing="8px" minWidth="50px" width="max-content">
        <PrimaryText>Min/Max Type</PrimaryText>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Stack spacing="2px">
            <MinMaxValue style={{ color: "#f90" }}>{min}</MinMaxValue>
            <SecondaryText>Min</SecondaryText>
          </Stack>

          <Stack spacing="2px">
            <MinMaxValue style={{ color: "#009C34" }}>{max}</MinMaxValue>
            <SecondaryText>Max</SecondaryText>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const stepsLabels = ["Choose Strategy", "Set Min/Max Price"];

const StrategyProgress = ({ strategy, strategyType, min, max, activeStep }) => {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <StyledStepper activeStep={activeStep} orientation="vertical">
        {stepsLabels.map((step, index) => (
          <StyledStep key={step} expanded>
            <StyledStepLabel>{step}</StyledStepLabel>
            <StyledStepContent>
              {index === 0 ? (
                <StepOne strategy={strategy} strategyType={strategyType} />
              ) : index === 1 ? (
                <StepTwo min={min} max={max} />
              ) : null}
            </StyledStepContent>
          </StyledStep>
        ))}
      </StyledStepper>
    </Box>
  );
};

export default StrategyProgress;
