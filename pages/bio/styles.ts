import styled from "@emotion/styled";
import { DARK_BLUE, LIGH_BLUE } from "../../modules/colors";

export const Section = styled.section`
  margin: 15% 10%;
  p {
    color: ${DARK_BLUE};
    margin-top: 1rem;
  }
`;

export const H3 = styled.h3`
  font-weight: 400;
  font-style: normal;
  font-size: 26px;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.4em;
  color: ${LIGH_BLUE};
  font-style: italic;
  margin: 1rem 0;
  text-rendering: optimizeLegibility;
`;
