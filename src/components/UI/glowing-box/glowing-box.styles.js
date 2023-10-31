import styled from "styled-components";

export const GlowingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #fff;
  box-shadow: ${(props) => (props.disableGlow ? "1px 1px 2px 1px" : "4px 4px 25px 0px")} rgba(111, 213, 246, 0.25);
  overflow: hidden;
`;

export const LabelContainer = styled.div`
  padding: 8px 20px;
  background-color: #f1fbfe;
`;

export const Content = styled.div`
  padding: 24px 20px 40px 20px;
  background-color: #fff;
`;

export const Label = styled.h3`
  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0;
`;
