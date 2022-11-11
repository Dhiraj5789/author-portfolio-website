import styled from "@emotion/styled";

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
