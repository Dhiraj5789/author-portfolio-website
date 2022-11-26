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
            <PhoneIcon />
            <a href="tel:+919351016845">+919351016845</a>
          </em>
        </LinedH2>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>
            <InstagramIcon />
            <a
              href="https://www.instagram.com/ca_manisha.mistry.908/"
              target="blank"
            >
              ca_manisha.mistry.908
            </a>
          </em>
        </LinedH2>
      </CommonSection>
      <CommonSection>
        <LinedH2>
          <em>
            <EmailIcon />
            <a href="mailto:mmistry9117@gmail.com" target="blank">
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
    props: { pageType }, // will be passed to the aside component as props
  };
}
