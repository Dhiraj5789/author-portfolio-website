import type { AppProps } from "next/app";
import TemporaryDrawer from "../modules/nav-drawer";
import "./global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <TemporaryDrawer />
      </nav>
      <Component {...pageProps} />
    </>
  );
}
