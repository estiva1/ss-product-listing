import styled, { css } from "styled-components";
import { Button } from "@mui/material";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  background-color: #3bb7ff;
`;

export const HeaderBox = styled.div`
  display: flex;
  border-radius: 10px;
  padding-block: 24px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background-color: #fff;
`;

export const FastStrategyContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  min-width: 435px;
  width: 435px;
  height: max-content;
  max-height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #fff;
`;

export const Strategies = styled.div`
  display: flex;
  padding: 20px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  border: 1px solid #e6e6e6;
  background: #f8fafb;
`;

export const Legend = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: 20px;
  gap: 16px;
  border-radius: 20px;
  border: 1px solid #00a3ff;
  margin: 0;
`;

export const LegendPoint = styled.span`
  width: 64px;
  height: 16px;
  border-radius: 30px;
  background: ${({ color }) => color};
`;

export const LegendPointText = styled.span`
  color: #4e5969;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Titillium Web;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
`;

export const BoldDivider = styled.span`
  display: block;
  margin-inline: auto;
  width: 130px;
  height: 4px;
  border-radius: 2px;
  background-color: #00a3ff;
`;

export const IconRoundBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c4c4c4;
  min-width: 40px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  transition: background 0.5s ease-in-out;
`;

const applyFontStylingForNavBtn = () => {
  return css`
    min-width: max-content;
    height: 80px;
    border-radius: 8px;
    font-family: Titillium Web;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    text-transform: none;
    flex: 1;
  `;
};

export const StyledButtonBlue = styled(Button)`
  &.MuiButtonBase-root {
    ${applyFontStylingForNavBtn}
  }
  &.MuiButton-contained {
    color: #fff;
    background-color: #1565d8;
  }
`;

export const StyledButtonWhite = styled(Button)`
  &.MuiButtonBase-root {
    ${applyFontStylingForNavBtn}
  }
  &.MuiButton-outlined {
    color: #1565d8;
    background-color: #fff;
    border: 2px solid #1565d8;
    &:hover {
      background-color: #fff;
      border: 2px solid #1565d8;
    }
  }
`;

export const FastStrategyHeader = styled.h2`
  color: #1565d8;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
  margin: 0;
`;

export const Label = styled.label`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 0.00375rem;
`;

export const RuleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const HeadingPrimary = styled.h2`
  color: #000;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
  margin: 0;
  //transition: color 0.5s ease-in-out;
`;

export const StrategyCaption = styled.span`
  color: #000;
  text-align: center;
  font-family: Titillium Web;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;

const applyStylesForIcon = () => {
  return css`
    min-width: 24px;
    min-height: 24px;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-repeat: no-repeat;
  `;
};

export const PointedLightbulbIcon = styled.span`
  ${applyStylesForIcon}
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%23fff' d='M16.7751 1.8293V.75a.3281.3281 0 1 1 .6562 0v1.0792a.3281.3281 0 0 1-.6562 0Zm-2.9656.9704a.328.328 0 1 0 .5683-.3281l-.5396-.9346a.3282.3282 0 0 0-.5683.3281l.5396.9346Zm-3.0176 1.7836.9346.5396a.3281.3281 0 1 0 .3282-.5683l-.9347-.5397a.3282.3282 0 0 0-.3281.5684Zm10.0244-3.1665a.3284.3284 0 0 0-.4483.12l-.5396.9347a.3282.3282 0 0 0 .5683.328l.5397-.9345a.3281.3281 0 0 0-.1201-.4482Zm2.7182 2.7182a.3282.3282 0 0 0-.4482-.12l-.9346.5395a.328.328 0 1 0 .3281.5684l.9346-.5396a.3282.3282 0 0 0 .1201-.4483ZM20.7881 7.16c0 1.027-.3229 1.5266-.6648 2.0557-.3305.5115-.7019 1.0869-.8446 2.3676.3286.1287.5623.4482.5623.8219v1.1977c0 .4869-.3961.883-.8831.883h-.2423v.2283c0 .4696-.382.8517-.8516.8517h-1.5218c-.4696 0-.8516-.3821-.8516-.8517v-.2283h-.2423c-.487 0-.8831-.3961-.8831-.883v-1.1977c0-.3737.2337-.6932.5622-.8219-.1425-1.2807-.514-1.8561-.8445-2.3676-.3419-.529-.6648-1.0288-.6648-2.0556 0-2.032 1.6531-3.685 3.685-3.685 2.0318 0 3.685 1.6531 3.685 3.685Zm-1.6033 5.2452a.227.227 0 0 0-.2268-.2268h-3.7097a.227.227 0 0 0-.2268.2268v1.1977c0 .1229.1039.2268.2268.2268h.5704a.3282.3282 0 0 1 .3282.3281v.5564c0 .1059.0894.1954.1954.1954h1.5217c.106 0 .1954-.0895.1954-.1954v-.5564a.3281.3281 0 0 1 .3281-.3281h.5705c.1229 0 .2268-.1039.2268-.2268v-1.1977Zm.947-5.2451c0-1.67-1.3586-3.0287-3.0286-3.0287S14.0745 5.49 14.0745 7.1601c0 .8332.247 1.2155.5597 1.6994.3534.547.7878 1.2194.9469 2.6626h1.194V7.9743l-1.2755-.7364a.3282.3282 0 0 1 .3281-.5683l1.2755.7364 1.2754-.7364a.3281.3281 0 0 1 .3281.5683l-1.2754.7364v3.5478h1.194c.159-1.4431.5934-2.1155.9468-2.6625.3127-.484.5597-.8662.5597-1.6995Zm-6.5206 2.8672c.1974.3424.2493.7424.1462 1.1262-.103.3839-.3484.704-.6908.9014l-4.2973 2.4749c.2742.1267.4994.3299.6487.5889.1974.3424.2493.7422.1464 1.126a1.5174 1.5174 0 0 1-.0494.1518 1.502 1.502 0 0 1 .1575.0334c.3838.103.7039.3483.9013.6908.1977.3427.2495.7431.1461 1.1272a1.5322 1.5322 0 0 1-.049.1502 1.547 1.547 0 0 1 .1568.0333c.384.1029.7043.3483.9017.6909.1975.3423.2494.7422.1464 1.1261-.1031.3839-.3485.7041-.6909.9014l-2.995 1.7609c-.7686.4409-1.6378.6668-2.5103.6668a5.006 5.006 0 0 1-1.4392-.2106c-1.2866-.3865-2.3307-1.2656-2.9397-2.4754-1.1228-2.2304-.9592-3.1638-.662-4.8583.0994-.5674.2122-1.2104.2977-2.0285.096-.919.8918-1.598 1.8107-1.5472.878.0491 1.2533.6523 1.4482 1.2919l7.3882-4.2666c.3426-.1975.7424-.2494 1.1265-.1463.3837.1031.7038.3485.9012.6908Zm-.5686.3278a.8224.8224 0 0 0-.5029-.3848.8218.8218 0 0 0-.6282.081l-7.765 4.484a.3279.3279 0 0 1-.4854-.2181c-.2211-1.0756-.5758-1.1836-.9506-1.2045a1.018 1.018 0 0 0-.0604-.0017c-.5433 0-1.0035.4118-1.061.9619-.0878.8408-.2027 1.4958-.304 2.0737-.2818 1.607-.4232 2.4136.6019 4.4499.5272 1.0472 1.43 1.8079 2.5423 2.142 1.1438.3434 2.3944.1995 3.431-.3952l2.9946-1.7606a.824.824 0 0 0 .3872-.5044.8225.8225 0 0 0-.081-.6282.8214.8214 0 0 0-.5031-.3848.8207.8207 0 0 0-.6288.0822.3281.3281 0 0 1-.3277-.5686l.0031-.0018a.819.819 0 0 0 .3817-.4999.822.822 0 0 0-.0809-.6287.8215.8215 0 0 0-.503-.3847.8206.8206 0 0 0-.6261.0803l-.0027.0015a.3281.3281 0 0 1-.3278-.5685l.0006-.0004a.8192.8192 0 0 0 .3842-.5021.8229.8229 0 0 0-.081-.6282c-.1055-.1829-.2842-.3157-.5031-.3739-.2241-.0595-.4623-.0311-.655.0781l-.0106.0061a.3281.3281 0 0 1-.3292-.5677l.0138-.008 5.3735-3.0947a.8214.8214 0 0 0 .3846-.503.8217.8217 0 0 0-.081-.6282Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;

