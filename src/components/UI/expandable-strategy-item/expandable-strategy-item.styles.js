import styled, { css } from "styled-components";
import { Accordion, FormControlLabel } from "@mui/material";

export const StrategyItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-radius: 16px;
  background-color: ${({ color }) => color};
`;

export const StyledAccordion = styled(Accordion)`
  background-color: inherit !important;
  transition: all ease-in-out !important;

  &.MuiPaper-root {
    &::before {
      content: none;
    }
  }
  .MuiAccordionSummary-root {
    padding-inline: 0;
    min-height: 0px;
    .MuiAccordionSummary-content {
      margin: 0;
    }
  }
  .MuiAccordionDetails-root {
    padding: 0;
  }
  // this actually causes small "jump" of transition animation at the end of collapsion
  /* .MuiCollapse-root {
    transition-delay: 0.15s;
  } */
`;

export const HintTextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: #f9f0e2;
  border-radius: 30px;
  border-top-right-radius: 0;
  transition: background-color 0.2s ease-in-out;
`;

export const HintText = styled.span`
  color: #4e5969;
  white-space: pre-wrap;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;
  margin: 0;
`;

const applyClampStyles = (props) => {
  if (props.$clamp) {
    return css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      -webkit-line-clamp: 1;
    `;
  }
  return "";
};

const applyGradientForLabel = (props) => {
  if (props.$aiStrategy) {
    return css`
      background-image: linear-gradient(135deg, #1565d8 0%, #090c53 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    `;
  }
};

// export const BpIcon = styled.span`
//   border-radius: 50%;
//   width: 32;
//   height: 32;
//   box-shadow: 0px 0px 0px 2px inset #1565d8 !important;
//   background-color: #fff;

//   input {
//     &:hover ~ & {
//       background-color: #ebf1f5;
//     }
//   }
//   input:disabled ~ & {
//     box-shadow: none;
//     background: rgba(206, 217, 224, 0.5);
//   }
// `;

export const StyledFormControlLabel = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    .MuiButtonBase-root {
      //padding: 0px 16px;
    }
    .MuiTypography-root {
      color: #000;
      font-family: Titillium Web;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem;
      margin: 0;
    }
  }
`;

export const Label = styled.h3`
  ${applyClampStyles};
  color: ${({ $currentStrategy }) => ($currentStrategy ? "#1565D8" : "#000")};
  ${applyGradientForLabel};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 0;
  user-select: none;
  transition: color 0.5s ease-in-out;
`;

export const Description = styled.label`
  color: #c4c4c4;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem;
  user-select: none;
  margin: 0;
`;

export const DescriptionHighlighted = styled(Description)`
  color: #00a3ff;
`;

export const HintCircleContainer = styled.div`
  display: flex;
  min-width: 32px;
  width: 32px;
  height: ${({ $hintExpanded }) => ($hintExpanded ? "36px" : "32px")};
  padding-top: 8px;
  //align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${({ $hintExpanded }) =>
    $hintExpanded &&
    `
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  `}
  background-color: #f9f0e2;
  transition: all 0.2s ease-out;
  cursor: pointer;
  z-index: 22;
  //top: 5px;

  &:hover {
    transition: all 0.2s ease-out;
    transition-delay: ${({ $hintExpanded }) => ($hintExpanded ? "0s" : "0.25s")};

    & > span {
      animation: shake 0.6s ease-in-out;

      @keyframes shake {
        10% {
          rotate: 12deg;
        }
        30%,
        70% {
          rotate: -25deg;
        }
        50%,
        85% {
          rotate: 25deg;
        }
        100% {
          rotate: 0deg;
        }
      }
    }
  }
