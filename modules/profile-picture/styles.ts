import styled from "@emotion/styled";
import { PRIMARY_BLUE } from "../colors";

type BackgroumdProps = {
  backgroundType: "contact" | "default";
};

export const ProfilePictureContainer = styled.aside<BackgroumdProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 50%;
  height: 100vh;
  background: ${(props) => (props.backgroundType ? "hotpink" : "turquoise")};
  background: ${PRIMARY_BLUE};
  @media (max-width: 655px) {
    display: none;
  }
`;