export const SpinningGearIcon = styled.span`
  ${applyStylesForIcon}
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg fill='%23fff' clip-path='url(%23a)'%3e%3cpath d='M23.762 12.442a.703.703 0 0 0-.992.062l-.011.013v-.493c0-2.874-1.12-5.575-3.152-7.607A10.688 10.688 0 0 0 12 1.266c-1.736 0-3.46.423-4.988 1.224A10.848 10.848 0 0 0 3.26 5.75a.703.703 0 1 0 1.142.82 9.435 9.435 0 0 1 3.263-2.835A9.372 9.372 0 0 1 12 2.672c5.157 0 9.352 4.195 9.352 9.352v.493l-.011-.013a.703.703 0 1 0-1.054.931l1.241 1.405a.703.703 0 0 0 1.054 0l1.242-1.405a.703.703 0 0 0-.062-.993Zm-3.182 4.873a.703.703 0 0 0-.982.16 9.437 9.437 0 0 1-3.263 2.835A9.371 9.371 0 0 1 12 21.373c-5.157 0-9.352-4.195-9.352-9.352v-.493l.011.013a.703.703 0 1 0 1.054-.931L2.472 9.204a.704.704 0 0 0-1.054 0L.176 10.61a.703.703 0 1 0 1.054.931l.011-.013v.493c0 2.874 1.12 5.575 3.152 7.607A10.687 10.687 0 0 0 12 22.78c1.736 0 3.46-.423 4.988-1.224a10.852 10.852 0 0 0 3.752-3.26.703.703 0 0 0-.16-.98Z'/%3e%3cpath d='M6.02 13.523a.58.58 0 0 0 .061.45l1.213 2.054a.618.618 0 0 0 .828.217l.891-.503c.356.272.75.495 1.168.66v1.006a.6.6 0 0 0 .607.593h2.425a.6.6 0 0 0 .606-.593v-1.005c.417-.166.812-.39 1.168-.661l.891.503c.14.079.305.1.46.06a.604.604 0 0 0 .368-.277l1.213-2.054a.582.582 0 0 0-.222-.81l-.893-.504a4.682 4.682 0 0 0-.002-1.317l.895-.505a.583.583 0 0 0 .222-.81l-1.213-2.054a.614.614 0 0 0-.828-.217l-.897.507a4.914 4.914 0 0 0-1.162-.657V6.593A.6.6 0 0 0 13.212 6h-2.424a.6.6 0 0 0-.607.593v1.013a4.914 4.914 0 0 0-1.162.657l-.897-.507a.614.614 0 0 0-.828.217L6.08 10.027a.582.582 0 0 0 .222.81l.895.505a4.661 4.661 0 0 0-.002 1.317l-.893.504a.595.595 0 0 0-.282.36ZM12 10.225c1.004 0 1.819.797 1.819 1.779 0 .982-.815 1.779-1.819 1.779-1.005 0-1.819-.797-1.819-1.78 0-.981.815-1.778 1.82-1.778Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;
