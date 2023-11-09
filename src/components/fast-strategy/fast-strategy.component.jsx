import React, { useEffect, useState } from "react";
import TemporaryDrawer from "../UI/top-drawer/top-drawer.component";
import {
  Column,
  ContentRow,
  DividerWrapper,
  FastStrategyContent,
  FastStrategyNavigation,
  HeadingPrimary,
  IconRoundBox,
  Label,
  MyStrategiesContainer,
  PointedLightbulbIcon,
  RuleRow,
  SpinningGearIcon,
  StickersRow,
  StyledButton,
  StyledDivider,
  TechnologyIcon,
} from "./fast-strategy.styles";
import StrategySticker from "../UI/strategy-sticker/strategy-sticker.component";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Alert, Box, Divider, InputAdornment, Snackbar, Stack } from "@mui/material";

import CustomAccordion from "../UI/accordion/accordion.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import RegularSwitch from "../UI/switches/regular-switch/regular-switch.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";
import InfoBar from "../UI/hints/info-bar/info-bar.component";
import ExpandableStrategyItem from "../UI/expandable-strategy-item/expandable-strategy-item.component";
import ApplyStrategyModal from "../apply-strategy-modal/apply-strategy-modal.component";
import SaveStrategyModal from "../save-strategy-modal/save-strategy-modal.component";

const AlertBar = ({ open, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity="error" sx={{ width: "100%" }}>
        Hey, you forget to apply some rules to your strategy!
      </Alert>
    </Snackbar>
  );
};

const MinMaxTypeAutoContent = () => {
  return (
    <div style={{ width: "fit-content" }}>
      <Stack spacing="16px" alignItems="flex-end">
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
    </div>
  );
};

