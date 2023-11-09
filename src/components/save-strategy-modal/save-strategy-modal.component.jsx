import React, { useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import CustomModal from "../UI/modal/custom-modal.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import {
  AnimatedCheck,
  CloseIconBox,
  CompletedIconContainer,
  IconWaves,
  PrimaryText,
  SaveStrategyModalContainer,
  StyledButton,
} from "./save-strategy-modal.styles";

const SaveStrategyModal = ({ position, isSaved, open, onClose }) => {
  return (
    <CustomModal position={position} open={open} onClose={onClose}>
      <SaveStrategyModalContainer>
        {!isSaved ? (
          <Stack spacing="32px" alignItems="center">
            <PrimaryText>Let's name your Strategy and save it to your templates!</PrimaryText>
            <StyledTextField sx={{ mb: "8px" }} placeholder="Strategy name" fullWidth />
            <Stack direction="row" gap="20px" width="100%" justifyContent="end">
              <StyledButton variant="text" onClick={onClose}>
                Skip
              </StyledButton>
              <StyledButton variant="contained" >
                Save as a Template
              </StyledButton>
            </Stack>
          </Stack>
        ) : (
          <Stack sx={{ mb: "30px" }} spacing="16px" alignItems="center">
            <CloseIconBox>
              <IconButton onClick={onClose}>
                <CloseRoundedIcon sx={{ color: "#1565D8" }} />
              </IconButton>
            </CloseIconBox>
            <IconWaves>
              <CompletedIconContainer>
                <AnimatedCheck viewBox="0 0 24 24">
                  <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
                </AnimatedCheck>
              </CompletedIconContainer>
            </IconWaves>
            <PrimaryText>{`Congratulations!\nYou have successfully Created a Strategy`}</PrimaryText>
          </Stack>
        )}
      </SaveStrategyModalContainer>
    </CustomModal>
  );
};

export default SaveStrategyModal;
