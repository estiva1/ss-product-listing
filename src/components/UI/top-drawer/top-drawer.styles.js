import styled from "styled-components";
import { Drawer } from "@mui/material";

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    border-radius: 0px 0px 30px 30px;
    border-bottom: 1px solid #00a3ff;
    box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
    //styled scrollbar
    &::-webkit-scrollbar {
      width: 0.5em;
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
  }

  & > .MuiBackdrop-root {
    backdrop-filter: blur(5px);
    background-color: rgb(8, 40, 85, 0.3);
  }
`;
