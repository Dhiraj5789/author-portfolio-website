import { H2, Section } from "./styles";

export const LinedHeadingSection = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <Section>
    <H2>
      <em>{title}</em>
    </H2>
    <p>{content}</p>
  </Section>
);
