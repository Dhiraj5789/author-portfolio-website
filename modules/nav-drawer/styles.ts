import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { PRIMARY_BLUE, PRIMARY_YELLOW, WHITE } from "../colors";

export const muiPaper = css`
  opacity: 0.8;
  background-color: rgba(0, 96, 206, 0.95);
  z-index: auto;
  width: 50vw;
  padding: 3vw 17px;
`;

export const iconContainer = css`
  display: inline-block;
  cursor: pointer;
  background-color: ${PRIMARY_BLUE};
  padding: 0.6rem 1rem;
`;

export const lineOutside = css`
  width: 22px;
  height: 2px;
  background-color: ${PRIMARY_YELLOW};
  margin: 6px 0;
  transition: 0.2s;
`;
export const lineInside = css`
  width: 16px;
  height: 2px;
  background-color: ${PRIMARY_YELLOW};
  margin: 6px 0;
`;

export const translateLine1 = css`
  transform: translate(0, 8px);
`;
export const translateLine3 = css`
  transform: translate(0, -8px);
`;

export const translateLine2 = css`
  opacity: 0;
`;

export const A = styled.a`
  color: ${WHITE};
  font-weight: 700;
  font-style: normal;
  font-size: 33px;
  line-height: 1.45em;
  letter-spacing: 0px;
  text-transform: none;
  text-decoration: underline;
  transition: color 0.1s 0s ease-in-out;
  text-decoration: none;
  text-shadow: 0.03em 0 rgb(0 96 206 / 95%), -0.03em 0 rgb(0 96 206 / 95%),
    0 0.03em rgb(0 96 206 / 95%), 0 -0.03em rgb(0 96 206 / 95%),
    0.06em 0 rgb(0 96 206 / 95%), -0.06em 0 rgb(0 96 206 / 95%),
    0.09em 0 rgb(0 96 206 / 95%), -0.09em 0 rgb(0 96 206 / 95%),
    0.12em 0 rgb(0 96 206 / 95%), -0.12em 0 rgb(0 96 206 / 95%),
    0.15em 0 rgb(0 96 206 / 95%), -0.15em 0 rgb(0 96 206 / 95%);
  background-image: linear-gradient(
      rgba(0, 96, 206, 0.95),
      rgba(0, 96, 206, 0.95)
    ),
    linear-gradient(rgba(0, 96, 206, 0.95), rgba(0, 96, 206, 0.95)),
    linear-gradient(${WHITE}, ${WHITE});
  background-size: 0.05em 3px, 0.05em 3px, 1px 3px;
  background-repeat: no-repeat, no-repeat, repeat-x;
  background-position: 0% 90%, 100% 90%, 0% 90%;
  &:hover {
    color: ${PRIMARY_YELLOW};
    cursor: pointer;
  }
`;
