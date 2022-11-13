import { Article } from "../landing-styles";
import {
  landingSection as LandingSection,
  landingParagraph as Paragraph,
  A,
} from "./styles";

export const LandingContent = ({ data }: { data: string }) => {
  const booksWritten = [
    "Looking for Alaska",
    "An Abundance of Katherines",
    "Paper Towns",
    "The Fault in Our Stars",
    "Turtles All the Way Down",
    "The Anthropocene Reviewed",
  ];
  return (
    <LandingSection>
      <Article>
        <Paragraph>
          John Green is the New York Times bestselling author of{" "}
          {booksWritten.map((book, idx) => {
            const bookName =
              idx === booksWritten.length - 1 ? ` and ${book}.` : ` ${book},`;
            return <A>{bookName}</A>;
          })}{" "}
          He is one half of the vlogbrothers on YouTube and co-creator of
          educational series Crash Course.
        </Paragraph>
        <br />
        <Paragraph>
          <A>More about John</A>
        </Paragraph>
      </Article>
    </LandingSection>
  );
};
