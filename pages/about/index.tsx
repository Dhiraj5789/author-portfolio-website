import { AUTHOR } from "../../data";
import {
  CommonSection,
  H3,
  LinedH2,
  ResponsiveImage,
  SectionLarge,
} from "../../modules/common-styles";
import { LandingLink } from "../../modules/landing-content/styles";

export default function Bio() {
  return (
    <>
      <SectionLarge>
        <H3>About</H3>
        <LinedH2>
          <em>Life Coach</em>
        </LinedH2>
        <LinedH2>
          <em>Coach to CA students</em>
        </LinedH2>
        <LinedH2>
          <em>Content Writer</em>
        </LinedH2>
      </SectionLarge>
      <CommonSection>
        <H3>Education</H3>
        <LinedH2>
          <em>Charted Accountant</em>
        </LinedH2>
        <p>ICAI - The Institute of Chartered Accountants of India</p>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>Commerce Graduate</em>
        </LinedH2>
        <p>HR College, Mumbai</p>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>Grade 10</em>
        </LinedH2>
        <p>CBSE, Gopa Birla Memorial School, Mumbai</p>
      </CommonSection>

      <SectionLarge>
        <ResponsiveImage src="https://ucarecdn.com/0c8d5b0e-5d5e-410e-8528-984c7f93f376/Unknown.jpeg" />
      </SectionLarge>
      <SectionLarge>
        <ResponsiveImage src="https://ucarecdn.com/e540a55d-41d2-4d27-a4e0-26567961a631/Unknown1.jpeg" />
      </SectionLarge>
    </>
  );
}

export async function getServerSideProps() {
  const pageType = "about";
  return {
    props: { pageType }, // will be passed to the aside component as props
  };
}
