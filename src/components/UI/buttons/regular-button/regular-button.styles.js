import styled from "styled-components";

export const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation-name: ripple;
    animation-duration: ${(props) => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export const BlueButton = styled.button`
  position: relative;
  overflow: hidden;
  min-width: ${(props) => props.width};;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: 1px solid #1565d8;
  border-radius: 4px;
  color: #fff;
  background-color: #1565d8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const BlueButtonSmall = styled(BlueButton)`
  width: 64px;
  height: 42px;
  padding: 6px 8px;
  align-items: start;
  font-size: 0.75rem;
  line-height: 0.875rem;
  letter-spacing: 0.00375rem;

  &:hover {
    *:not(${RippleContainer}) {
      left: 60%;
      transition: left 0.3s ease;
    }
  }
`;

export const WhiteButton = styled(BlueButton)`
  color: #1565d8;
  background-color: #fff;
  border: 1px solid #1565d8;
`;

export const WhiteButtonSmall = styled(WhiteButton)`
  width: 64px;
  height: 42px;
  padding: 6px 8px;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.875rem;
  letter-spacing: 0.00375rem;
`;
