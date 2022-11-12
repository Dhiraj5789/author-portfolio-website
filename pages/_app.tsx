import type { AppProps } from "next/app";
import TemporaryDrawer from "../modules/nav-drawer";
import { ProfilePitcure } from "../modules/profile-picture";
import "./global.css";
import { Main } from "./styles";

export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  const { profilePictureProp } = pageProps;
  return (
    <>
      <nav>
        <TemporaryDrawer />
      </nav>
      <ProfilePitcure profilePictureProp={profilePictureProp} />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
