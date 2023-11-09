import { Accordion, FormControlLabel } from "@mui/material";
import styled, { css } from "styled-components";

export const StyledAccordion = styled(Accordion)`
  background-color: inherit !important;
  border: none !important;
  //border: 1px solid black;
  border-radius: 0 !important;
  box-shadow: none !important;
  transition: all ease-in-out !important;

  &.MuiPaper-root {
    &::before {
      content: none;
    }
  }
  .MuiAccordionSummary-root {
    padding-inline: 0;
    min-height: 0px;
    .MuiAccordionSummary-content {
      margin: 0;
    }
  }
  .MuiAccordionDetails-root {
    padding: 0;
  }
  // this actually causes small "jump" of transition animation at the end of collapsion
  /* .MuiCollapse-root {
    transition-delay: 0.15s;
  } */
`;

export const HintTextContainer = styled.div`
  padding: 12px 16px;
  background-color: ${({disabled}) => (disabled ? "#E6E6E6" : "#f9f0e2")};
  border-radius: 30px;
  border-top-right-radius: 0;
  transition: background-color 0.2s ease-in-out;
`;

export const HintText = styled.span`
  color: #4E5969;
  display: inline-flex;
  white-space: pre-wrap;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  vertical-align: middle;
  margin: 0;
`;

const applyClampStyles = (props) => {
  if (props.clamp) {
    return css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    `;
  }
  return "";
};

export const BpIcon = styled.span`
  border-radius: 50%;
  width: 32;
  height: 32;
  box-shadow: 0px 0px 0px 2px inset #1565d8 !important;
  background-color: #fff;

  input {
    &:hover ~ & {
      background-color: #ebf1f5;
    }
  }
  input:disabled ~ & {
    box-shadow: none;
    background: rgba(206, 217, 224, 0.5);
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    .MuiButtonBase-root {
      //padding: 0px 16px;
    }
    .MuiTypography-root {
      color: #000;
      font-family: Titillium Web;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;
      margin: 0;
    }
  }
`;

export const Label = styled.h3`
  ${applyClampStyles};
  color: ${({disabled}) => (disabled ? "#4E5969" : "#000")};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0;
  user-select: none;
  transition: color 0.5s ease-in-out;
`;

export const Description = styled.label`
  color: #c4c4c4;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  user-select: none;
  margin: 0;
`;

export const DescriptionHighlighted = styled(Description)`
  color: #00a3ff;
`;

export const HintCircleContainer = styled.div`
  display: flex;
  min-width: 32px;
  width: 32px;
  height: ${({hintExpanded}) => (hintExpanded ? "36px" : "32px")};
  padding-top: 8px;
  //align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${({ hintExpanded }) =>
    hintExpanded &&
    `
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  `}
  background-color: ${({disabled}) => (disabled ? "#E6E6E6" : "#f9f0e2")};
  transition: all 0.2s ease-out;
  cursor: ${({disabled}) => (disabled ? "arrow" : "pointer")};

  &:hover {
    transition: all 0.2s ease-out;
    transition-delay: ${({hintExpanded}) => (hintExpanded ? "0s" : "0.25s")};
  }
`;

export const LightBulbIcon = styled.span`
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg fill='${(props) => props.disabled ? "%23888" : "%23F90"}' clip-path='url(%23a)'%3e%3cpath d='M17.533 11.3336c-.3127-2.5514-2.3263-4.56-4.8785-4.8662a5.8466 5.8466 0 0 0-.6619-.0377c-2.2556.0035-4.2865 1.3666-5.1442 3.4527-.8577 2.086-.373 4.4835 1.2278 6.0725a4.3878 4.3878 0 0 1 1.3527 3.1172v.6437h5.1428v-.647a4.2911 4.2911 0 0 1 1.3046-3.0668 5.5533 5.5533 0 0 0 1.6567-4.6682v-.0002Zm-5.5317 12.6642a1.2879 1.2879 0 0 0 1.2123-.8572h-2.4245a1.2876 1.2876 0 0 0 1.2122.8572ZM9.8594 21.856a.4292.4292 0 0 0 .4286.4286h3.4285a.4291.4291 0 0 0 .4286-.4286v-1.2857H9.8594v1.2857Zm2.1384-17.9988A.8571.8571 0 0 0 12.8549 3V.8572a.8572.8572 0 0 0-1.7143 0V3c0 .4734.3838.8572.8572.8572ZM4.7662 5.9784a.8776.8776 0 0 0 1.2123 0 .857.857 0 0 0 0-1.2122l-1.5153-1.515a.8568.8568 0 0 0-1.212 0 .8568.8568 0 0 0 0 1.212l1.515 1.5152Zm-.909 6.0194A.8572.8572 0 0 0 3 11.1406H.8572A.858.858 0 0 0 0 11.9978a.858.858 0 0 0 .8572.8571H3a.8571.8571 0 0 0 .8572-.8571Zm19.2834-.8572h-2.1428a.8572.8572 0 0 0 0 1.7143h2.1428a.8571.8571 0 1 0 0-1.7143ZM19.233 5.9784l1.515-1.5153a.857.857 0 1 0-1.2121-1.212l-1.5153 1.515a.8575.8575 0 0 0 0 1.2123.8777.8777 0 0 0 1.2124 0Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  transition: background-image 0.5s ease-in-out;
`;
