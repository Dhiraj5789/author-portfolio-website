import styled from "@emotion/styled";
import { PRIMARY_BLUE } from "../colors";

export const ProfilePictureContainer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  background-color: ${PRIMARY_BLUE};
  @media (max-width: 655px) {
    display: none;
  }
`;
