import {
  landingSection as LandingSection,
  landingParagraph as Paragraph,
  A,
} from "./styles";

export const LandingContent = () => {
  return (
    <LandingSection>
      <article>
        <Paragraph>
          John Green is the New York Times bestselling author of{" "}
          <A>Looking for Alaska</A>, <A>An Abundance of Katherines</A>,{" "}
          <A>Paper Towns</A>, <A>The Fault in Our Stars</A>,{" "}
          <A>Turtles All the Way Down</A>, and <A>The Anthropocene Reviewed</A>.
          He is one half of the vlogbrothers on YouTube and co-creator of
          educational series Crash Course.
        </Paragraph>
        <br />
        <Paragraph><A>More about John</A></Paragraph>
      </article>
    </LandingSection>
  );
};
