import type { AppProps } from "next/app";
import Head from "next/head";
import { Main, Aside, H1 } from "../modules/common-styles";
import { Article } from "../modules/landing-content/styles";
import TemporaryDrawer from "../modules/nav-drawer";
import "./global.css";

export default function App({ Component, pageProps }: AppProps) {
  const { pageType } = pageProps;
  let asideChildren;
  switch (pageType) {
    case "contact":
      asideChildren = "Contact";
      break;
    case "bio":
      asideChildren = "Bio";
      break;
    case "posts":
      asideChildren = "Posts";
      break;
    default:
      asideChildren = "Home";
  }
  return (
    <>
      <Head>
        <title>CA Manisha Mistry</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav>
        <TemporaryDrawer />
      </nav>
      <Aside pageType={pageType}>
        <Article>
          <H1>{asideChildren}</H1>
        </Article>
      </Aside>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
