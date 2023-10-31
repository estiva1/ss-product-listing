import styled from "styled-components";
import { Container } from "@mui/material";

export const StyledUploadContainer = styled(Container)`
  border: 1px dashed #6fd5f6;
  border-radius: 8px;
  padding-top: 18px;
  padding-bottom: 18px;
  max-width: 450px !important;
`;

export const PrimaryText = styled.h3`
  color: #000;
  text-align: center;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0;
`;

export const TooltipTop = styled.h4`
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const TooltipBottom = styled.h4`
  color: #00a3ff;
  text-align: center;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: 0.00375rem;
  margin: 0;
`;

export const CloudUploading = styled.span`
  min-width: 120px;
  min-height: 120px;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%236FD5F6' d='M106.2 40.3A33.6 33.6 0 0 0 45.28 15a24.42 24.42 0 0 0-30.06 23.74c0 .36.05.7.05 1.02a21.9 21.9 0 0 0 5.07 42.73c.52.04 1.04.04 1.59.04H98.1a21.9 21.9 0 0 0 8.1-42.22Z'/%3e%3cpath fill='%23C4C4C4' d='m19.5 98.05 21.95 21.94L63.4 98.05H52.88V68.22H30.04v29.83H19.5Zm80.97-36.59L78.53 39.52 56.59 61.46h10.5V91.3h22.84V61.46h10.54Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h120v120H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;

export const CloudUploaded = styled.span`
  min-width: 120px;
  min-height: 120px;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='120' height='121' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%236FD5F6' d='M106.2 40.8a33.6 33.6 0 0 0-60.93-25.3 24.42 24.42 0 0 0-30.06 23.74c0 .36.05.7.05 1.02A21.9 21.9 0 0 0 20.33 83c.52.04 1.04.04 1.59.04H98.1a21.9 21.9 0 0 0 8.1-42.22Z'/%3e%3cpath fill='%2300AD3A' d='M67.79 105 100 83.01 67.79 61v10.56H24v22.88h43.79V105Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 .5h120v120H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;
