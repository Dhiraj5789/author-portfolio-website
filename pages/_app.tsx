import type { AppProps } from "next/app";
import { Main, Aside } from "../modules/common-styles";
import TemporaryDrawer from "../modules/nav-drawer";
import "./global.css";

export default function App({ Component, pageProps }: AppProps) {
  const { pageType } = pageProps;
  let asideChildren;
  switch (pageType) {
    case "contact":
      asideChildren = <>Contact</>;
      break;
    default:
      asideChildren = <>Home</>;
  }
  return (
    <>
      <nav>
        <TemporaryDrawer />
      </nav>
      <Aside pageType={pageType}>{asideChildren}</Aside>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
