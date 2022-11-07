import { LandingContent } from "../../modules/landing-content";
import { HomePageData } from "../../data";
import { LinedHeadingSection } from "../../modules/lined-section";

export default function Home() {
  return (
    <>
      <LandingContent data={HomePageData.LandingPara} />
      {HomePageData.Sections.map((section) => {
        const { title, paragraph } = section;
        return (
          <LinedHeadingSection key={title} title={title} content={paragraph} />
        );
      })}
    </>
  );
}
