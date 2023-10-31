import styled from "styled-components";

export const StyledThumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px;
  border: 1px solid #c4c4c4;
  border-radius: 20px;
  width: max-content;
  max-width: max-content;
  background-color: #fff;
`;

export const ThumbnailText = styled.h4`
  color: #4e5969;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  text-transform: capitalize;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;

export const HintIcon = styled.span`
  min-width: 18px;
  min-height: 18px;
  width: 18px;
  height: 18px;
  cursor: help;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none'%3e%3cpath stroke='%234E5969' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.6' d='M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm0-4.8V9m0-3.2h.008'/%3e%3c/svg%3e")`};
`;