`;

export const LightBulbIcon = styled.span`
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg fill='%23F90' clip-path='url(%23a)'%3e%3cpath d='M17.533 11.3336c-.3127-2.5514-2.3263-4.56-4.8785-4.8662a5.8466 5.8466 0 0 0-.6619-.0377c-2.2556.0035-4.2865 1.3666-5.1442 3.4527-.8577 2.086-.373 4.4835 1.2278 6.0725a4.3878 4.3878 0 0 1 1.3527 3.1172v.6437h5.1428v-.647a4.2911 4.2911 0 0 1 1.3046-3.0668 5.5533 5.5533 0 0 0 1.6567-4.6682v-.0002Zm-5.5317 12.6642a1.2879 1.2879 0 0 0 1.2123-.8572h-2.4245a1.2876 1.2876 0 0 0 1.2122.8572ZM9.8594 21.856a.4292.4292 0 0 0 .4286.4286h3.4285a.4291.4291 0 0 0 .4286-.4286v-1.2857H9.8594v1.2857Zm2.1384-17.9988A.8571.8571 0 0 0 12.8549 3V.8572a.8572.8572 0 0 0-1.7143 0V3c0 .4734.3838.8572.8572.8572ZM4.7662 5.9784a.8776.8776 0 0 0 1.2123 0 .857.857 0 0 0 0-1.2122l-1.5153-1.515a.8568.8568 0 0 0-1.212 0 .8568.8568 0 0 0 0 1.212l1.515 1.5152Zm-.909 6.0194A.8572.8572 0 0 0 3 11.1406H.8572A.858.858 0 0 0 0 11.9978a.858.858 0 0 0 .8572.8571H3a.8571.8571 0 0 0 .8572-.8571Zm19.2834-.8572h-2.1428a.8572.8572 0 0 0 0 1.7143h2.1428a.8571.8571 0 1 0 0-1.7143ZM19.233 5.9784l1.515-1.5153a.857.857 0 1 0-1.2121-1.212l-1.5153 1.515a.8575.8575 0 0 0 0 1.2123.8777.8777 0 0 0 1.2124 0Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  transition: background-image 0.5s ease-in-out;
  rotate: 0deg;
