import styled from "@emotion/styled";

export const Section = styled.section`
  margin: 2rem;
  p {
    color: #101a60;
    margin-top: 1rem;
  }
`;

export const H3 = styled.h3`
  color: #334199;
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
      background-color: #156dbe;
      z-index: -1;
    }
  }
`;
