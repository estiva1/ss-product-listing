import styled from "styled-components";

export const GlowingBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #fff;
  box-shadow: ${(props) => (props.$disableGlow ? "1px 1px 2px 1px" : "4px 4px 25px 0px")} rgba(111, 213, 246, 0.25);
  overflow: hidden;
`;

export const LabelContainer = styled.div`
  padding: 8px 20px;
  background-color: #f1fbfe;
`;

export const DescriptionContainer = styled.div`
  padding: 16px 20px;
  background-color: #fff;
`;

export const Label = styled.h3`
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
  margin: 0;
`;

export const Description = styled.h4`
  color: #4e5969;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.75rem;
  margin: 0;
`;
