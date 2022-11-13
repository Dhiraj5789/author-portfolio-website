import styled from "@emotion/styled";
import { DARK_PURPLE, LIGHT_BLUE, PRIMARY_BLUE } from "./colors";
import { AsideContainerProps } from "./types";

export const Aside = styled.aside<AsideContainerProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  background: ${(props) => (props.pageType ? "hotpink" : "turquoise")};
  background: ${PRIMARY_BLUE};
  @media (max-width: 655px) {
    display: none;
  }
`;

export const LinedH2 = styled.h2`
  color: ${DARK_PURPLE};
  font-weight: 700;
  font-style: normal;
  font-size: 17px;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.2em;
  em {
    font-style: normal;
    position: relative;
    &::before {
      position: absolute;
      display: block;
      content: "";
      height: 3px;
      width: calc(2 * 3vw - 17px);
      left: calc(-2 * 3vw);
      top: 8px;
      background-color: ${LIGHT_BLUE};
      z-index: -1;
      @media (max-width: 655px) {
        width: 0;
      }
    }
  }
`;

export const H3 = styled.h3`
  font-weight: 400;
  font-style: normal;
  font-size: 26px;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.4em;
  color: ${LIGHT_BLUE};
  font-style: italic;
  margin: 1rem 0;
`;
