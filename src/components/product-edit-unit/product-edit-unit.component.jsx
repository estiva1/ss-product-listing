import React from "react";
import { Divider, Stack } from "@mui/material";

import CustomModal from "../UI/modal/custom-modal.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/regular-button/regular-button.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";

import { Container, PrimaryText } from "./product-edit-unit.styles";

const ProductEditUnit = ({ open, onClose }) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      <Container>
        <PrimaryText>Unit Price</PrimaryText>

        <Divider sx={{ width: "100%" }} />

        <StyledTextField sx={{ mt: "3px", mb: "8px" }} label="Change Unit Price" placeholder="$00.00" fullWidth />

        <Stack direction="row" width="100%" justifyContent="flex-end" gap="14px">
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px" onClick={onClose}>
            Cancel
            <Ripple color="#1565D8" />
          </Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.blue} padding="8px 24px">
            Save
            <Ripple />
          </Button>
        </Stack>
      </Container>
    </CustomModal>
  );
};

export default ProductEditUnit;
