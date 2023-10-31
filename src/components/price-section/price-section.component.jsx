import React from "react";
import { Divider, Stack } from "@mui/material";

import CustomModal from "../UI/modal/custom-modal.component";
import PriceSectionUpdatedTable from "../UI/price-section-updated-table/price-section-updated-table.component";

import { priceSectionUpdatedData } from "../../constants";
import { Container, PrimaryText, SecondaryText } from "./price-section.styles";

const PriceSection = ({ open, onClose }) => {
  const sell = 0;
  const buyBox = 0;
  const breakEven = 0;

  return (
    <CustomModal open={open} onClose={onClose}>
      <Container>
        <Stack direction="row" gap="32px" alignItems="center">
          <Stack direction="column" gap="4px" alignItems="flex-start">
            <SecondaryText>Sell</SecondaryText>
            <PrimaryText>${sell.toFixed(2)}</PrimaryText>
          </Stack>
          <Stack direction="column" gap="4px" alignItems="flex-start">
            <SecondaryText>Buy Box</SecondaryText>
            <PrimaryText>${buyBox.toFixed(2)}</PrimaryText>
          </Stack>
          <Stack direction="column" gap="4px" alignItems="flex-start">
            <SecondaryText>Break Even</SecondaryText>
            <PrimaryText>${breakEven.toFixed(2)}</PrimaryText>
          </Stack>
        </Stack>
        <Divider sx={{ width: "100%" }} />
        <PrimaryText>Heading</PrimaryText>
        <PriceSectionUpdatedTable data={priceSectionUpdatedData} />
      </Container>
    </CustomModal>
  );
};

export default PriceSection;
