import { Popover } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 24px;
  background-color: #f8fafb;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const HeaderText = styled.h1`
  color: #000;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.0625rem;
  margin: 0;
`;

export const Options = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  align-items: center;
`;

export const StyledPopover = styled(Popover)`
  .MuiPaper-root {
    min-width: 24px;
    min-height: 24px;
    padding: 16px 12px;
    border: 1px solid #1565d8;
    border-radius: 4px;
  }
`;
