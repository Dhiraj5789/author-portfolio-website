import { PostsContainer } from "../../modules/common-styles";

export default function Posts() {
  const instagramPostsLinks = [
    "https://www.instagram.com/p/ClBaNAvvLh_",
    "https://www.instagram.com/p/Cj4iPDBvLuT",
    "https://www.instagram.com/p/CkzmySvvcDR",
    "https://www.instagram.com/p/Ckx7mn3vav2",
    "https://www.instagram.com/p/CksqeOevH4G",
  ];
  return (
    <>
      <PostsContainer>
        {instagramPostsLinks.map((post) => (
          <iframe src={`${post}/embed`}></iframe>
        ))}
      </PostsContainer>
    </>
  );
}

export async function getServerSideProps() {
  const pageType = "posts";
  return {
    props: { pageType }, // will be passed to the aside component as props
  };
}
