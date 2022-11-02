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
      <section>
        <article>
          <p>
            John Green is the New York Times bestselling author of <a>Looking for
            Alaska</a>, <a>An Abundance of Katherines</a>, <a>Paper Towns</a>, <a>The Fault in Our
            Stars</a>, <a>Turtles All the Way Down</a>, and <a>The Anthropocene Reviewed</a>. He
            is one half of the vlogbrothers on YouTube and co-creator of
            educational series Crash Course.
          </p>
        <p><a>More About John</a></p>
        </article>
      </section>
    </main>
      </>
  );
}
