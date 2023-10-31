import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Container, Divider, IconButton, InputAdornment, Stack } from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import InfoBar from "../UI/hints/info-bar/info-bar.component";
import HintBar from "../UI/hints/hint-bar/hint-bar.component";
import CustomAccordion from "../UI/accordion/accordion.component";
import TemporaryDrawer from "../UI/top-drawer/top-drawer.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import RegularSwitch from "../UI/switches/regular-switch/regular-switch.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";
import RegularStrategyButton from "../UI/buttons/select-strategy-buttons/select-strategy-btn-regular/select-strategy-btn-regular.component";
import EnhancedStrategyButton from "../UI/buttons/select-strategy-buttons/select-strategy-btn-with-labels/select-strategy-btn-with-labels.component";

import FileUploader from "../file-uploader/file-uploader.component";
import StrategyProgress from "../strategy-progress/strategy-progress.component";
import MinMaxCalculator from "../min-max-calculator/min-max-calculator.component";
import SaveStrategyModal from "../save-strategy-modal/save-strategy-modal.component";

import { ReactComponent as RoiIcon } from "../../assets/roi-icon.svg";
import { ReactComponent as ManualIcon } from "../../assets/manual-icon.svg";
import { ReactComponent as FixedProfitIcon } from "../../assets/fixed-prodit-icon.svg";
import { ReactComponent as ProfitMarginIcon } from "../../assets/profit-margin-icon.svg";
import { ReactComponent as ByuBoxStrategyIcon } from "../../assets/buy-box-strategy-icon.svg";
import { ReactComponent as LowPriceStrategyIcon } from "../../assets/low-price-strategy-icon.svg";

import {
  Description,
  GlowingBox,
  HeadingPrimary,
  HeadingSecondary,
  Label,
  MainContainer,
  NewStrategySavedContainer,
  NewStrategySavedImage,
  RuleRow,
  StyledButton,
  StyledContainer,
  Title,
} from "./create-new-strategy.styles";

