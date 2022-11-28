import {
  H3,
  LinedH2,
  ResponsiveImage,
  SectionLarge,
} from "../../modules/common-styles";
import { About, Eductation } from "../../modules/constants";

export default function Bio() {
  return (
    <>
      <SectionLarge>
        <H3>About</H3>
        {About.map((about) => (
          <LinedH2>
            <em>{about}</em>
          </LinedH2>
        ))}
      </SectionLarge>
      <SectionLarge>
        <H3>Education</H3>
        {Eductation.map((degree) => (
          <>
            <LinedH2>
              <em>{degree.certificate}</em>
            </LinedH2>
            <p>
              - <i>{degree.institute}</i>
            </p>
          </>
        ))}
      </SectionLarge>
      <SectionLarge>
        <ResponsiveImage src="https://ucarecdn.com/0c8d5b0e-5d5e-410e-8528-984c7f93f376/Unknown.jpeg" />
        <ResponsiveImage src="https://ucarecdn.com/e540a55d-41d2-4d27-a4e0-26567961a631/Unknown1.jpeg" />
      </SectionLarge>
    </>
  );
}

export async function getServerSideProps() {
  const pageType = "about";
  return {
    props: { pageType },
  };
}
