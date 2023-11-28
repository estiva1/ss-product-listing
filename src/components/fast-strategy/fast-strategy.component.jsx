import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Container, Divider, IconButton, InputAdornment, Stack } from "@mui/material";

import InfoBar from "../UI/hints/info-bar/info-bar.component";
import CustomAccordion from "../UI/accordions/accordion/accordion.component";
import TemporaryDrawer from "../UI/top-drawer/top-drawer.component";
import Dropdown from "../UI/dropdowns/simple-dropdown/dropdown.component";
import IconButtonStretched, {
  BUTTON_TYPE_CLASSES,
  Ripple,
} from "../UI/buttons/icon-button-stretched/icon-button-stretched.component";
import RegularSwitch from "../UI/switches/regular-switch/regular-switch.component";
import MyStrategyInfo from "../UI/hints/my-strategy-info/my-strategy-info.component";
import ParentAccordion from "../UI/accordions/parent-accordion/parent-accordion.component";
import ExpandableStrategyItem from "../UI/expandable-strategy-item/expandable-strategy-item.component";
import StyledTextField from "../UI/text-fields/regular-text-fields/styled-text-field/styled-text-field.component";

import SaveStrategyModal from "../save-strategy-modal/save-strategy-modal.component";
import ApplyStrategyModal from "../apply-strategy-modal/apply-strategy-modal.component";

import deleteIcon from "../../assets/delete-icon.svg";

import {
  BoldDivider,
  Column,
  FastStrategyContent,
  FastStrategyHeader,
  HeaderBox,
  HeadingPrimary,
  IconRoundBox,
  Label,
  Legend,
  LegendPoint,
  LegendPointText,
  MainContainer,
  PointedLightbulbIcon,
  RuleRow,
  SpinningGearIcon,
  Strategies,
  StrategyCaption,
  StyledButtonBlue,
  StyledButtonWhite,
} from "./fast-strategy.styles";

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

const NoContent = () => {
  // :)
  return <Label>¯\_(ツ)_/¯</Label>;
};

