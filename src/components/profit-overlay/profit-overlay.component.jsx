import React from "react";
import { Divider, Stack } from "@mui/material";

import CustomModal from "../UI/modal/custom-modal.component";
import { Container, PrimaryText, PrimaryTextThin, SecondaryText } from "./profit-overlay.styles";

const ProfitOverlay = ({ open, onClose }) => {
  const value = 0;
  const sectionOne = ["Sale Price", "Margin", "Bundle Qty"];
  const sectionTwo = ["Referal", "Fulfilment", "Storage", "Prep", "Total Fee"];
  const sectionThree = ["Total Profit", "Profit %"];

  return (
    <CustomModal open={open} onClose={onClose}>
      <Container>
        <PrimaryText>Profit</PrimaryText>

        {sectionOne.map((row) => (
          <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
            <SecondaryText>{row}</SecondaryText>
            <PrimaryTextThin>${value.toFixed(2)}</PrimaryTextThin>
          </Stack>
        ))}
        <Divider sx={{ width: "100%" }} />

        {sectionTwo.map((row) => (
          <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
            <SecondaryText>{row}</SecondaryText>
            <PrimaryTextThin>${value.toFixed(2)}</PrimaryTextThin>
          </Stack>
        ))}
        <Divider sx={{ width: "100%" }} />

        {sectionThree.map((row) => (
          <Stack direction="row" width="100%" alignItems="center" justifyContent="space-between">
            <SecondaryText>{row}</SecondaryText>
            <PrimaryTextThin style={{ color: "#000" }}>
              {row === "Profit %" ? `${value.toFixed(2)}%` : `$${value.toFixed(2)}`}
            </PrimaryTextThin>
          </Stack>
        ))}
        <Divider sx={{ width: "100%" }} />

        <Stack direction="row" width="100%" marginTop="12px" alignItems="center" justifyContent="space-between">
          <SecondaryText>Buy Box Profit</SecondaryText>
          <PrimaryText style={{ color: "#009C34" }}>${value.toFixed(2)}</PrimaryText>
        </Stack>
      </Container>
    </CustomModal>
  );
};

export default ProfitOverlay;
