import { css } from "@emotion/css";

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
  background-color: #0f63cb;
  padding: 1rem;
`;

export const lineOutside = css`
  width: 30px;
  height: 2px;
  background-color: #f7eb06;
  margin: 6px 0;
  transition: 0.2s;
`;
export const lineInside = css`
  width: 20px;
  height: 2px;
  background-color: #f7eb06;
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
