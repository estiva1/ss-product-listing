import styled from "styled-components";
import { Box, Modal } from "@mui/material";

export const StyledModal = styled(Modal)`
  & > .MuiBackdrop-root {
    backdrop-filter: blur(5px);
    background-color: rgb(8, 40, 85, 0.3);
  }
`;

export const ModalContent = styled(Box)`
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 16px;
  ${({ position }) =>
    position === "top-right" &&
    `
    top: 0;
    right: 0;
    left: unset;
    margin: 0;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border: 1px solid #00A3FF;
  `}
  background-color: #fff;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
  min-width: 50px;
  min-height: 50px;
  width: max-content;
  height: max-content;
  max-height: 96vh;
  padding: 24px 24px 24px 30px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.4em;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    &:hover {
      background-color: hsl(0, 0%, 81.2%);
    }
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: hsl(0, 0%, 81.2%);
  }
`;
