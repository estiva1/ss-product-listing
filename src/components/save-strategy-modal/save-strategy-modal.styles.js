import styled, { css } from "styled-components";
import { Button } from "@mui/material";

export const SaveStrategyModalContainer = styled.div`
  max-width: 360px;
  padding: 24px 16px 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const PrimaryText = styled.h3`
  display: inline-flex;
  white-space: pre-wrap;
  color: #4e5969;
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;

const applyFontStylingForBtn = () => {
  return css`
    padding: 8px 24px;
    text-transform: none;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
  `;
};

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    ${applyFontStylingForBtn}
  }
  &.MuiButton-contained {
    background: #0057d3;
  }
  &.MuiButton-text {
    color: #1565d8;
  }
`;

export const IconWaves = styled.span`
  position: relative;
  min-width: 80px;
  min-height: 76px;
  width: 80px;
  height: 76px;
  background-size: cover;
  background-repeat: no-repeat;
  animation: rotate 4s linear infinite;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='80' height='76' fill='none'%3e%3cpath fill='%230FB600' fill-opacity='.15' d='m76.65 44.711-.024.012a8.41 8.41 0 0 0-3.002 9.11l.011.023c1.597 5.332-2.358 10.71-7.981 10.851h-.024c-3.55.094-6.671 2.33-7.85 5.638v.011c-1.883 5.25-8.291 7.31-12.926 4.143-2.877-1.941-6.681-2.042-9.709 0h-.011C30.5 77.653 24.09 75.605 22.22 70.345c-1.19-3.316-4.306-5.544-7.85-5.638h-.024c-5.623-.141-9.578-5.52-7.982-10.851l.012-.024a8.41 8.41 0 0 0-3.002-9.11l-.024-.01a8.391 8.391 0 0 1 0-13.418l.024-.012c2.812-2.13 4.003-5.755 2.99-9.109v-.024c-1.608-5.33 2.36-10.71 7.982-10.85h.024c3.538-.095 6.67-2.331 7.85-5.638v-.012C24.09.4 30.5-1.66 35.134 1.506h.011a8.645 8.645 0 0 0 9.71 0C49.534-1.687 55.907.431 57.78 5.65v.012c1.179 3.295 4.3 5.543 7.85 5.637h.024c5.623.141 9.578 5.52 7.981 10.851l-.011.024a8.41 8.41 0 0 0 3.002 9.11l.023.011a8.391 8.391 0 0 1 0 13.417Z'/%3e%3c/svg%3e");

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const CompletedIconContainer = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 44px;
  height: 44px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0fb600;
  border-radius: 50%;
  animation: rotate 4s linear infinite;
  animation-direction: reverse;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const AnimatedCheck = styled.svg`
  height: 10em;
  width: 10em;

  > path {
    fill: none;
    background: none;
    stroke: #fff;
    stroke-width: 4;
    stroke-dasharray: 23;
    stroke-dashoffset: 23;
    animation: draw 1s linear forwards;
    animation-delay: 0.5s;
    stroke-linecap: round;
    stroke-linejoin: round;

    @keyframes draw {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`;

export const CloseIconBox = styled.span`
  position: absolute;
  top: 10px;
  right: 4px;
`;
