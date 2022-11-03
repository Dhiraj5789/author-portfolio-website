import {
  landingSection as LandingSection,
  landingParagraph as Paragraph,
} from "./styles";

export const LandingContent = () => {
  return (
    <LandingSection>
      <article>
        <Paragraph>
          John Green is the New York Times bestselling author of{" "}
          <a>Looking for Alaska</a>, <a>An Abundance of Katherines</a>,{" "}
          <a>Paper Towns</a>, <a>The Fault in Our Stars</a>,{" "}
          <a>Turtles All the Way Down</a>, and <a>The Anthropocene Reviewed</a>.
          He is one half of the vlogbrothers on YouTube and co-creator of
          educational series Crash Course.
        </Paragraph>
        <a>More About John</a>
      </article>
    </LandingSection>
  );
};