const CreateNewStrategy = ({ open, onClose }) => {
  const currenciesData = ["$", "€", "฿", "¥"];
  const dropdownsData = ["Option 1", "Option 2", "Option 3"];

  const [currency, setCurrency] = useState("$");
  const [strategyType, setStrategyType] = useState("--");
  const [strategy, setStrategy] = useState("Custom Rule Base");

  const [activeStep, setActiveStep] = useState(0);
  const [minMaxPrice, setMinMaxPrice] = useState(null);
  const [nextButtonState, setNextButtonState] = useState(false);
  const [isSaveStrategyModalOpen, setIsSaveStrategyModalOpen] = useState(false);

  const handleNextButtonStateActive = () => {
    setNextButtonState(true);
  };
  const handleNextButtonStateDisabled = () => {
    setNextButtonState(false);
  };

  const handleStrategyChange = (newStrategy) => {
    setStrategy(newStrategy);
  };
  const handleStrategyTypeChange = (newStrategyType) => {
    setStrategyType(newStrategyType);

    if (nextButtonState === false) setNextButtonState(true);
    else return;
  };
  const handleMinMaxPriceChange = (newMinMaxPrice) => {
    setMinMaxPrice(newMinMaxPrice);
    if (nextButtonState === false) setNextButtonState(true);
    else return;
  };

  const handleSaveStrategyModalOpen = () => {
    setIsSaveStrategyModalOpen(true);
  };
  const handleSaveStrategyModalClose = () => {
    setIsSaveStrategyModalOpen(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setNextButtonState(false);
        break;

      case 1:
        handleSaveStrategyModalOpen();
        break;

      case 2:
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        break;
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (nextButtonState === false) setNextButtonState(true);
    else return;
  };
  const handleReset = () => {
    setActiveStep(0);
    setStrategyType("--");
    setNextButtonState(false);
  };

  return (
    <TemporaryDrawer open={open} onClose={onClose}>
      <MainContainer>
        <Stack direction="row" spacing="4px" alignItems="center">
          <IconButton aria-label="back" onClick={onClose}>
            <KeyboardBackspaceRoundedIcon sx={{ color: "#1565D8" }} />
          </IconButton>
          <HeadingSecondary>Create New Strategy</HeadingSecondary>
        </Stack>
        <Divider sx={{ mt: "22px", mb: "32px", width: "100%" }} />

        <Stack direction="row" gap="32px" alignItems="start">
          <StrategyProgress strategy={strategy} strategyType={strategyType} activeStep={activeStep} />
          <Divider orientation="vertical" flexItem />

          <StyledContainer>
            {activeStep === 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Stack spacing="40px" width="100%">
                    <GlowingBox>
                      <Container disableGutters>
                        <Stack spacing="30px">
                          <Stack spacing="16px">
                            <HeadingPrimary>Choose Custom Rule Base</HeadingPrimary>
                            <Description>
                              There are Two Custom base Strategies are your unique repricing rules that determine
                              exactly how your listings will compete against other sellers on the marketplace. Please
                              choose any one strategy you would like to create.
                            </Description>
                          </Stack>

                          <Stack direction="row" spacing="40px" justifyContent="center">
                            <RegularStrategyButton
                              text="Buy Box Strategy"
                              onClick={() => handleStrategyTypeChange("Buy Box Strategy")}
                            >
                              <ByuBoxStrategyIcon />
                            </RegularStrategyButton>
                            <RegularStrategyButton
                              text="Low Price Strategy"
                              onClick={() => handleStrategyTypeChange("Low Price Strategy")}
                            >
                              <LowPriceStrategyIcon />
                            </RegularStrategyButton>
                          </Stack>
                        </Stack>
                      </Container>
                    </GlowingBox>

                    <Container disableGutters>
                      <Stack gap="24px">
                        <CustomAccordion summary="Price Rules">
                          <div style={{ width: "100%" }}>
                            <RuleRow>
                              <Box sx={{ width: "50%" }}>
                                <Stack spacing="10px">
                                  <Label>How to price against the competition</Label>
                                  <Stack direction="row" spacing="16px" alignItems="center">
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
                              <Box sx={{ width: "50%" }}>
                                <HintBar text="The amount Sale Support will adjust your price by when competing with other sellers." />
                              </Box>
                            </RuleRow>

                            <RuleRow>
                              <Box sx={{ width: "50%" }}>
                                <Stack spacing="10px">
                                  <Stack direction="row" spacing="8px" alignItems="center">
                                    <RegularSwitch />
                                    <Label>Price differently against Amazon</Label>
                                  </Stack>
                                  <Stack direction="row" spacing="16px" alignItems="center">
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
                              <Box sx={{ width: "50%" }}>
                                <HintBar text="The amount Sale Support will adjust your price by when competing with Amazon." />
                              </Box>
                            </RuleRow>

                            <RuleRow>
                              <Box sx={{ width: "50%" }}>
                                <Stack spacing="10px">
                                  <Stack direction="row" spacing="8px" alignItems="center">
                                    <RegularSwitch />
                                    <Label>Price differently against FBA</Label>
                                  </Stack>
                                  <Stack direction="row" spacing="16px" alignItems="center">
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
                              <Box sx={{ width: "50%" }}>
                                <HintBar text="The amount Sale Support will adjust your price by when competing with FBA." />
                              </Box>
                            </RuleRow>

                            <RuleRow>
                              <Box sx={{ width: "50%" }}>
                                <Stack spacing="10px">
                                  <Stack direction="row" spacing="8px" alignItems="center">
                                    <RegularSwitch />
                                    <Label>Price differently against FBM</Label>
                                  </Stack>
                                  <Stack direction="row" spacing="16px" alignItems="center">
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
                              <Box sx={{ width: "50%" }}>
                                <HintBar text="The amount Sale Support will adjust your price by when competing with FBM." />
                              </Box>
                            </RuleRow>
                          </div>
                        </CustomAccordion>

                        <CustomAccordion summary="Competition Rules">
                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
                              <Stack spacing="10px">
                                <Label>When there is no competition</Label>
                                <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                                <Stack direction="row" spacing="16px" alignItems="center">
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
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Action for Sale Support to take when no competition is found on a listing." />
                            </Box>
                          </RuleRow>

                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
                              <Stack spacing="10px">
                                <Label>When the competition is Below your minimum price</Label>
                                <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                                <Stack direction="row" spacing="16px" alignItems="center">
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
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Action for Sale Support to take when the competition is below your min price." />
                            </Box>
                          </RuleRow>

                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
                              <Stack spacing="10px">
                                <Label>When the competition is Above your maximum price</Label>
                                <Dropdown sx={{ flex: 1 }} data={dropdownsData} placeholder="Choose Option" />
                                <Stack direction="row" spacing="16px" alignItems="center">
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
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Action for Sale Support to take when the competition is above your max price." />
                            </Box>
                          </RuleRow>

                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
                              <Stack direction="row" gap="10px" alignItems="center">
                                <RegularSwitch />
                                <Label>Use max price when out of stock</Label>
                              </Stack>
                            </Box>
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Listings can be set to max price when going out of stock." />
                            </Box>
                          </RuleRow>
                        </CustomAccordion>

                        <CustomAccordion summary="Exclude Sellers">
                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
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
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Sellers that meet or exceed this feedback level will be considered competitors." />
                            </Box>
                          </RuleRow>

                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
                              <Stack direction="row" gap="10px" alignItems="center">
                                <RegularSwitch />
                                <Label>Exclude Amazon as a competitor</Label>
                              </Stack>
                            </Box>
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Choose to ignore Amazon when found on a listing." />
                            </Box>
                          </RuleRow>

                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
                              <Stack direction="row" gap="10px" alignItems="center">
                                <RegularSwitch />
                                <Label>Exclude back-ordered sellers</Label>
                              </Stack>
                            </Box>
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Exclude sellers whose inventory is not yet available." />
                            </Box>
                          </RuleRow>

                          <RuleRow>
                            <Box sx={{ width: "50%" }}>
                              <Stack direction="row" gap="10px" alignItems="center">
                                <RegularSwitch />
                                <Label>Withe Free Shipping</Label>
                              </Stack>
                            </Box>
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="Exclude sellers whose entered with free shipping details." />
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
                            <Box sx={{ width: "50%" }}>
                              <Stack spacing="10px">
                                <Label>When you've acquired the buy box</Label>
                                <Stack direction="row" spacing="16px" alignItems="center">
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
                            <Box sx={{ width: "50%" }}>
                              <HintBar text="The action Sale Support will take to keep you in the buy box for longer." />
                            </Box>
                          </RuleRow>
                        </CustomAccordion>
                      </Stack>
                    </Container>
                  </Stack>
                </motion.div>
              </AnimatePresence>
            ) : activeStep === 1 ? (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Stack spacing="40px" sx={{ width: "680px" }}>
                      <Stack spacing="30px">
                        <Stack spacing="16px">
                          <HeadingPrimary>Choose Custom Rule Base</HeadingPrimary>
                          <Description>
                            There are Two Custom base Strategies are your unique repricing rules that determine exactly
                            how your listings will compete against other sellers on the marketplace. Please choose any
                            one strategy you would like to create.
                          </Description>
                        </Stack>

                        <Stack direction="row" spacing="40px" justifyContent="center">
                          <EnhancedStrategyButton
                            text="Manual"
                            labelTop="Manual"
                            labelBottom="Manual min/max for each listing"
                            onClick={() => handleMinMaxPriceChange("manual")}
                          >
                            <ManualIcon />
                          </EnhancedStrategyButton>
                          <EnhancedStrategyButton
                            text="ROI"
                            labelTop="Manual"
                            labelBottom="Calculated based on return on  investment"
                            onClick={() => handleMinMaxPriceChange("roi")}
                          >
                            <RoiIcon />
                          </EnhancedStrategyButton>
                        </Stack>

                        <Stack direction="row" spacing="40px" justifyContent="center">
                          <EnhancedStrategyButton
                            text="Profit Margin"
                            labelTop="Automatic"
                            labelBottom="Calculated based on profit margin"
                            onClick={() => handleMinMaxPriceChange("profitMargin")}
                          >
                            <ProfitMarginIcon />
                          </EnhancedStrategyButton>
                          <EnhancedStrategyButton
                            text="Fixed Profit"
                            labelTop="Automatic"
                            labelBottom="Calculated based on fixed amount of profit"
                            onClick={() => handleMinMaxPriceChange("fixedProfit")}
                          >
                            <FixedProfitIcon />
                          </EnhancedStrategyButton>
                        </Stack>
                      </Stack>
                      {(() => {
                        switch (minMaxPrice) {
                          case "manual":
                            return (
                              <Stack spacing="40px">
                                <InfoBar
                                  label="About Manual Pricing Method"
                                  description="You'll have to manually specify the minimum and maximum prices for each listing under the Catalogs page."
                                />
                                <FileUploader />
                              </Stack>
                            );
                          case "roi":
                            return (
                              <Stack spacing="40px">
                                <InfoBar
                                  label="About ROI Based Pricing Method"
                                  description="By selecting the ROI based pricing method, we will set the minimum and maximum prices for each listing dynamically based on the minimum and maximum return on investment that is set for this strategy.
                                Your cost for each listing connected to this strategy will need to be set."
                                />
                                <MinMaxCalculator
                                  label="Sample ROI Calculator"
                                  itemName="3 Plus Vibe Pro Smart Watch"
                                  material="10.1 FL OZ"
                                  asin="B075VQ3YJQ"
                                  costPrice="12.80"
                                />
                              </Stack>
                            );
                          case "profitMargin":
                            return (
                              <Stack spacing="40px">
                                <InfoBar
                                  label="About the Profit Margin Pricing Method"
                                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                />
                                <MinMaxCalculator
                                  label="Sample Profit Margin Calculator"
                                  itemName="3 Plus Vibe Pro Smart Watch"
                                  material="10.1 FL OZ"
                                  asin="B075VQ3YJQ"
                                  costPrice="12.80"
                                />
                              </Stack>
                            );
                          case "fixedProfit":
                            return (
                              <Stack spacing="40px">
                                <InfoBar
                                  label="About the Fixed Profit Pricing Method"
                                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                />
                                <MinMaxCalculator
                                  label="Sample Fixed Profit Calculator"
                                  itemName="3 Plus Vibe Pro Smart Watch"
                                  material="10.1 FL OZ"
                                  asin="B075VQ3YJQ"
                                  costPrice="12.80"
                                />
                              </Stack>
                            );
                          default:
                            return null;
                        }
                      })()}
                    </Stack>
                  </motion.div>
                </AnimatePresence>

                <SaveStrategyModal open={isSaveStrategyModalOpen} onClose={handleSaveStrategyModalClose} />
              </>
            ) : activeStep === 2 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -40, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <NewStrategySavedContainer>
                    <NewStrategySavedImage />
                    <Stack spacing="10px">
                      <Title>Great Job!</Title>
                      <Description>Now yo can go back to your product listing</Description>
                    </Stack>
                  </NewStrategySavedContainer>
                </motion.div>
              </AnimatePresence>
            ) : null}

            <Stack direction="row" gap="16px" width="100%" mt="30px" justifyContent="end">
              <StyledButton
                variant="text"
                startIcon={<ArrowBackRoundedIcon />}
                onClick={
                  activeStep === 0 || activeStep === 2
                    ? () => {
                        handleReset();
                        onClose();
                      }
                    : handleBack
                }
              >
                {activeStep === 0 || activeStep === 2 ? "Close" : "Back"}
              </StyledButton>
              <StyledButton
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                onClick={handleNext}
                disabled={nextButtonState === false}
                sx={{ display: activeStep === 2 ? "none" : "flex" }}
              >
                Assign and Proceed
              </StyledButton>
            </Stack>
          </StyledContainer>
        </Stack>
      </MainContainer>
    </TemporaryDrawer>
  );
};

export default CreateNewStrategy;
