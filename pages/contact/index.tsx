import {
  H3,
  LinedH2,
  CommonSection,
  SectionLarge,
} from "../../modules/common-styles";

export default function Contact() {
  return (
    <>
      <SectionLarge>
        <H3>
          Hi. John here. The best way to contact me depends upon the nature of
          your inquiry. So…
        </H3>
      </SectionLarge>

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
    </>
  );
}

export async function getServerSideProps() {
  const pageType = "contact";
  return {
    props: { pageType }, // will be passed to the aside component as props
  };
}
