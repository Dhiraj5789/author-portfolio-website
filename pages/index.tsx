import { LandingContent } from "../modules/landing-content";
import { LinedHeadingSection } from "../modules/lined-section";
import TemporaryDrawer from "../modules/nav-drawer";
import { ProfilePitcure } from "../modules/profile-picture";
import { Main } from "./styles";

export default function Home() {
  return (
    <>
      <nav>
        <TemporaryDrawer />
      </nav>
      <ProfilePitcure />
      <Main>
        <LandingContent />
        <LinedHeadingSection />
        <LinedHeadingSection />
        <LinedHeadingSection />
      </Main>
    </>
  );
}
