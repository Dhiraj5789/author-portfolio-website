import { LandingContent } from "../modules/landing-content";
import TemporaryDrawer from "../modules/nav-drawer";
import { ProfilePitcure } from "../modules/profile-picture";

export default function Home() {
  return (
    <>
      <nav>
        <TemporaryDrawer />
      </nav>
      <ProfilePitcure />
      <main>
        <LandingContent />
        <section>
          <h3>
            <em>The Anthropocee Reviewed </em>
          </h3>
          <p>
            The Anthropocene Reviewed book is out now! The book is a a deeply
            moving and insightful collection of personal essays from #1
            bestselling author John Green, adapted from his critically acclaimed
            podcast The Anthropocene Reviewed. Available now.
          </p>
        </section>
      </main>
    </>
  );
}
