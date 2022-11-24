import styled from "@emotion/styled";
import {
  LIGHT_PURPLE,
  SECONDARY_BLUE,
  SECONDARY_YELLOW,
  WHITE,
} from "../colors";

export const Article = styled.article`
  height: 77vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

export const LandingSection = styled.section`
  text-align: center;
  margin: auto;
  max-width: 500px;
`;

export const LandingParagraph = styled.p`
  font-weight: 700;
  font-style: normal;
  font-size: 22px;
  letter-spacing: -0.02em;
  text-transform: none;
  line-height: 1.5em;
  color: ${LIGHT_PURPLE};
`;

export const LandingLink = styled.a`
  color: ${SECONDARY_BLUE};
  text-decoration: none;
  text-shadow: 0.03em 0 ${WHITE}, -0.03em 0 ${WHITE}, 0 0.03em ${WHITE},
    0 -0.03em ${WHITE}, 0.06em 0 ${WHITE}, -0.06em 0 ${WHITE}, 0.09em 0 ${WHITE},
    -0.09em 0 ${WHITE}, 0.12em 0 ${WHITE}, -0.12em 0 ${WHITE}, 0.15em 0 ${WHITE},
    -0.15em 0 ${WHITE};
  background-image: linear-gradient(${WHITE}, ${WHITE}),
    linear-gradient(${WHITE}, ${WHITE}),
    linear-gradient(${SECONDARY_BLUE}, ${SECONDARY_BLUE});
  background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0% 90%, 100% 90%, 0% 90%;
  &:hover {
    background-color: ${SECONDARY_YELLOW};
    color: ${SECONDARY_BLUE};
    text-decoration: none;
    text-shadow: 0.03em 0 ${SECONDARY_YELLOW}, -0.03em 0 ${SECONDARY_YELLOW},
      0 0.03em ${SECONDARY_YELLOW}, 0 -0.03em ${SECONDARY_YELLOW},
      0.06em 0 ${SECONDARY_YELLOW}, -0.06em 0 ${SECONDARY_YELLOW},
      0.09em 0 ${SECONDARY_YELLOW}, -0.09em 0 ${SECONDARY_YELLOW},
      0.12em 0 ${SECONDARY_YELLOW}, -0.12em 0 ${SECONDARY_YELLOW},
      0.15em 0 ${SECONDARY_YELLOW}, -0.15em 0 ${SECONDARY_YELLOW};
    background-image: linear-gradient(${SECONDARY_YELLOW}, ${SECONDARY_YELLOW}),
      linear-gradient(${SECONDARY_YELLOW}, ${SECONDARY_YELLOW}),
      linear-gradient(${SECONDARY_BLUE}, ${SECONDARY_BLUE});
    background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
    box-shadow: 0.06em 0 0 0.06em ${SECONDARY_YELLOW},
      -0.06em 0 0 0.06em ${SECONDARY_YELLOW};
    cursor: pointer;
  }
`;
