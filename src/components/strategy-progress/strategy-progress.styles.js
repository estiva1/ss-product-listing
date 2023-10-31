import styled, { css } from "styled-components";
import { Step, StepContent, StepLabel, Stepper } from "@mui/material";

const applyFontStyling = () => {
  return css`
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
  `;
};

export const StyledStepper = styled(Stepper)`
  .MuiStepConnector-line {
    display: none;
  }
`;

export const StyledStep = styled(Step)`
  .MuiStepLabel-root {
    padding-top: 6px;
    padding-bottom: 6px;
    .MuiStepIcon-root {
      color: #fff;
      &:not(.MuiStepIcon-root.Mui-active, .MuiStepIcon-root.Mui-completed) {
        border-radius: 50%;
        > circle {
          stroke-width: 2.5px;
          stroke: #c4c4c4;
        }
      }
    }

    .MuiStepIcon-root.Mui-active {
      > circle,
      text {
        display: none;
      }
      min-width: 24px;
      min-height: 24px;
      width: 24px;
      height: 24px;
      background-size: cover;
      background-repeat: no-repeat;
      animation: rotate 4s linear infinite;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cpath fill='%231565D8' d='M23.7616 12.4424a.7032.7032 0 0 0-.9924.0615l-.0114.0128v-.4927c0-2.8737-1.1191-5.5754-3.1512-7.6075-2.0319-2.032-4.7337-3.1509-7.6073-3.1509-1.7359 0-3.4607.4234-4.9884 1.224-1.478.7748-2.7753 1.9018-3.7516 3.2596a.703.703 0 0 0 .1604.9812.703.703 0 0 0 .9814-.1602c.8493-1.181 1.9776-2.1614 3.2628-2.835 1.327-.6956 2.826-1.0633 4.3354-1.0633 5.1568 0 9.3523 4.1955 9.3523 9.3523v.4927l-.0116-.0128a.703.703 0 0 0-.9924-.0615.703.703 0 0 0-.0615.9924l1.2414 1.4055a.703.703 0 0 0 1.054 0l1.2415-1.4055a.7031.7031 0 0 0-.0614-.9926Zm-3.182 4.8741a.7033.7033 0 0 0-.9814.1603c-.8492 1.1808-1.9775 2.1612-3.2628 2.835-1.3269.6956-2.8262 1.0633-4.3354 1.0633-5.1568 0-9.3523-4.1955-9.3523-9.3523V11.53l.0116.013a.703.703 0 0 0 .9924.0614.703.703 0 0 0 .0615-.9925L2.4718 9.2064a.703.703 0 0 0-1.054 0L.1762 10.612a.703.703 0 0 0 .0615.9925.6995.6995 0 0 0 .4653.1763.7016.7016 0 0 0 .5271-.2377l.0114-.013v.4928c0 2.8738 1.1191 5.5754 3.1512 7.6075 2.032 2.0321 4.7337 3.151 7.6073 3.151 1.7357 0 3.4607-.4233 4.9884-1.224 1.4778-.7747 2.7751-1.9019 3.7515-3.2595a.703.703 0 0 0-.1603-.9813Z'/%3e%3cpath fill='%231565D8' d='M6.0207 13.5231a.5805.5805 0 0 0 .0606.4498l1.2124 2.0541a.6045.6045 0 0 0 .368.2762.6178.6178 0 0 0 .46-.0593l.8915-.5033a4.913 4.913 0 0 0 1.1682.6611v1.0054c0 .3273.2714.5929.6062.5929h2.4249c.3346 0 .6062-.2656.6062-.5929v-1.0054a4.9132 4.9132 0 0 0 1.1682-.6611l.8915.5033a.6181.6181 0 0 0 .4598.0593.6045.6045 0 0 0 .3682-.2762l1.2124-2.0541a.5822.5822 0 0 0 .0606-.4498.5954.5954 0 0 0-.2824-.36l-.8934-.5045a4.6627 4.6627 0 0 0-.0011-1.3166l.8945-.5051a.595.595 0 0 0 .2824-.36.5826.5826 0 0 0-.0606-.45L16.7064 7.973c-.1674-.2835-.5382-.3806-.828-.217l-.8974.5068a4.9136 4.9136 0 0 0-1.1623-.6567V6.593c0-.3273-.2714-.5929-.6062-.5929h-2.4249c-.3348 0-.6062.2656-.6062.593V7.606a4.9138 4.9138 0 0 0-1.1622.6567l-.8975-.5067c-.2898-.1639-.6606-.0666-.828.2169l-1.2124 2.0539a.5824.5824 0 0 0-.0606.45.5948.5948 0 0 0 .2824.36l.8945.5051a4.6612 4.6612 0 0 0-.0011 1.3166l-.8932.5045a.5945.5945 0 0 0-.2826.36Zm5.9794-3.2979c1.0043 0 1.8186.7964 1.8186 1.7787 0 .9824-.8143 1.7788-1.8186 1.7788-1.0046 0-1.8187-.7964-1.8187-1.7788 0-.9823.8143-1.7787 1.8187-1.7787Z'/%3e%3c/svg%3e");

      @keyframes rotate {
        to {
          transform: rotate(360deg);
        }
      }
    }

    .MuiStepIcon-root.Mui-completed {
      color: #009c34;
    }
  }

  .MuiStepIcon-text {
    fill: #4e5969;
    text-align: center;
    font-family: Titillium Web;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
  }
`;

export const StyledStepContent = styled(StepContent)`
  &.MuiStepContent-root {
    border: 0;
    padding-top: 6px;
    padding-bottom: 10px;
    box-shadow: -4px 1px 3px -4px #c4c4c4;
  }
`;

export const StyledStepLabel = styled(StepLabel)`
  .MuiStepLabel-label {
    &.Mui-active,
    &.Mui-completed {
      color: #000;
      ${applyFontStyling}
    }
    &.Mui-disabled {
      color: #4e5969;
      ${applyFontStyling}
    }
  }
`;

export const PrimaryText = styled.h3`
  color: #4e5969;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: 0.00375rem;
  margin: 0;
`;

export const PrimaryTextHighlighted = styled(PrimaryText)`
  color: #1565d8;
`;

export const SecondaryText = styled.h4`
  color: #979797;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.625rem;
  margin: 0;
`;

export const MinMaxValue = styled.h3`
  color: #000;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`;
