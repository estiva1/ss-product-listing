import styled from "styled-components";
import { Stack } from "@mui/material";

export const ItemImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
`;

export const ItemImage = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
`;

export const ItemInfo = styled(Stack)`
  gap: 20px;
`;

export const HeadingPrimary = styled.h3`
  color: #000;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
`;

export const PrimaryText = styled.h4`
  color: #4e5969;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

export const PrimaryTextBold = styled(PrimaryText)`
  font-weight: 600;
`;

export const Label = styled.label`
  color: #4e5969;
  text-align: center;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
`;
