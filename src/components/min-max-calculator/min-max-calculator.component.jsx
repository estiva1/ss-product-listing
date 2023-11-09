import React from "react";
import { Divider, InputAdornment, Stack } from "@mui/material";

import GlowingBox from "../UI/glowing-box/glowing-box.component";
import CircularProgressVisualizer from "../UI/circular-progress/circular-progress.component";
import Button, { BUTTON_TYPE_CLASSES, Ripple } from "../UI/buttons/regular-button/regular-button.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";

import productExample from "../../assets/product-example.jpg";

import {
  HeadingPrimary,
  ItemImage,
  ItemImageContainer,
  ItemInfo,
  Label,
  PrimaryText,
  PrimaryTextBold,
} from "./min-max-calculator.styles";

const MinMaxCalculator = ({ label = "", itemName = "", material = "", asin = "", costPrice = "" }) => {
  return (
    <GlowingBox label={label}>
      <Stack spacing="24px">
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap="32px">
            <ItemImageContainer>
              <ItemImage src={productExample} loading="lazy" />
            </ItemImageContainer>
            <ItemInfo>
              <HeadingPrimary>{itemName}</HeadingPrimary>
              <Stack spacing="16px">
                <PrimaryTextBold style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
                  Material:&nbsp;
                  <PrimaryText>{material}</PrimaryText>
                </PrimaryTextBold>

                <PrimaryTextBold style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
                  ASIN:&nbsp;
                  <PrimaryText>{asin}</PrimaryText>
                </PrimaryTextBold>

                <PrimaryTextBold style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
                  Cost Price:&nbsp;
                  <PrimaryText>${costPrice}</PrimaryText>
                </PrimaryTextBold>
              </Stack>
            </ItemInfo>
          </Stack>

          <Stack spacing="16px" alignItems="end">
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.white} padding="8px 24px">
              Try another product
              <Ripple color="#1565D8" />
            </Button>
            <Stack direction="row" gap="8px" alignItems="center">
              <Label>MIN return on investment</Label>
              <StyledTextField
                sx={{ width: "65px" }}
                placeholder="25"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ "> p": { color: "#1565D8 !important" } }} position="end">
                      %
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack direction="row" gap="8px" alignItems="center">
              <Label>MAX return on investment</Label>
              <StyledTextField
                sx={{ width: "65px" }}
                placeholder="75"
                InputProps={{
                  endAdornment: (
                    <InputAdornment sx={{ "> p": { color: "#1565D8 !important" } }} position="end">
                      %
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ width: "100%", mt: "24px", mb: "24px" }} />

      {/* maxHeight === 1/2 of CircularProgress's size */}
      <Stack sx={{ ml: "40px", mr: "40px", maxHeight: "120px" }} direction="row" justifyContent="space-between">
        <CircularProgressVisualizer color="#6FD5F6" value={17} price="25.12" label="Sample MIN Price" />
        <CircularProgressVisualizer color="#F90" value={35} price="40.02" label="Sample MAX Price" />
      </Stack>
    </GlowingBox>
  );
};

export default MinMaxCalculator;
