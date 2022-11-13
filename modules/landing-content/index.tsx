import {
  Article,
  LandingSection,
  LandingParagraph,
  LandingLink,
} from "./styles";

export const LandingContent = () => {
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
        <LandingParagraph>
          John Green is the New York Times bestselling author of{" "}
          {booksWritten.map((book, idx) => {
            const bookName =
              idx === booksWritten.length - 1 ? `and ${book}.` : ` ${book},`;
            return (
              <>
                {" "}
                <LandingLink>{bookName}</LandingLink>
              </>
            );
          })}{" "}
          He is one half of the vlogbrothers on YouTube and co-creator of
          educational series Crash Course.
        </LandingParagraph>
        <br />
        <LandingParagraph>
          <LandingLink>More about John</LandingLink>
        </LandingParagraph>
      </Article>
    </LandingSection>
  );
};
