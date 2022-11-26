import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  DARK_BLUE,
  DARK_PURPLE,
  LIGHT_BLUE,
  PRIMARY_BLUE,
  PRIMARY_YELLOW,
  SECONDARY_BLUE,
  SECONDARY_YELLOW,
} from "./colors";
import { AsideContainerProps } from "./types";

export const Aside = styled.aside<AsideContainerProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  background: ${(props) => (!!props.pageType ? PRIMARY_BLUE : PRIMARY_BLUE)};
  @media (max-width: 655px) {
    display: none;
  }
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-family: "Lato", sans-serif;
  color: ${PRIMARY_YELLOW};
`;

export const Main = styled.main`
  position: absolute;
  width: 50vw;
  left: 50vw;
  @media (max-width: 655px) {
    width: 100vw;
    left: 0;
  }
`;

export const strongCss = css`
  background-color: ${SECONDARY_YELLOW};
  color: ${SECONDARY_BLUE};
  font-size: 1.3em;
  text-decoration: underline;
  background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
  box-shadow: 0.06em 0 0 0.06em ${SECONDARY_YELLOW},
    -0.06em 0 0 0.06em ${SECONDARY_YELLOW};
  margin-left: 0.5rem;
`;

export const Strong = styled.strong`
  ${strongCss}
`;

export const LinedH2 = styled.h2`
  color: ${DARK_PURPLE};
  font-weight: 700;
  font-style: normal;
  font-size: 19px;
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
  strong {
    ${strongCss};
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

export const CommonSection = styled.section`
  margin: 5% 10%;
  p {
    color: ${DARK_BLUE};
    margin-top: 1rem;
  }
`;

export const SectionLarge = styled.section`
  margin: 15% 10% 10%;
  p {
    color: ${DARK_BLUE};
    margin-top: 1rem;
  }
`;

export const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
  iframe {
    display: flex;
    justify-content: center;
    align-self: center;
    margin-bottom: 1rem;
    width: 35vw;
    border-radius: 0.5rem;
    border: 0;
    height: 33rem;
    @media (max-width: 655px) {
      width: 90vw;
      height: 25rem;
    }
  }
`;

export const ResponsiveImage = styled.img`
  width: 100%;
  height: 30vw;
`;
