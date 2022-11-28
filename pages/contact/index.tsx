import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
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
          Hi. Manisha here. The best way to contact me depends upon the nature
          of your inquiry. So…
        </H3>
      </SectionLarge>

      <CommonSection>
        <LinedH2>
          <em>
            <a href="tel:+919351016845">
              <PhoneIcon />
              +919351016845
            </a>
          </em>
        </LinedH2>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>
            <a
              href="https://www.instagram.com/ca_manisha.mistry.908/"
              target="blank"
            >
              <InstagramIcon />
              ca_manisha.mistry.908
            </a>
          </em>
        </LinedH2>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>
            <a href="mailto:mmistry9117@gmail.com" target="blank">
              <EmailIcon />
              mmistry9117@gmail.com
            </a>
          </em>
        </LinedH2>
      </CommonSection>
    </>
  );
}

export async function getServerSideProps() {
  const pageType = "contact";
  return {
    props: { pageType },
  };
}
