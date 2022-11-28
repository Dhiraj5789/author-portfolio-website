import { PostsContainer } from "../../modules/common-styles";
import { instagramPostsLinks } from "../../modules/constants";

export default function Posts() {
  return (
    <>
      <PostsContainer>
        {instagramPostsLinks.map((post: string) => (
          <iframe src={`${post}/embed`}></iframe>
        ))}
      </PostsContainer>
    </>
  );
}

export async function getServerSideProps() {
  const pageType = "posts";
  return {
    props: { pageType },
  };
}
