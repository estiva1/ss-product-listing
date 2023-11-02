import React, { useState } from "react";
import TemporaryDrawer from "../UI/top-drawer/top-drawer.component";
import {
  AiPoweredStrategyIcon,
  Column,
  ContentRow,
  DividerWrapper,
  FastStrategyContent,
  FastStrategyNavigation,
  HeadingPrimary,
  IconRoundBox,
  Label,
  MyStrategiesIcon,
  Row,
  RuleRow,
  StickersRow,
  StyledButton,
  StyledDivider,
} from "./fast-strategy.styles";
import StrategySticker from "../UI/strategy-sticker/strategy-sticker.component";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Box, Divider, InputAdornment, Stack } from "@mui/material";

import CustomAccordion from "../UI/accordion/accordion.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import RegularSwitch from "../UI/switches/regular-switch/regular-switch.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";
import HintBar from "../UI/hints/hint-bar/hint-bar.component";
import InfoBar from "../UI/hints/info-bar/info-bar.component";

const FastStrategy = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(2);

  const currenciesData = ["$", "€", "฿", "¥"];
  const dropdownsData = ["Option 1", "Option 2", "Option 3"];
  const [currency, setCurrency] = useState("$");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <TemporaryDrawer open={open} onClose={onClose}>
      <FastStrategyContent>
        <StickersRow activeStep={activeStep}>
          <Column>
            <StrategySticker
              label="Your Strategies"
              text={`Change your own Strategies\nor create a New One`}
              color="#80CD9A"
              disabled={activeStep < 1}
            />
          </Column>

          <DividerWrapper>
            <StyledDivider sx={{ width: "100%", mt: "20px" }}>OR</StyledDivider>
          </DividerWrapper>

          <Column>
            <StrategySticker
              label="Types of Strategies"
              text="Pick the type of Strategy"
              color="#7CCFFD"
              disabled={activeStep < 2}
            />
          </Column>

          <DividerWrapper />

          <Column>
            <StrategySticker
              label="Price Settings"
              text="Adjust the price rules for a Strategy"
              color="#F9C87A"
              disabled={activeStep < 3}
            />
          </Column>

          <DividerWrapper />

          <Column>
            <StrategySticker
              label="Your Strategies"
              text={`Choose your repricing rules of competing\nagainst other sellers on the marketplace.`}
              color="#6A98D8"
              disabled={activeStep < 4}
            />
          </Column>
        </StickersRow>

        <ContentRow activeStep={activeStep}>
          <Column>
            <Stack width="290px" direction="row" gap="10px" alignItems="center">
              <IconRoundBox style={{ background: activeStep < 1 ? "#c4c4c4" : "#009c34" }}>
                <MyStrategiesIcon />
              </IconRoundBox>
              <HeadingPrimary style={{ color: activeStep < 1 ? "#c4c4c4" : "#009c34" }}>My Strategies</HeadingPrimary>
            </Stack>
          </Column>

          <DividerWrapper style={{ alignSelf: "stretch" }}>
            <Divider orientation="vertical" flexItem />
          </DividerWrapper>

          <Column>
            <Stack width="290px" direction="row" gap="10px" alignItems="center">
              <IconRoundBox style={{ background: activeStep < 2 ? "#c4c4c4" : "#00A3FF" }}>
                <AiPoweredStrategyIcon />
              </IconRoundBox>
              <HeadingPrimary style={{ color: activeStep < 2 ? "#c4c4c4" : "#00a3ff" }}>
                Ai Powered Strategy
              </HeadingPrimary>
            </Stack>
          </Column>

          <DividerWrapper style={{ alignSelf: "stretch" }}>
            <Divider orientation="vertical" flexItem />
          </DividerWrapper>

          <Column>
            <Stack width="290px" direction="row" gap="10px" alignItems="center">
              <IconRoundBox style={{ background: activeStep < 3 ? "#c4c4c4" : "#f90" }}>
                <AiPoweredStrategyIcon />
              </IconRoundBox>
              <HeadingPrimary style={{ color: activeStep < 3 ? "#c4c4c4" : "#f90" }}>
                Adjust Min/Max Price
              </HeadingPrimary>
            </Stack>
          </Column>

          <DividerWrapper style={{ alignSelf: "stretch" }}>
            <Divider orientation="vertical" flexItem />
          </DividerWrapper>

          <Column>
            <Stack width="290px" direction="row" gap="10px" alignItems="center" marginBottom="32px">
              <IconRoundBox style={{ background: activeStep < 4 ? "#c4c4c4" : "#1565d8" }}>
                <AiPoweredStrategyIcon />
              </IconRoundBox>
              <HeadingPrimary style={{ color: activeStep < 4 ? "#c4c4c4" : "#1565d8" }}>Rules</HeadingPrimary>
            </Stack>
            <Stack gap="24px">
              <CustomAccordion summary="Price Rules">
                <div style={{ width: "100%" }}>
                  <RuleRow>
                    <Box sx={{ width: "100%" }}>
                      <Stack spacing="10px">
                        <Label>How to price against the competition</Label>
                        <Stack direction="row" spacing="8px" alignItems="center">
                          <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                          <Label>by</Label>
                          <Dropdown
                            sx={{ width: "55px" }}
                            data={currenciesData}
                            placeholder=""
                            disableClearable
                            setSelectedValue={setCurrency}
                            value={currency}
                          />
                          <StyledTextField
                            sx={{ width: "70px" }}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </RuleRow>

                  <RuleRow>
                    <Box sx={{ width: "100%" }}>
                      <Stack spacing="10px">
                        <Stack direction="row" spacing="8px" alignItems="center">
                          <RegularSwitch />
                          <Label>Price differently against Amazon</Label>
                        </Stack>
                        <Stack direction="row" spacing="8px" alignItems="center">
                          <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                          <Label>by</Label>
                          <Dropdown
                            sx={{ width: "55px" }}
                            data={currenciesData}
                            placeholder=""
                            disableClearable
                            setSelectedValue={setCurrency}
                            value={currency}
                          />
                          <StyledTextField
                            sx={{ width: "70px" }}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </RuleRow>

                  <RuleRow>
                    <Box sx={{ width: "100%" }}>
                      <Stack spacing="10px">
                        <Stack direction="row" spacing="8px" alignItems="center">
                          <RegularSwitch />
                          <Label>Price differently against FBA</Label>
                        </Stack>
                        <Stack direction="row" spacing="8px" alignItems="center">
                          <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                          <Label>by</Label>
                          <Dropdown
                            sx={{ width: "55px" }}
                            data={currenciesData}
                            placeholder=""
                            disableClearable
                            setSelectedValue={setCurrency}
                            value={currency}
                          />
                          <StyledTextField
                            sx={{ width: "70px" }}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </RuleRow>

                  <RuleRow>
                    <Box sx={{ width: "100%" }}>
                      <Stack spacing="10px">
                        <Stack direction="row" spacing="8px" alignItems="center">
                          <RegularSwitch />
                          <Label>Price differently against FBM</Label>
                        </Stack>
                        <Stack direction="row" spacing="8px" alignItems="center">
                          <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                          <Label>by</Label>
                          <Dropdown
                            sx={{ width: "55px" }}
                            data={currenciesData}
                            placeholder=""
                            disableClearable
                            setSelectedValue={setCurrency}
                            value={currency}
                          />
                          <StyledTextField
                            sx={{ width: "70px" }}
                            InputProps={{
                              startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                            }}
                          />
                        </Stack>
                      </Stack>
                    </Box>
                  </RuleRow>
                </div>
              </CustomAccordion>

              <CustomAccordion summary="Competition Rules">
                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack spacing="10px">
                      <Label>When there is no competition</Label>
                      <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                      <Stack direction="row" spacing="8px" alignItems="center">
                        <Label>Set to</Label>
                        <Dropdown
                          sx={{ flex: 1, marginLeft: "10px !important" }}
                          data={dropdownsData}
                          placeholder="Choose Option"
                        />
                        <Label>by</Label>
                        <Dropdown
                          sx={{ width: "55px" }}
                          data={currenciesData}
                          placeholder=""
                          disableClearable
                          setSelectedValue={setCurrency}
                          value={currency}
                        />
                        <StyledTextField
                          sx={{ width: "70px" }}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Box>
                </RuleRow>

                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack spacing="10px">
                      <Label>When the competition is Below your minimum price</Label>
                      <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                      <Stack direction="row" spacing="8px" alignItems="center">
                        <Label>Set to</Label>
                        <Dropdown
                          sx={{ flex: 1, marginLeft: "10px !important" }}
                          data={dropdownsData}
                          placeholder="Choose Option"
                        />
                        <Label>by</Label>
                        <Dropdown
                          sx={{ width: "55px" }}
                          data={currenciesData}
                          placeholder=""
                          disableClearable
                          setSelectedValue={setCurrency}
                          value={currency}
                        />
                        <StyledTextField
                          sx={{ width: "70px" }}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Box>
                </RuleRow>

                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack spacing="10px">
                      <Label>When the competition is Above your maximum price</Label>
                      <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                      <Stack direction="row" spacing="8px" alignItems="center">
                        <Label>Set to</Label>
                        <Dropdown
                          sx={{ flex: 1, marginLeft: "10px !important" }}
                          data={dropdownsData}
                          placeholder="Choose Option"
                        />
                        <Label>by</Label>
                        <Dropdown
                          sx={{ width: "55px" }}
                          data={currenciesData}
                          placeholder=""
                          disableClearable
                          setSelectedValue={setCurrency}
                          value={currency}
                        />
                        <StyledTextField
                          sx={{ width: "70px" }}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Box>
                </RuleRow>

                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack direction="row" gap="10px" alignItems="center">
                      <RegularSwitch />
                      <Label>Use max price when out of stock</Label>
                    </Stack>
                  </Box>
                </RuleRow>
              </CustomAccordion>

              <CustomAccordion summary="Exclude Sellers">
                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack direction="row" gap="10px" alignItems="center">
                      <RegularSwitch />
                      <StyledTextField
                        sx={{ width: "65px" }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment sx={{ "> p": { color: "#1565D8 !important" } }} position="end">
                              %
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Label>Exclude sellers by their feedback rating</Label>
                    </Stack>
                  </Box>
                </RuleRow>

                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack direction="row" gap="10px" alignItems="center">
                      <RegularSwitch />
                      <Label>Exclude Amazon as a competitor</Label>
                    </Stack>
                  </Box>
                </RuleRow>

                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack direction="row" gap="10px" alignItems="center">
                      <RegularSwitch />
                      <Label>Exclude back-ordered sellers</Label>
                    </Stack>
                  </Box>
                </RuleRow>

                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack direction="row" gap="10px" alignItems="center">
                      <RegularSwitch />
                      <Label>Withe Free Shipping</Label>
                    </Stack>
                  </Box>
                </RuleRow>
              </CustomAccordion>

              <CustomAccordion summary="Staying In the Buy Box">
                <RuleRow>
                  <InfoBar
                    disableGlow
                    label="Maximize your profit in the Buy Box."
                    description="Getting into the Buy Box, and staying there, can require two different strategies. In this stage, you'll determine the strategy and we will use to maximize your time in the Buy Box once you've won it."
                  />
                </RuleRow>

                <RuleRow>
                  <Box sx={{ width: "100%" }}>
                    <Stack spacing="10px">
                      <Label>When you've acquired the buy box</Label>
                      <Stack direction="row" spacing="8px" alignItems="center">
                        <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                        <Label>by</Label>
                        <Dropdown
                          sx={{ width: "55px" }}
                          data={currenciesData}
                          placeholder=""
                          disableClearable
                          setSelectedValue={setCurrency}
                          value={currency}
                        />
                        <StyledTextField
                          sx={{ width: "70px" }}
                          InputProps={{
                            startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Box>
                </RuleRow>
              </CustomAccordion>
            </Stack>
          </Column>
        </ContentRow>
      </FastStrategyContent>

      <FastStrategyNavigation>
        <Stack direction="row" gap="16px" width="100%" mt="10px" justifyContent="end" padding="20px">
          <StyledButton variant="text" startIcon={<ArrowBackRoundedIcon />} onClick={handleBack}>
            Back
          </StyledButton>
          <StyledButton
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={handleNext}
            //disabled={nextButtonState === false}
            //sx={{ display: activeStep === 2 ? "none" : "flex" }}
          >
            Assign and Proceed
          </StyledButton>
        </Stack>
      </FastStrategyNavigation>
    </TemporaryDrawer>
  );
};

export default FastStrategy;
