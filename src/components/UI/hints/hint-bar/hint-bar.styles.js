import styled from "styled-components";

export const HintBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  padding: 8px;
  min-height: 32px;
  border-radius: 4px;
  background-color: #f9f0e2;
  transition: all 0.5s ease-out;
  cursor: help;

  &:hover {
    box-shadow: 2px 2px 4px 1px #f90;
    transition: all 0.5s ease-out;

    span {
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

export const HintText = styled.h3`
  color: #4e5969;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.75rem;
  margin: 0;
`;

export const LightBulbIcon = styled.span`
  min-width: 24px;
  min-height: 24px;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cg fill='%23F90' clip-path='url(%23a)'%3e%3cpath d='M17.533 11.3336c-.3127-2.5514-2.3263-4.56-4.8785-4.8662a5.8466 5.8466 0 0 0-.6619-.0377c-2.2556.0035-4.2865 1.3666-5.1442 3.4527-.8577 2.086-.373 4.4835 1.2278 6.0725a4.3878 4.3878 0 0 1 1.3527 3.1172v.6437h5.1428v-.647a4.2911 4.2911 0 0 1 1.3046-3.0668 5.5533 5.5533 0 0 0 1.6567-4.6682v-.0002Zm-5.5317 12.6642a1.2879 1.2879 0 0 0 1.2123-.8572h-2.4245a1.2876 1.2876 0 0 0 1.2122.8572ZM9.8594 21.856a.4292.4292 0 0 0 .4286.4286h3.4285a.4291.4291 0 0 0 .4286-.4286v-1.2857H9.8594v1.2857Zm2.1384-17.9988A.8571.8571 0 0 0 12.8549 3V.8572a.8572.8572 0 0 0-1.7143 0V3c0 .4734.3838.8572.8572.8572ZM4.7662 5.9784a.8776.8776 0 0 0 1.2123 0 .857.857 0 0 0 0-1.2122l-1.5153-1.515a.8568.8568 0 0 0-1.212 0 .8568.8568 0 0 0 0 1.212l1.515 1.5152Zm-.909 6.0194A.8572.8572 0 0 0 3 11.1406H.8572A.858.858 0 0 0 0 11.9978a.858.858 0 0 0 .8572.8571H3a.8571.8571 0 0 0 .8572-.8571Zm19.2834-.8572h-2.1428a.8572.8572 0 0 0 0 1.7143h2.1428a.8571.8571 0 1 0 0-1.7143ZM19.233 5.9784l1.515-1.5153a.857.857 0 1 0-1.2121-1.212l-1.5153 1.515a.8575.8575 0 0 0 0 1.2123.8777.8777 0 0 0 1.2124 0Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='%23fff' d='M0 0h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  rotate: 0deg;
`;