`;

export const AiIcon = styled.span`
  min-width: 32px;
  min-height: 32px;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${() =>
    `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='none'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='url(%23b)' d='m22.56 22.78-1.42 3.73h2.83l-1.4-3.73Z'/%3e%3cpath fill='url(%23c)' d='M13.77 36.23h22.46V13.77H13.77v22.46Zm16.84-17.1a1.46 1.46 0 1 1 2.93 0v11.73a1.46 1.46 0 0 1-2.93 0V19.14Zm-14.06 11.2 4.4-11.55.01-.03a1.72 1.72 0 0 1 3.22.04l4.36 11.55a1.46 1.46 0 1 1-2.74 1.03l-.73-1.93h-5.04l-.74 1.94a1.46 1.46 0 1 1-2.74-1.04Z'/%3e%3cpath fill='url(%23d)' d='M42.09 6.44H7.91c-.8 0-1.46.66-1.46 1.47v34.18c0 .8.65 1.46 1.46 1.46h34.18c.8 0 1.46-.65 1.46-1.46V7.9c0-.81-.65-1.47-1.46-1.47ZM39.16 37.7c0 .81-.66 1.47-1.46 1.47H12.3c-.8 0-1.46-.66-1.46-1.47V12.3c0-.8.66-1.46 1.46-1.46h25.4c.8 0 1.46.65 1.46 1.46v25.4Z'/%3e%3cpath fill='url(%23e)' d='M41.11 1.46a1.46 1.46 0 1 0-2.93 0v2.05h2.93V1.46Z'/%3e%3cpath fill='url(%23f)' d='M35.25 1.46a1.46 1.46 0 0 0-2.93 0v2.05h2.93V1.46Z'/%3e%3cpath fill='url(%23g)' d='M29.4 1.46a1.46 1.46 0 0 0-2.94 0v2.05h2.93V1.46Z'/%3e%3cpath fill='url(%23h)' d='M23.53 1.46a1.46 1.46 0 1 0-2.92 0v2.05h2.92V1.46Z'/%3e%3cpath fill='url(%23i)' d='M17.68 1.46a1.46 1.46 0 1 0-2.93 0v2.05h2.93V1.46Z'/%3e%3cpath fill='url(%23j)' d='M11.82 1.46a1.46 1.46 0 0 0-2.93 0v2.05h2.93V1.46Z'/%3e%3cpath fill='url(%23k)' d='M38.18 48.53a1.46 1.46 0 0 0 2.93 0v-2.05h-2.93v2.05Z'/%3e%3cpath fill='url(%23l)' d='M32.32 48.53a1.46 1.46 0 1 0 2.93 0v-2.05h-2.93v2.05Z'/%3e%3cpath fill='url(%23m)' d='M26.46 48.53a1.46 1.46 0 0 0 2.93 0v-2.05h-2.93v2.05Z'/%3e%3cpath fill='url(%23n)' d='M20.6 48.53a1.46 1.46 0 0 0 2.93 0v-2.05h-2.92v2.05Z'/%3e%3cpath fill='url(%23o)' d='M14.75 48.53a1.46 1.46 0 0 0 2.93 0v-2.05h-2.93v2.05Z'/%3e%3cpath fill='url(%23p)' d='M8.89 48.53a1.46 1.46 0 0 0 2.93 0v-2.05H8.89v2.05Z'/%3e%3cpath fill='url(%23q)' d='M0 10.35c0 .8.66 1.46 1.46 1.46h2.06V8.88H1.46c-.8 0-1.46.66-1.46 1.47Z'/%3e%3cpath fill='url(%23r)' d='M0 16.2c0 .82.66 1.47 1.46 1.47h2.06v-2.93H1.46c-.8 0-1.46.66-1.46 1.47Z'/%3e%3cpath fill='url(%23s)' d='M0 22.07c0 .8.66 1.46 1.46 1.46h2.06V20.6H1.46c-.8 0-1.46.66-1.46 1.47Z'/%3e%3cpath fill='url(%23t)' d='M0 27.93c0 .8.66 1.46 1.46 1.46h2.06v-2.93H1.46c-.8 0-1.46.66-1.46 1.47Z'/%3e%3cpath fill='url(%23u)' d='M0 33.79c0 .8.66 1.46 1.46 1.46h2.06v-2.93H1.46c-.8 0-1.46.66-1.46 1.47Z'/%3e%3cpath fill='url(%23v)' d='M0 39.65c0 .8.66 1.46 1.46 1.46h2.06v-2.93H1.46c-.8 0-1.46.66-1.46 1.47Z'/%3e%3cpath fill='url(%23w)' d='M50 10.35c0-.8-.66-1.47-1.47-1.47h-2.05v2.93h2.05c.81 0 1.47-.65 1.47-1.46Z'/%3e%3cpath fill='url(%23x)' d='M48.53 14.74h-2.05v2.93h2.05a1.46 1.46 0 1 0 0-2.93Z'/%3e%3cpath fill='url(%23y)' d='M48.53 20.6h-2.05v2.93h2.05a1.46 1.46 0 0 0 0-2.93Z'/%3e%3cpath fill='url(%23z)' d='M48.53 26.46h-2.05v2.93h2.05a1.46 1.46 0 0 0 0-2.93Z'/%3e%3cpath fill='url(%23A)' d='M48.53 32.32h-2.05v2.93h2.05a1.46 1.46 0 0 0 0-2.93Z'/%3e%3cpath fill='url(%23B)' d='M48.53 38.18h-2.05v2.93h2.05a1.46 1.46 0 1 0 0-2.93Z'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient id='b' x1='21.14' x2='24.73' y1='22.78' y2='25.5' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='c' x1='13.77' x2='36.23' y1='13.77' y2='36.23' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='6.45' x2='43.55' y1='6.44' y2='43.55' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='38.18' x2='41.64' y1='0' y2='2.88' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='f' x1='32.32' x2='35.78' y1='0' y2='2.88' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='g' x1='26.46' x2='29.92' y1='0' y2='2.88' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='h' x1='20.61' x2='24.06' y1='0' y2='2.88' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='i' x1='14.75' x2='18.2' y1='0' y2='2.88' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='8.89' x2='12.34' y1='0' y2='2.88' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='k' x1='38.18' x2='41.64' y1='46.48' y2='49.36' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='l' x1='32.32' x2='35.78' y1='46.48' y2='49.36' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='m' x1='26.46' x2='29.92' y1='46.48' y2='49.36' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='n' x1='20.61' x2='24.06' y1='46.48' y2='49.36' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='o' x1='14.75' x2='18.2' y1='46.48' y2='49.36' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='p' x1='8.89' x2='12.34' y1='46.48' y2='49.36' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='q' x1='0' x2='2.88' y1='8.88' y2='12.34' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='r' x1='0' x2='2.88' y1='14.74' y2='18.2' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='s' x1='0' x2='2.88' y1='20.6' y2='24.06' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='t' x1='0' x2='2.88' y1='26.46' y2='29.92' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='u' x1='0' x2='2.88' y1='32.32' y2='35.78' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='v' x1='0' x2='2.88' y1='38.18' y2='41.64' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='w' x1='46.48' x2='49.37' y1='8.88' y2='12.34' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='x' x1='46.48' x2='49.37' y1='14.74' y2='18.2' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='y' x1='46.48' x2='49.37' y1='20.6' y2='24.06' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='z' x1='46.48' x2='49.37' y1='26.46' y2='29.92' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='A' x1='46.48' x2='49.37' y1='32.32' y2='35.78' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3clinearGradient id='B' x1='46.48' x2='49.37' y1='38.18' y2='41.64' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%231565D8'/%3e%3cstop offset='1' stop-color='%23090C53'/%3e%3c/linearGradient%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h50v50H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e")`};
`;
