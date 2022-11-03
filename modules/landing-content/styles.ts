import styled from "@emotion/styled";

export const A = styled.a`
  color: #263387;
  text-decoration: none;
  text-shadow: 0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff,
    0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff,
    -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff;
  background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    linear-gradient(#263387, #263387);
  background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0% 90%, 100% 90%, 0% 90%;
  &:hover {
    background-color: #f5d30f;
    color: #263387;
    text-decoration: none;
    text-shadow: 0.03em 0 #f5d30f, -0.03em 0 #f5d30f, 0 0.03em #f5d30f,
      0 -0.03em #f5d30f, 0.06em 0 #f5d30f, -0.06em 0 #f5d30f, 0.09em 0 #f5d30f,
      -0.09em 0 #f5d30f, 0.12em 0 #f5d30f, -0.12em 0 #f5d30f, 0.15em 0 #f5d30f,
      -0.15em 0 #f5d30f;
    background-image: linear-gradient(#f5d30f, #f5d30f),
      linear-gradient(#f5d30f, #f5d30f), linear-gradient(#263387, #263387);
    background-size: 0.05em 1px, 0.05em 1px, 1px 1px;
    box-shadow: 0.06em 0 0 0.06em #f5d30f, -0.06em 0 0 0.06em #f5d30f;
    cursor: pointer;
  }
`;

export const landingSection = styled.section`
  text-align: center;
  margin: auto;
  max-width: 500px;
`;

export const landingParagraph = styled.p`
  font-weight: 700;
  font-style: normal;
  font-size: 27px;
  letter-spacing: -0.02em;
  text-transform: none;
  line-height: 1.5em;
  color: #5c67ad;
`;
