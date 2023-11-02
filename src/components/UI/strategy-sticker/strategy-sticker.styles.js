import styled from "styled-components";
import Chip from "@mui/material/Chip";

export const StrategyStickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 290px;
  z-index: 50;
`;

export const TextContainer = styled.div`
  width: 290px;
  height: 90px;
  padding: 20px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid ${(props) => (props.disabled ? "#C4C4C4" : "#00a3ff")};
  background: ${(props) => (props.disabled ? "#F8FAFB" : "#fff")};
  transition: border ease-in-out 0.5s, background ease-in-out 0.5s;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StrategyStickerText = styled.h4`
  display: inline-flex;
  white-space: pre-wrap;
  color: ${(props) => (props.disabled ? "#4E5969" : "#000")};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
`;

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    border-radius: 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    min-width: 140px;
    background-color: ${(props) => props.backgroundColor};
    transition: all ease-in-out 0.5s
  }
  .MuiChip-label {
    color: #fff;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.125rem;
  }
`;
