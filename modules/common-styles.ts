import styled from "@emotion/styled";
import { DARK_BLUE, DARK_PURPLE, LIGHT_BLUE, PRIMARY_BLUE } from "./colors";
import { AsideContainerProps } from "./types";

export const Aside = styled.aside<AsideContainerProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  background: ${(props) => (!!props.pageType ? PRIMARY_BLUE : "turquoise")};
  @media (max-width: 655px) {
    display: none;
  }
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