const FastStrategy = ({ open, onClose }) => {
  const [flow, setFlow] = useState("change");

  const [activeStrategy, setActiveStrategy] = useState("");
  const [selectedStrategy, setSelectedStrategy] = useState("");
  const [numberOfSkus, setNumberOfSkus] = useState("");
  const [strategyType, setStrategyType] = useState("my");
  const [minMaxType, setMinMaxType] = useState("");

  const currenciesData = ["$", "€", "฿", "¥"];
  const dropdownsData = ["Option 1", "Option 2", "Option 3"];
  const [currency, setCurrency] = useState("$");

  const [isSaveStrategyModalOpen, setIsSaveStrategyModalOpen] = useState(false);
  const [isApplyStrategyModalOpen, setIsApplyStrategyModalOpen] = useState(false);

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

  const handleSaveClick = () => {
    flow === "change" ? handleApplyStrategyModalOpen() : handleSaveStrategyModalOpen();
  };

  const handleReset = () => {
    setSelectedStrategy("");
    setStrategyType("");
    setMinMaxType("");
  };

  const handleFlowChange = (newFlow) => {
    setFlow(newFlow);
  };
  const handleStrategyChange = (event) => {
    setSelectedStrategy(event.target.value);
  };
  const handleNumberOfSkusChange = (n) => {
    setNumberOfSkus(n);
  };
  const handleMinMaxTypeChange = (event) => {
    setMinMaxType(event.target.value);
  };
  const handleStrategyTypeChange = (type) => {
    setStrategyType(type);
  };

  const myStrategies = [
    {
      label: "Profit Margin",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      isCurrentStrategy: true,
      strategyType: "built-in",
      numberOfProducts: 33,
      numberOfSkus: 1,
      children: null,
    },
    {
      label: "Built-In 1",
      isCurrentStrategy: false,
      strategyType: "built-in",
      numberOfProducts: 1,
      numberOfSkus: 2,
      children: null,
    },
    {
      label: "Built-In 2",
      isCurrentStrategy: false,
      strategyType: "built-in",
      numberOfProducts: 33,
      numberOfSkus: 33,
      children: null,
    },
    {
      label: "winORlose",
      isCurrentStrategy: false,
      strategyType: "user-created",
      numberOfProducts: 33,
      numberOfSkus: 65,
      children: null,
    },
    {
      label: "this is veeeeeery loooooong strategy name",
      isCurrentStrategy: false,
      strategyType: "user-created",
      numberOfProducts: 33,
      numberOfSkus: 33,
      children: null,
    },
  ];

  const predefinedStrategies = [
    {
      label: "MadMax",
      isAi: true,
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      children: <NoContent />,
    },
    {
      label: "Slow and Steady",
      isAi: true,
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      children: null,
    },
    {
      label: "Buy Box Strategy",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      children: null,
    },
    {
      label: "Low Price Strategy",
      hintText:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      children: <NoContent />,
    },
  ];

  const adjustMinMaxPrice = [
    {
      label: "Manual",
      labelDescription: "Manual",
      hintText:
        "You'll have to manually specify the minimum and maximum prices for each listing under the Catalogs page.",
      children: <NoContent />,
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
      setNumberOfSkus(strategy.numberOfSkus);
    }
  }, []);

  return (
    <TemporaryDrawer hideBottomBorder open={open} onClose={onClose}>
      <MainContainer>
        <IconButton
          //disableRipple
          sx={{ position: "absolute", top: "0px", right: "0px" }}
          aria-label="close"
          onClick={onClose}
        >
          <CloseRoundedIcon sx={{ color: "#fff" }} />
        </IconButton>
        <HeaderBox style={{ marginBottom: "40px" }}>
          <FastStrategyHeader>Change or Create a New Strategy</FastStrategyHeader>
        </HeaderBox>

        <FastStrategyContent>
          <Column>
            <Container disableGutters>
              <Box marginBottom="20px" component="main">
                <Stack spacing="24px" alignItems="center">
                  <Stack>
                    <Stack direction="row" gap="10px" alignItems="center" justifyContent="center" marginBottom="16px">
                      <IconRoundBox style={{ background: "#009c34" }}>
                        <PointedLightbulbIcon />
                      </IconRoundBox>
                      <HeadingPrimary style={{ color: "#009c34" }}>Change Strategies</HeadingPrimary>
                    </Stack>
                    <StrategyCaption>Change your Strategies</StrategyCaption>
                  </Stack>

                  <BoldDivider />
                </Stack>
              </Box>

              <Strategies style={{ marginBottom: "32px" }}>
                {myStrategies.map((myStrategy, index) => (
                  <ExpandableStrategyItem
                    key={index}
                    clamp
                    value={myStrategy.label}
                    label={myStrategy.label}
                    hintText={myStrategy.hintText}
                    children={myStrategy.children}
                    isContentWithin={myStrategy.children}
                    onChange={(e) => {
                      handleStrategyChange(e);
                      handleStrategyTypeChange("my");
                      handleNumberOfSkusChange(myStrategy.numberOfSkus);
                    }}
                    currentStrategy={myStrategy.isCurrentStrategy}
                    strategyType={myStrategy.strategyType === "built-in" ? "#E5F6FF" : "#DFF1E7"}
                    numberOfProducts={myStrategy.numberOfProducts}
                    checked={selectedStrategy === myStrategy.label}
                    onEditStrategyButtonClick={() => handleFlowChange("edit")}
                  />
                ))}
              </Strategies>

              <Legend>
                <Stack direction="row" gap="5px" alignItems="center" component="li" padding={0}>
                  <LegendPoint color="#E5F6FF" />
                  <LegendPointText>- Built-in Sales.Support Strategies</LegendPointText>
                </Stack>

                <Stack direction="row" gap="5px" alignItems="center" component="li" padding={0}>
                  <LegendPoint color="#DFF1E7" />
                  <LegendPointText>- User-Created Strategies</LegendPointText>
                </Stack>
              </Legend>
            </Container>
          </Column>

          <Column>
            <Container disableGutters>
              <Box marginBottom="20px" component="main">
                <Stack spacing="24px" alignItems="center">
                  <Stack>
                    <Stack direction="row" gap="10px" alignItems="center" justifyContent="center" marginBottom="16px">
                      <IconRoundBox style={{ background: "#00A3FF" }}>
                        <SpinningGearIcon />
                      </IconRoundBox>
                      <HeadingPrimary style={{ color: "#00A3FF" }}>Create Strategy</HeadingPrimary>
                    </Stack>
                    <StrategyCaption>Pick the type of Strategy</StrategyCaption>
                  </Stack>

                  <BoldDivider />
                </Stack>
              </Box>

              {flow === "edit" || strategyType === "new" ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box marginBottom="10px">
                      <IconButtonStretched
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.whiteRoundedOutlined}
                        buttonText="Clear Settings"
                        buttonImage={deleteIcon}
                        noAnimations
                        bold
                      >
                        <Ripple color="#1565d8" />
                      </IconButtonStretched>
                    </Box>
                  </motion.div>
                </AnimatePresence>
              ) : null}

              <Strategies style={{ background: "#00a3ff0d" }}>
                <ParentAccordion summary="Strategy profile options" label={flow === "edit" ? `Buy Box\nStrategy` : ""}>
                  <Stack spacing="4px">
                    {predefinedStrategies.map((strategy, index) => (
                      <ExpandableStrategyItem
                        key={index}
                        value={strategy.label}
                        label={strategy.label}
                        aiStrategy={strategy.isAi}
                        hintText={strategy.hintText}
                        children={strategy.children}
                        isContentWithin={strategy.children}
                        onChange={(e) => {
                          handleStrategyChange(e);
                          handleStrategyTypeChange("new");
                          handleFlowChange("create");
                        }}
                        checked={selectedStrategy === strategy.label}
                        disableEdit
                      />
                    ))}
                  </Stack>
                </ParentAccordion>

                <Divider sx={{ borderColor: "#00A3FF", marginBlock: "10px" }} flexItem />

                <ParentAccordion summary="Price Settings" label={flow === "edit" ? "ROI" : ""}>
                  <Stack spacing="4px">
                    {adjustMinMaxPrice.map((type, index) => (
                      <ExpandableStrategyItem
                        key={index}
                        value={type.label}
                        label={type.label}
                        hintText={type.hintText}
                        labelDescription={type.labelDescription}
                        children={type.children}
                        isContentWithin={type.children}
                        onChange={handleMinMaxTypeChange}
                        checked={minMaxType === type.label}
                        disableEdit
                      />
                    ))}
                  </Stack>
                </ParentAccordion>

                <Divider sx={{ borderColor: "#00A3FF", marginBlock: "10px" }} flexItem />

                <ParentAccordion summary="Rule Base" label={flow === "edit" ? `Edit` : ""}>
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
                </ParentAccordion>
              </Strategies>
            </Container>
          </Column>
        </FastStrategyContent>

        {strategyType === "my" && activeStrategy !== selectedStrategy ? (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MyStrategyInfo numberOfSkus={numberOfSkus} />
            </motion.div>
          </AnimatePresence>
        ) : null}

        <Stack direction="row" gap="16px" marginTop="40px">
          <StyledButtonWhite variant="outlined" onClick={() => handleSaveClick()}>
            Save as new Strategy
          </StyledButtonWhite>
          <StyledButtonBlue variant="contained">Assign to SKU</StyledButtonBlue>
        </Stack>

        <ApplyStrategyModal
          position="top-right"
          open={isApplyStrategyModalOpen}
          onClose={handleApplyStrategyModalClose}
        />

        <SaveStrategyModal
          position="top-right"
          mode={flow}
          open={isSaveStrategyModalOpen}
          onClose={handleSaveStrategyModalClose}
        />
      </MainContainer>
    </TemporaryDrawer>
  );
};

export default FastStrategy;