const FastStrategy = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(2);
  const [activeStrategy, setActiveStrategy] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const [strategyType, setStrategyType] = useState("");
  const [minMaxType, setMinMaxType] = useState("");

  const currenciesData = ["$", "€", "฿", "¥"];
  const dropdownsData = ["Option 1", "Option 2", "Option 3"];
  const [currency, setCurrency] = useState("$");

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isStrategySaved, setIsStrategySaved] = useState(false);
  const [isSaveStrategyModalOpen, setIsSaveStrategyModalOpen] = useState(false);
  const [isApplyStrategyModalOpen, setIsApplyStrategyModalOpen] = useState(false);

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };
  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };
  const handleSaveStrategyModalOpen = () => {
    setIsSaveStrategyModalOpen(true);
  };
  const handleSaveStrategyModalClose = () => {
    setIsSaveStrategyModalOpen(false);
  };
  const handleApplyStrategyModalOpen = () => {
    setIsApplyStrategyModalOpen(true);
  };
  const handleApplyStrategyModalClose = () => {
    setIsApplyStrategyModalOpen(false);
  };

  const handleSaveStrategy = () => {
    setIsStrategySaved(true);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleAssign = () => {
    if (strategyType === "my") handleApplyStrategyModalOpen();
    else if ((strategyType === "ai" || strategyType === "custom") && minMaxType) handleSaveStrategyModalOpen();
    else handleAlertOpen();
  };
  const handleReset = () => {
    setActiveStep(2);
    setSelectedStrategy("");
    setStrategyType("");
    setMinMaxType("");
  };

  const handleStrategyChange = (event) => {
    setSelectedStrategy(event.target.value);
  };
  const handleMinMaxTypeChange = (event) => {
    setMinMaxType(event.target.value);

    !minMaxType && handleNext();
  };
  const handleStrategyTypeChange = (type) => {
    setStrategyType(type);

    switch (strategyType) {
      case "ai":
      case "custom":
        if (type === "my") handleBack();
        if (type === "my" && minMaxType) setActiveStep(2);
        break;
      default:
        if (type === "ai" || type === "custom") handleNext();
        if ((type === "ai" || type === "custom") && minMaxType) setActiveStep(4);
    }
  };

  const myStrategies = [
    {
      label: "Profit Margin",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      isCurrentStrategy: true,
      numberOfProducts: 33,
    },
    {
      label: "Strategy 1",
      isCurrentStrategy: false,
    },
    {
      label: "abc",
      isCurrentStrategy: false,
    },
    {
      label: "winORlose",
      isCurrentStrategy: false,
    },
  ];

  const predefinedStrategies = [
    {
      label: "MadMax",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      label: "Slow and Steady",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      label: "Buy Box Strategy",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      label: "Low Price Strategy",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  const adjustMinMaxPrice = [
    {
      label: "Manual",
      labelDescription: "Manual",
      hintText:
        "You'll have to manually specify the minimum and maximum prices for each listing under the Catalogs page.",
    },
    {
      label: "ROI",
      labelDescription: "Automatic",
      hintText: `By selecting the ROI based pricing method, we will set the minimum and maximum prices for each listing dynamically based on the minimum and maximum return on investment that is set for this strategy.\nYour cost for each listing connected to this strategy will need to be set.`,
      children: <MinMaxTypeAutoContent />,
    },
    {
      label: "Profit Margin",
      labelDescription: "Automatic",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      children: <MinMaxTypeAutoContent />,
    },
    {
      label: "Fixed Profit",
      labelDescription: "Automatic",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      children: <MinMaxTypeAutoContent />,
    },
  ];

  useEffect(() => {
    const strategy = myStrategies.find((strategy) => strategy.isCurrentStrategy);

    if (strategy) {
      setActiveStrategy(strategy.label);
      setSelectedStrategy(strategy.label);
    }
  }, []);

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
            <MyStrategiesContainer>
              <Stack spacing="20px">
                <Stack direction="row" gap="10px" alignItems="center">
                  <IconRoundBox style={{ background: activeStep < 1 ? "#c4c4c4" : "#009c34" }}>
                    <PointedLightbulbIcon />
                  </IconRoundBox>
                  <HeadingPrimary style={{ color: activeStep < 1 ? "#c4c4c4" : "#009c34" }}>
                    My Strategies
                  </HeadingPrimary>
                </Stack>

                {myStrategies.map((myStrategy, index) => (
                  <ExpandableStrategyItem
                    key={index}
                    clamp
                    value={myStrategy.label}
                    label={myStrategy.label}
                    hintText={myStrategy.hintText}
                    onChange={(e) => {
                      handleStrategyChange(e);
                      handleStrategyTypeChange("my");
                    }}
                    currentStrategy={myStrategy.isCurrentStrategy}
                    numberOfProducts={myStrategy.numberOfProducts}
                    checked={selectedStrategy === myStrategy.label}
                    disabled={activeStep < 1}
                  />
                ))}
              </Stack>
            </MyStrategiesContainer>
          </Column>

          <DividerWrapper style={{ alignSelf: "stretch" }}>
            <Divider orientation="vertical" flexItem />
          </DividerWrapper>

          <Column>
            <Stack width="290px" spacing="32px">
              <Stack spacing="20px">
                <Stack direction="row" gap="10px" alignItems="center">
                  <IconRoundBox style={{ background: activeStep < 2 ? "#c4c4c4" : "#00A3FF" }}>
                    <TechnologyIcon />
                  </IconRoundBox>
                  <HeadingPrimary style={{ color: activeStep < 2 ? "#c4c4c4" : "#00a3ff" }}>
                    Ai Powered Strategy
                  </HeadingPrimary>
                </Stack>
                {predefinedStrategies.slice(0, 2).map((strategy, index) => (
                  <ExpandableStrategyItem
                    key={index}
                    value={strategy.label}
                    label={strategy.label}
                    hintText={strategy.hintText}
                    onChange={(e) => {
                      handleStrategyChange(e);
                      handleStrategyTypeChange("ai");
                    }}
                    checked={selectedStrategy === strategy.label}
                    disabled={activeStep < 2}
                  />
                ))}
              </Stack>

              <Stack spacing="20px">
                <Stack direction="row" gap="10px" alignItems="center">
                  <IconRoundBox style={{ background: activeStep < 2 ? "#c4c4c4" : "#00A3FF" }}>
                    <PointedLightbulbIcon />
                  </IconRoundBox>
                  <HeadingPrimary style={{ color: activeStep < 2 ? "#c4c4c4" : "#00a3ff" }}>
                    Custom Rules Strategy
                  </HeadingPrimary>
                </Stack>
                {predefinedStrategies.slice(2, 4).map((strategy, index) => (
                  <ExpandableStrategyItem
                    key={index}
                    value={strategy.label}
                    label={strategy.label}
                    onChange={(e) => {
                      handleStrategyChange(e);
                      handleStrategyTypeChange("custom");
                    }}
                    checked={selectedStrategy === strategy.label}
                    disabled={activeStep < 2}
                  />
                ))}
              </Stack>
            </Stack>
          </Column>

          <DividerWrapper style={{ alignSelf: "stretch" }}>
            <Divider orientation="vertical" flexItem />
          </DividerWrapper>

          <Column>
            <Stack width="290px" spacing="20px">
              <Stack direction="row" gap="10px" alignItems="center">
                <IconRoundBox style={{ background: activeStep < 3 ? "#c4c4c4" : "#f90" }}>
                  <SpinningGearIcon />
                </IconRoundBox>
                <HeadingPrimary style={{ color: activeStep < 3 ? "#c4c4c4" : "#f90" }}>
                  Adjust Min/Max Price
                </HeadingPrimary>
              </Stack>
              {adjustMinMaxPrice.map((type, index) => (
                <ExpandableStrategyItem
                  key={index}
                  value={type.label}
                  label={type.label}
                  hintText={type.hintText}
                  labelDescription={type.labelDescription}
                  children={type.children}
                  onClick={handleMinMaxTypeChange}
                  checked={minMaxType === type.label}
                  disabled={activeStep < 3}
                />
              ))}
            </Stack>
          </Column>

          <DividerWrapper style={{ alignSelf: "stretch" }}>
            <Divider orientation="vertical" flexItem />
          </DividerWrapper>

          <Column>
            <Stack width="290px" direction="row" gap="10px" alignItems="center" marginBottom="32px">
              <IconRoundBox style={{ background: activeStep < 4 ? "#c4c4c4" : "#1565d8" }}>
                <SpinningGearIcon />
              </IconRoundBox>
              <HeadingPrimary style={{ color: activeStep < 4 ? "#c4c4c4" : "#1565d8" }}>Rules</HeadingPrimary>
            </Stack>
            <Stack gap="24px">
              <CustomAccordion summary="Price Rules" disabled={activeStep < 4}>
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

              <CustomAccordion summary="Competition Rules" disabled={activeStep < 4}>
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

              <CustomAccordion summary="Exclude Sellers" disabled={activeStep < 4}>
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

              <CustomAccordion summary="Staying In the Buy Box" disabled={activeStep < 4}>
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

      <AlertBar open={isAlertOpen} onClose={handleAlertClose} />

      <ApplyStrategyModal
        position="top-right"
        open={isApplyStrategyModalOpen}
        onClose={handleApplyStrategyModalClose}
      />

      <SaveStrategyModal position="top-right" open={isSaveStrategyModalOpen} onClose={handleSaveStrategyModalClose} />

      <FastStrategyNavigation>
        <Stack direction="row" gap="16px" width="100%" mt="10px" justifyContent="end" padding="20px">
          <StyledButton
            variant="text"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => {
              onClose();
              handleReset();
            }}
          >
            Close
          </StyledButton>
          <StyledButton
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            onClick={handleAssign}
            disabled={selectedStrategy === activeStrategy}
          >
            Assign and Proceed
          </StyledButton>
        </Stack>
      </FastStrategyNavigation>
    </TemporaryDrawer>
  );
};

export default FastStrategy;
