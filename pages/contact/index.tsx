import { H2 } from "../../modules/lined-section/styles";
import { H3 } from "../bio/styles";
import { Section } from "./styles";

export default function Contact() {
  return (
    <>
      <Section>
        <H3>
          Hi. John here. The best way to contact me depends upon the nature of
          your inquiry. So…
        </H3>
      </Section>

      <Section>
        <H2>
          <em>Press & publicity</em>
        </H2>

        <p>
          Questions about press and publicity should be directed to Elyse
          Marshall, whose email address is emarshall((@))penguinrandomhouse.com,
          except obviously without the parentheses.
        </p>
      </Section>

      <Section>
        <H2>
          <em>Press & publicity</em>
        </H2>

        <p>
          Questions about press and publicity should be directed to Elyse
          Marshall, whose email address is emarshall((@))penguinrandomhouse.com,
          except obviously without the parentheses.
        </p>
      </Section>

      <Section>
        <H2>
          <em>Press & publicity</em>
        </H2>

        <p>
          Questions about press and publicity should be directed to Elyse
          Marshall, whose email address is emarshall((@))penguinrandomhouse.com,
          except obviously without the parentheses.
        </p>
      </Section>

      <Section>
        <H2>
          <em>Press & publicity</em>
        </H2>

        <p>
          Questions about press and publicity should be directed to Elyse
          Marshall, whose email address is emarshall((@))penguinrandomhouse.com,
          except obviously without the parentheses.
        </p>
      </Section>
    </>
  );
}

export async function getServerSideProps(context) {
  const profilePictureProp = "contact";
  return {
    props: { profilePictureProp }, // will be passed to the page component as props
  };
}
