import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
`;

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  margin: 0;
`;

export const PrimaryTextThin = styled(PrimaryText)`
  font-weight: 400;
`;

export const SecondaryText = styled.h4`
  color: #979797;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;
`;
