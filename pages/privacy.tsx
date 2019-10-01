import {
  StyledApp,
  Title,
  GlobalStyle,
  Home,
  Subtitle,
  Strong,
  HeroButton,
  Seperator,
  Paragraph
} from "./styles";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import Baseplate from "../components/Baseplate/index";
import { Heading } from "../components/Footer/style";

const PrivacyApp = () => {
  return (
    <StyledApp classList="is-desktop">
      <Baseplate darkMode={false} />
      <Section>
        <Title>Privacy Policy</Title>
        <Subtitle>Last modified: 1st October 2019</Subtitle>
        <br />
        <Heading style={{ color: "black", fontSize: "16px" }}>
          Introduction
        </Heading>
        <Paragraph style={{ fontSize: "20px", lineHeight: "22px" }}>
          Your privacy is important to us. It is Dot Browser's policy to respect
          your privacy regarding any information we may collect from you across
          our website, <a href="https://dotbrowser.me">https://dotbrowser.me</a>
          , and other sites we own and operate.
        </Paragraph>
        <br />
        <Heading style={{ color: "black", fontSize: "16px" }}>
          Why we ask for information
        </Heading>
        <Paragraph style={{ fontSize: "20px", lineHeight: "22px" }}>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </Paragraph>
        <br />
        <Heading style={{ color: "black", fontSize: "16px" }}>
          How long do we keep this data?
        </Heading>
        <Paragraph style={{ fontSize: "20px", lineHeight: "22px" }}>
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorised access, disclosure, copying, use or
          modification.
        </Paragraph>
        <br />
        <Heading style={{ color: "black", fontSize: "16px" }}>
          Is my information sourced to third-parties?
        </Heading>
        <Paragraph style={{ fontSize: "20px", lineHeight: "22px" }}>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </Paragraph>
        <br />
        <Heading style={{ color: "black", fontSize: "16px" }}>
          Links notice
        </Heading>
        <Paragraph style={{ fontSize: "20px", lineHeight: "22px" }}>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </Paragraph>
        <br />
        <Heading style={{ color: "black", fontSize: "16px" }}>
          Other information
        </Heading>
        <Paragraph style={{ fontSize: "20px", lineHeight: "22px" }}>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </Paragraph>
        <Paragraph style={{ fontSize: "20px", lineHeight: "22px" }}>
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us on hello@dotbrowser.me
        </Paragraph>
      </Section>
      <Footer style={{ position: "inherit" }} />
      <GlobalStyle />
    </StyledApp>
  );
};

export default PrivacyApp;
