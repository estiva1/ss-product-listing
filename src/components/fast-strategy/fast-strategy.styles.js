import styled, { css } from "styled-components";
import { Button, Divider, FormLabel } from "@mui/material";

const dividerMinWidth = "10px";
const rowPadding = 20;
const rowWidth = 290;

const dividerWidth = `calc((100% - (${rowWidth}px * 4) - (${rowPadding}px * 2)) / 3)`;

export const FastStrategyContent = styled.div`
  position: relative;
  background-color: #fff;
`;

export const FastStrategyNavigation = styled.div`
  background-color: #fff;
`;

const applyStylesForRow = () => {
  return css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    background-color: inherit;
    padding: ${rowPadding}px;
  `;
};

export const StickersRow = styled.div`
  ${applyStylesForRow}
  height: 180px;

  &::before {
    position: absolute;
    inset: 0;
    content: "";
    height: 180px;
    background-color: #e8f0ff;
    width: ${(props) =>
      props.activeStep === 1
        ? `calc(${rowWidth}px * ${props.activeStep} + (${dividerWidth} * ${props.activeStep}) / 2 + ${rowPadding}px + 1px)`
        : props.activeStep === 2
        ? `calc(${rowWidth}px * ${props.activeStep} + (${dividerWidth} * 1.5 * ${props.activeStep}) / 2 + ${rowPadding}px + 1px)`
        : props.activeStep === 3
        ? `calc(${rowWidth}px * ${props.activeStep} + (${dividerWidth} * 1.66 * ${props.activeStep}) / 2 + ${rowPadding}px + 1px)`
        : props.activeStep === 4
        ? "100%"
        : 0};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: width ease-in-out 0.5s;
  }
`;

export const ContentRow = styled.div`
  ${applyStylesForRow}
  width: 100%;
  height: max-content;
  background-color: #fff;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    background-color: #f8fafb;
    width: ${(props) =>
      props.activeStep === 1
        ? `calc(${rowWidth}px * ${4 - props.activeStep} + (${dividerWidth} * 1.66 * ${
            4 - props.activeStep
          }) / 2 + ${rowPadding}px)`
        : props.activeStep === 2
        ? `calc(${rowWidth}px * ${props.activeStep} + (${dividerWidth} * 1.5 * ${props.activeStep}) / 2 + ${rowPadding}px - 1px) `
        : props.activeStep === 3
        ? `calc(${rowWidth}px * ${4 - props.activeStep} + (${dividerWidth} * ${
            4 - props.activeStep
          }) / 2 + ${rowPadding}px)`
        : props.activeStep === 4
        ? 0
        : "100%"};
    height: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: width ease-in-out 0.5s;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const DividerWrapper = styled.span`
  min-width: ${dividerMinWidth};
  display: flex;
  flex: 1;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px 4px;
  z-index: 10;
`;

export const StyledDivider = styled(Divider)`
  &.MuiDivider-root {
    color: #4e5969;
    font-family: Titillium Web;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.75rem;
    .MuiDivider-wrapper {
      padding-left: calc(4px * 1.2);
      padding-right: calc(4px * 1.2);
    }
  }
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

export const TechnologyIcon = styled.span`
  ${applyStylesForIcon}
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='%23fff' d='M23.25 11.6719h-3.021V7.1321h.8339c.1452.5468.6443.951 1.2361.951.7053 0 1.2791-.5738 1.2791-1.2791 0-.7053-.5738-1.279-1.2791-1.279-.5918 0-1.0909.404-1.2361.9509h-1.162a.3281.3281 0 0 0-.3281.3281v4.8679h-2.0751a.3281.3281 0 0 0-.3281.3281c0 2.8505-2.3191 5.1696-5.1696 5.1696S6.8305 14.8505 6.8305 12a.3281.3281 0 0 0-.3281-.3281H4.4273V6.804a.3281.3281 0 0 0-.3282-.3281h-1.162c-.1452-.5468-.6443-.951-1.2362-.951-.7052 0-1.279.5738-1.279 1.2791 0 .7053.5738 1.279 1.279 1.279.5919 0 1.091-.404 1.2362-.9509h.8339v4.5398H.75A.3281.3281 0 0 0 .4219 12v1.125c0 .5883.4787 1.0671 1.0671 1.0671.8897 0 1.6542.5116 1.9953 1.3351.3412.8236.1623 1.726-.4668 2.3551a1.0601 1.0601 0 0 0-.3125.7546c0 .2851.111.5531.3125.7546l1.591 1.591c.4161.416 1.093.416 1.5092 0 .6299-.63 1.5326-.8096 2.3557-.4686.8232.3409 1.3345 1.1062 1.3345 1.9971 0 .5884.4787 1.0671 1.0671 1.0671h2.25c.5884 0 1.0671-.4787 1.0671-1.0671 0-.8897.5116-1.6542 1.3351-1.9953.8238-.3413 1.7261-.1623 2.3551.4668.4162.416 1.0931.416 1.5092 0l1.5909-1.591a1.0599 1.0599 0 0 0 .3126-.7546c0-.2851-.111-.5531-.3125-.7546-.6291-.6291-.808-1.5315-.4669-2.3551.3412-.8235 1.1058-1.3352 1.9954-1.3352.5884 0 1.0671-.4787 1.0671-1.0671V12a.3281.3281 0 0 0-.3281-.3281Zm-.951-5.4907a.6235.6235 0 0 1 .6229.6228.6235.6235 0 0 1-.6229.6228.6234.6234 0 0 1-.6227-.6228.6234.6234 0 0 1 .6227-.6228ZM1.701 7.4268a.6235.6235 0 0 1-.6229-.6228.6235.6235 0 0 1 .6228-.6229.6235.6235 0 0 1 .6228.6229.6235.6235 0 0 1-.6228.6228Zm21.2209 5.6982a.4113.4113 0 0 1-.4109.4108c-1.1601 0-2.157.6669-2.6016 1.7403-.4446 1.0735-.2113 2.2499.609 3.0703a.408.408 0 0 1 .1203.2905.4082.4082 0 0 1-.1203.2906l-1.5909 1.591a.4115.4115 0 0 1-.5811 0c-.8203-.8204-1.9967-1.0537-3.0703-.6091-1.0734.4447-1.7403 1.4415-1.7403 2.6016a.4113.4113 0 0 1-.4108.4109h-2.25a.4113.4113 0 0 1-.4108-.4109c0-1.1614-.6666-2.1589-1.7395-2.6034-.3597-.1489-.7308-.2216-1.0964-.2216-.7254 0-1.4287.2865-1.9747.8325a.4114.4114 0 0 1-.581 0l-1.591-1.591a.4083.4083 0 0 1-.1203-.2906.4081.4081 0 0 1 .1203-.2905c.8203-.8204 1.0536-1.9968.609-3.0703-.4447-1.0734-1.4416-1.7403-2.6016-1.7403a.4113.4113 0 0 1-.411-.4108v-.7969h5.1053c.171 3.0603 2.7145 5.4977 5.8167 5.4977s5.6458-2.4375 5.8167-5.4977h5.1052v.7969ZM4.0991 2.98c.5919 0 1.091-.4042 1.2362-.951h2.386V12c0 2.3592 1.9194 4.2786 4.2787 4.2786 2.3591 0 4.2785-1.9194 4.2785-4.2786V2.0291h2.3861c.1453.5468.6443.951 1.2362.951.7053 0 1.2791-.5739 1.2791-1.2792 0-.7052-.5737-1.279-1.279-1.279-.5919 0-1.0909.4041-1.2362.951h-2.7143a.3281.3281 0 0 0-.3281.328v9.971h-3.2942V5.4887c.5468-.1453.9509-.6444.9509-1.2362 0-.7053-.5737-1.279-1.279-1.279-.7053 0-1.2791.5737-1.2791 1.279 0 .5918.4042 1.091.951 1.2362v6.1832H8.3777v-9.971a.3281.3281 0 0 0-.3281-.328H5.3353C5.1901.826 4.691.4218 4.0991.4218c-.7053 0-1.279.5738-1.279 1.279 0 .7053.5737 1.279 1.279 1.279ZM19.901 1.078a.6235.6235 0 0 1 .6228.6228.6235.6235 0 0 1-.6228.6229.6235.6235 0 0 1-.6228-.6228.6235.6235 0 0 1 .6228-.6229Zm-8.5237 3.1743A.6235.6235 0 0 1 12 3.6296a.6235.6235 0 0 1 .6228.6228.6235.6235 0 0 1-.6228.6229.6235.6235 0 0 1-.6228-.6229Zm4.2303 8.0757c-.1663 1.8442-1.7207 3.2942-3.6075 3.2942s-3.4413-1.45-3.6076-3.2942h7.2151ZM4.0991 1.0781a.6235.6235 0 0 1 .6228.6228.6235.6235 0 0 1-.6228.6229.6235.6235 0 0 1-.6228-.6228.6235.6235 0 0 1 .6228-.6229Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;

export const SpinningGearIcon = styled.span`
  ${applyStylesForIcon}
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg fill='%23fff' clip-path='url(%23a)'%3e%3cpath d='M23.762 12.442a.703.703 0 0 0-.992.062l-.011.013v-.493c0-2.874-1.12-5.575-3.152-7.607A10.688 10.688 0 0 0 12 1.266c-1.736 0-3.46.423-4.988 1.224A10.848 10.848 0 0 0 3.26 5.75a.703.703 0 1 0 1.142.82 9.435 9.435 0 0 1 3.263-2.835A9.372 9.372 0 0 1 12 2.672c5.157 0 9.352 4.195 9.352 9.352v.493l-.011-.013a.703.703 0 1 0-1.054.931l1.241 1.405a.703.703 0 0 0 1.054 0l1.242-1.405a.703.703 0 0 0-.062-.993Zm-3.182 4.873a.703.703 0 0 0-.982.16 9.437 9.437 0 0 1-3.263 2.835A9.371 9.371 0 0 1 12 21.373c-5.157 0-9.352-4.195-9.352-9.352v-.493l.011.013a.703.703 0 1 0 1.054-.931L2.472 9.204a.704.704 0 0 0-1.054 0L.176 10.61a.703.703 0 1 0 1.054.931l.011-.013v.493c0 2.874 1.12 5.575 3.152 7.607A10.687 10.687 0 0 0 12 22.78c1.736 0 3.46-.423 4.988-1.224a10.852 10.852 0 0 0 3.752-3.26.703.703 0 0 0-.16-.98Z'/%3e%3cpath d='M6.02 13.523a.58.58 0 0 0 .061.45l1.213 2.054a.618.618 0 0 0 .828.217l.891-.503c.356.272.75.495 1.168.66v1.006a.6.6 0 0 0 .607.593h2.425a.6.6 0 0 0 .606-.593v-1.005c.417-.166.812-.39 1.168-.661l.891.503c.14.079.305.1.46.06a.604.604 0 0 0 .368-.277l1.213-2.054a.582.582 0 0 0-.222-.81l-.893-.504a4.682 4.682 0 0 0-.002-1.317l.895-.505a.583.583 0 0 0 .222-.81l-1.213-2.054a.614.614 0 0 0-.828-.217l-.897.507a4.914 4.914 0 0 0-1.162-.657V6.593A.6.6 0 0 0 13.212 6h-2.424a.6.6 0 0 0-.607.593v1.013a4.914 4.914 0 0 0-1.162.657l-.897-.507a.614.614 0 0 0-.828.217L6.08 10.027a.582.582 0 0 0 .222.81l.895.505a4.661 4.661 0 0 0-.002 1.317l-.893.504a.595.595 0 0 0-.282.36ZM12 10.225c1.004 0 1.819.797 1.819 1.779 0 .982-.815 1.779-1.819 1.779-1.005 0-1.819-.797-1.819-1.78 0-.981.815-1.778 1.82-1.778Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;

export const HeadingPrimary = styled(FormLabel)`
  &.MuiFormLabel-root {
    //color: #c4c4c4;
    font-family: Titillium Web;
    font-size: 1.45rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.875rem;
    margin: 0;
    transition: color 0.5s ease-in-out;
  }
`;

export const HeadingSecondary = styled.h3`
  color: #000;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0;
`;

const applyFontStylingForNavBtn = () => {
  return css`
    padding: 12px 24px;
    min-width: max-content;
    text-align: right;
    text-transform: capitalize;
    font-family: Titillium Web;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    letter-spacing: 0.01875rem;
  `;
};

export const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    ${applyFontStylingForNavBtn}
  }
  &.MuiButton-contained {
    background: #0057d3;
  }
  &.MuiButton-text {
    color: #1565d8;
  }
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
