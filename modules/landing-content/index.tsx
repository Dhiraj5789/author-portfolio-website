import {
  landingSection as LandingSection,
  landingParagraph as Paragraph,
  A,
} from "./styles";

export const LandingContent = ({ data }: { data: string }) => {
  return (
    <LandingSection>
      <article>
        <Paragraph>{data}</Paragraph>
        <br />
        <Paragraph>
          <A>More about John</A>
        </Paragraph>
      </article>
    </LandingSection>
  );
};
