import { styled } from "styled-components";

export const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  height: 24px;
`;

export const StyledInput = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 0px;
  height: 0px;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  //z-index: 1;
`;

export const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #fff;
  box-shadow: inset 0px 0px 0px 1px ${(props) => (props.isOn ? "#1565D8" : "#dadfe3")};
  transition: 0.4s ease;
  border-radius: 12px;
`;

export const StyledSliderButton = styled.span`
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  left: 4px;
  bottom: 4px;
  background-color: ${(props) => (props.isOn ? "#1565D8" : "#E6E6E6")};
  transition: 0.4s ease;
  border-radius: 50%;
  box-shadow: ${(props) => (props.isOn ? "-1px" : "1px")} 0px 3px 0 rgb(0 35 11 / 25%);
  transform: ${(props) => (props.isOn ? "translateX(100%)" : "translateX(0)")};
`;

export const SliderText = styled.h4`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  margin-left: ${(props) => (props.isOn ? "12px" : "28px")};
  color: #616980;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.03125rem;
  cursor: pointer;
  transition: 0.4s ease;
`;
