import { H3, LinedH2, SectionLarge, Strong } from "../../modules/common-styles";

export default function Bio() {
  return (
    <SectionLarge>
      <H3>
        “Chartered Accountancy”, is something generally looked upon in our
        society as one of the prestigious professional courses. Not easily
        students take up this as it is connected to various sayings that - - You
        need to study 12-15hrs a day consistently for a minimum of 5 years, OR -
        You need to leave everything and focus only on studies and SO ON……….
      </H3>
      <LinedH2>
        <em>BUT let me ask you a few questions?????</em>
      </LinedH2>
      <p>
        What if you are given only 3hrs a day instead of 12 hours to study? What
        if you are asked to cook for 10-12 people daily, every morning and
        evening, and with the time spared you are then sitting for your studies?
        What if nobody around you are really bothered whether how are your
        studies going on? No one to really motivate and support you (while this
        is something where the child needs constant support and good mental
        status to continue studying)? After serving as a mother, wife, a
        daughter in law hardly there is anything remaining in terms energy and
        time……….
      </p>
      <p>
        <Strong>HOW DOES ALL OF THAT FEEL???? </Strong>Just saying “not good” is
        REALLY not enough. I literally remember myself under constant pressure
        to clear my studies, just keeping my mouth zipped with fire burning
        inside me and my fists closed tight. We were like 4 generations under
        one roof. Things were so systematized that if the cup is supposed to be
        kept at a particular place, it has to be kept there OR if Mondays and
        Fridays are meant for some specific work to be done, it had to be done
        in that way ONLY. What I meant was, figuring out my time and my way was
        really very challenging for ME.
      </p>
      <p>
        BUT Alas,
        <i>
          {" "}
          with every struggle comes a success story. Our destination decides our
          path and my path was pretty clear to become a CA.
        </i>{" "}
        <br />
        Although my speed was slow owing to the baggage I was carrying, but what
        is important that I did not stop. Mind training, conscious prioritizing,
        selective outings selective meetings, time management, boundary setting
        were some of the techniques I used and they helped me reach my
        destination.
      </p>{" "}
      <p></p>
      My story would be incomplete if I did not mention about my father here. He
      was the one person who constantly supported me all in this journey. These
      were the three things he would tell me every time we happened to talk to
      each other- Manisha don’t quit…… Your life will change once you complete
      it……. Oversee the obstacles that will come in your way……...
      <p>
        And here I am…<i>CA MANISHA MISTRY</i> People have changed because I
        changed my perception, attitude towards them.
        <br />
        <em>
          Today I ‘am on a mission to help CA students overcome their fear,
          boost their confidence and to hand hold them and help study better
          with awesome study tips and tricks.
        </em>{" "}
      </p>
      <p>
        One takeaway I would love to give all of you is that have a mission in
        your life, work hard towards achieving it and{" "}
        <strong>BELIEVE ME</strong>, your life will change 360 degrees. Thank
        You.
      </p>
    </SectionLarge>
  );
}

export async function getServerSideProps() {
  const pageType = "bio";
  return {
    props: { pageType }, // will be passed to the aside component as props
  };
}
