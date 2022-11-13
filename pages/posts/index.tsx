import { PostsContainer } from "../../modules/common-styles";

export default function Posts() {
  const instagramPostsLinks = [
    "https://www.instagram.com/p/Cj4iPDBvLuT",
    "https://www.instagram.com/p/CkzmySvvcDR",
    "https://www.instagram.com/p/Ckx7mn3vav2",
    "https://www.instagram.com/p/CksqeOevH4G",
    "https://www.instagram.com/p/CkmlU_MoD4R",
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
