import styled from "@emotion/styled";
import { DARK_BLUE, DARK_PURPLE, LIGH_BLUE } from "../colors";

export const Section = styled.section`
  margin: 2rem;
  p {
    color: ${DARK_BLUE};
    margin-top: 1rem;
  }
  @media (max-width: 420px) {
    margin: 2rem 0.5rem;
  }
`;

export const H2 = styled.h3`
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
      background-color: ${LIGH_BLUE};
      z-index: -1;
      @media (max-width: 420px) {
        width: 0;
      }
    }
  }
`;
