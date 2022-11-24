import { LandingContent } from "../../modules/landing-content";
import Title from "author-portfolio-website/pages/home/title.png";
import {
  CommonSection,
  H3,
  LinedH2,
  SectionLarge,
} from "../../modules/common-styles";
import Bio from "../bio";

export default function Home() {
  return (
    <>
      <img
        src="https://ucarecdn.com/bab05112-c6ba-4ac5-87dd-d7a07085e28b/-/preview/1000x400/-/format/auto/-/quality/smart_retina/"
        alt="Picture of the author"
        width="250px"
        height="150px"
      />
      <SectionLarge>
        {/* <LinedH2>
        <em>
          About <strong>{AUTHOR}</strong>
        </em>
      </LinedH2> */}
        {/* <H3>
        John Green is the #1 New York Times bestselling author of Looking for
        Alaska, An Abundance of Katherines, Paper Towns, The Fault in Our Stars,
        and Turtles All the Way Down. He is also the coauthor, with David
        Levithan, of Will Grayson, Will Grayson. He was the 2006 recipient of
        the Michael L. Printz Award, a 2009 Edgar Award winner, and has twice
        been a finalist for the Los Angeles Times Book Prize. Green’s books have
        been published in more than 55 languages and over 24 million copies are
        in print.
      </H3> */}
        <H3>
          When things are sorted in mind things are definitely sorted in life.
        </H3>
        <p>Yes, that's true!!!</p>
        <p>
          So why not take cautious steps together towards decluttering our mind
          and living the best version of ourselves.
        </p>
        <p>A warm welcome and a virtual hug to all of you.</p>
        <p>
          Nowadays, in the busy schedule it has become all the move imperative
          to take care of ourselves. Earlier, when life was slow, coaching was
          really not required. But today to cope up with the fast moving pace of
          life, it is necessary to take a pause, deep breath and gain a better
          understanding of life.{" "}
        </p>
        <p>
          When things are sorted in mind things are definitely sorted in life.
        </p>
        <p>
          {" "}
          The road ahead will be exciting and comfortable challenging and
          ultimately one of the most rich and valuable experience you will ever
          have and I will be with you at every step forward. Thank you for
          believing in yourself and believing in ME.
        </p>
        <p>
          I honour your decision and commitment. With deep love and endless
          appreciation appreciation
        </p>
        <br />
        <br />
      </SectionLarge>
      {/* <LandingContent />
      <CommonSection>
        <LinedH2>
          <em>Press & publicity</em>
        </LinedH2>

        <p>
          Questions about press and publicity should be directed to Elyse
          Marshall, whose email address is emarshall((@))penguinrandomhouse.com,
          except obviously without the parentheses.
        </p>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>Press & publicity</em>
        </LinedH2>

        <p>
          Questions about press and publicity should be directed to Elyse
          Marshall, whose email address is emarshall((@))penguinrandomhouse.com,
          except obviously without the parentheses.
        </p>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>Press & publicity</em>
        </LinedH2>

        <p>
          Questions about press and publicity should be directed to Elyse
          Marshall, whose email address is emarshall((@))penguinrandomhouse.com,
          except obviously without the parentheses.
        </p>
      </CommonSection> */}
    </>
  );
}
