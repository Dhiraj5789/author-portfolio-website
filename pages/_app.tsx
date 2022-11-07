import type { AppProps } from "next/app";
import TemporaryDrawer from "../modules/nav-drawer";
import { ProfilePitcure } from "../modules/profile-picture";
import "./global.css";
import { Main } from "./styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <TemporaryDrawer />
      </nav>
      <ProfilePitcure />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
