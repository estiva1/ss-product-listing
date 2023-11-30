import { styled } from "styled-components";

export const RippleContainer = styled.div`
  position: absolute;
  inset: 0;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${({ color }) => color};
    animation-name: ripple;
    animation-duration: ${({ $duration }) => $duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export const ButtonImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
  transition: ${({ $noAnimations }) => ($noAnimations ? "none" : "transform 1s ease-in-out")};
`;

export const BaseButton = styled.button`
  position: relative;
  overflow: hidden;
  min-width: max-content;
  padding: 8px;
  border: 1px solid #1565d8;
  border-radius: 4px;
  font-family: Titillium Web;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.15);

    & ${ButtonImage} {
      transform: rotate(360deg);
    }
  }
`;

export const BlueFilledButton = styled(BaseButton)`
  color: #fff;
  background-color: #1565d8;
`;

export const WhiteOutlinedButton = styled(BaseButton)`
  color: #1565d8;
  background-color: #fff;
`;

export const WhiteRoundedOutlinedButton = styled(WhiteOutlinedButton)`
  border-radius: 16px;
  width: 100%;
`;

export const TransparentBlueButton = styled(BaseButton)`
  color: #1565d8;
  background-color: transparent;
  border: none;
  box-shadow: none;
`;

export const ButtonText = styled.h3`
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: ${({ $bold }) => ($bold ? 600 : 400)};
  line-height: 1rem;
  letter-spacing: 0.01625rem;
  margin: 0;
`;
