import styled from "styled-components";

export const StyledStrategyButton = styled.button`
  border: none;
  display: flex;
  width: 280px;
  padding: 30px 20px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: inset 0px 0px 0px 1px #00a3ff, 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background: #f1fbfe;
    box-shadow: inset 0px 0px 0px 2px #00a3ff;
    transition: all 0.2s ease-out;
  }

  &:focus {
    border: none;
    outline: 0;
    box-shadow: inset 0px 0px 0px 2px #00a3ff;
  }
`;

export const ButtonText = styled.h3`
  color: #000;
  font-family: Titillium Web;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0;
`;
