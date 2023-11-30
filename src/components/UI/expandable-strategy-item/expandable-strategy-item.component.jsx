import React, { useState } from "react";

import { Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

import IconButtonStretched, {
  BUTTON_TYPE_CLASSES,
  Ripple,
} from "../buttons/icon-button-stretched/icon-button-stretched.component";

import {
  AiIcon,
  Description,
  DescriptionHighlighted,
  HintCircleContainer,
  HintText,
  HintTextContainer,
  Label,
  LightBulbIcon,
  StrategyItemContainer,
  StyledAccordion,
} from "./expandable-strategy-item.styles";

import settingsBlueIcon from "../../../assets/settings-blue-icon.svg";

const BpIcon = styled("span")(() => ({
  borderRadius: "50%",
  width: 32,
  height: 32,
  boxShadow: "0px 0px 0px 2px inset #1565D8",
  backgroundColor: "#fff",
  transition: "all 0.5s ease-in-out",
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  position: "relative",
  backgroundColor: "#1565D8",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  transition: "all 0.5s ease-in-out",
  "&:before": {
    position: "absolute",
    display: "block",
    top: "50%",
    left: "50%",
    transform: " translateX(-50%) translateY(-50%)",
    width: 16,
    height: 12,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='12' fill='none'%3e%3cpath fill='%23fff' fill-rule='evenodd' d='M15.5314.47928c.6248.63904.6248 1.67513 0 2.31417L6.99804 11.5207c-.62484.6391-1.6379.6391-2.26274 0L.46863 7.15708c-.62484-.63904-.62484-1.67512 0-2.31416.62484-.63904 1.6379-.63904 2.26274 0l3.1353 3.20655L13.2686.47928c.6249-.63904 1.6379-.63904 2.2628 0Z' clip-rule='evenodd'/%3e%3c/svg%3e");`,
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#1565D8",
  },
});

const ExpandableStrategyItem = ({
  clamp,
  label = "",
  labelDescription = "",
  hintText = "No additional info available.",
  aiStrategy,
  strategyType,
  currentStrategy,
  numberOfProducts = 0,
  isContentWithin,
  disableEdit,
  onEditStrategyButtonClick,
  children,
  ...props
}) => {
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const [hintExpanded, setHintExpanded] = useState(false);

  const toggleAcordion = () => {
    setAccordionExpanded((prev) => !prev);
  };
  const toggleHint = () => {
    setHintExpanded((prev) => !prev);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <StrategyItemContainer color={strategyType}>
      <Stack direction="row" alignItems="center" alignSelf="stretch" justifyContent="space-between">
        <Stack
          sx={{ cursor: "pointer", mt: "2px", mb: "2px" }}
          direction="row"
          alignItems="center"
          gap="14px"
          onClick={toggleAcordion}
        >
          <Radio
            name="styled-radio-button"
            sx={{ p: 0 }}
            disableRipple
            color="default"
            checkedIcon={<BpCheckedIcon />}
            icon={<BpIcon />}
            onClick={handleClick}
            {...props}
          />
          <Stack direction="row" alignItems="baseline" gap="10px">
            <Stack maxWidth="172px" direction="row" alignItems="center" gap="6px">
              <AiIcon style={{ display: aiStrategy ? "block" : "none" }} />
              <Label $clamp={clamp} $currentStrategy={currentStrategy} $aiStrategy={aiStrategy}>
                {label}
              </Label>
            </Stack>
            <Description style={{ color: "#4E5969", letterSpacing: "0.00375rem" }}>{labelDescription}</Description>
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" gap="8px">
          {disableEdit ? (
            <Description
              style={{
                color: "#f90",
                whiteSpace: "pre-wrap",
                textAlign: "right",
                fontWeight: "400",
                lineHeight: "0.75rem",
              }}
            >
              {`See\nmore`}
            </Description>
          ) : (
            <IconButtonStretched
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.transparentBlue}
              buttonText="Edit"
              buttonImage={settingsBlueIcon}
              bold
              onClick={onEditStrategyButtonClick}
            >
              <Ripple color="#1565d8" />
            </IconButtonStretched>
          )}

          <HintCircleContainer $hintExpanded={hintExpanded} onClick={toggleHint}>
            <LightBulbIcon />
          </HintCircleContainer>
        </Stack>
      </Stack>

      <StyledAccordion expanded={hintExpanded} disableGutters elevation={0} square>
        <MuiAccordionSummary></MuiAccordionSummary>
        <MuiAccordionDetails>
          <HintTextContainer>
            <HintText>{hintText}</HintText>
          </HintTextContainer>
        </MuiAccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={accordionExpanded} disableGutters elevation={0} square>
        <MuiAccordionSummary></MuiAccordionSummary>
        <MuiAccordionDetails
          sx={{ ml: "30px", mt: accordionExpanded ? (isContentWithin ? "10px" : 0) : 0, transition: "all 0.35s ease" }}
        >
          {children}
        </MuiAccordionDetails>
      </StyledAccordion>

      <Stack sx={{ display: currentStrategy ? "flex" : "none" }} marginLeft="48px">
        <Description>{`(Your Current Strategy)`}</Description>
        <DescriptionHighlighted>
          {`This strategy is assigned to ${numberOfProducts} ${numberOfProducts > 1 ? "products" : "product"}`}
        </DescriptionHighlighted>
      </Stack>
    </StrategyItemContainer>
  );
};

export default ExpandableStrategyItem;
