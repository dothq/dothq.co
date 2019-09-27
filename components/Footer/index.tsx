import {
  StyledFooter,
  Container,
  FooterItems,
  FooterItem,
  Heading,
  NavigationSection,
  NavigationSubtitle,
  NavigationTitle
} from "./style";
import { StyledImage } from "./../Section/style";
import { Button } from "./../Button/index";
import { Logo } from "../TitleBar/style";
import {
  Link,
  Title,
  Subtitle,
  Seperator,
  HeroButton
} from "../../pages/styles";

export const Footer = ({ darkMode }: { darkMode?: any }) => {
  return (
    <StyledFooter darkMode={darkMode}>
      <FooterItems>
        <NavigationSection>
          <Logo
            logoImage={"../static/icon.png"}
            style={{
              border: "3px solid #242424",
              borderRadius: "100px",
              width: "35px",
              height: "35px",
              filter: `${darkMode == true ? "invert(0)" : "invert(1)"}`
            }}
          />
        </NavigationSection>
        <div style={{ display: "inline-flex" }}>
          <NavigationSection>
            <Heading>Product</Heading>
            <a href={"/download"}>Download</a>
            <a href={"https://translate.dotbrowser.me"}>Translate</a>
            <a href={"/me"}>Account</a>
          </NavigationSection>
          <NavigationSection>
            <Heading>Resources</Heading>
            <a href={"/help"}>Help centre</a>
            <a href={"/design"}>Design</a>
          </NavigationSection>
          <NavigationSection>
            <Heading>Developers</Heading>
            <a href={"https://github.com/dot-brower/desktop"}>GitHub</a>
            <a href={"/api"}>API</a>
          </NavigationSection>
          <NavigationSection>
            <Heading>More</Heading>
            <a href={"/terms"}>Terms</a>
            <a href={"/privacy"}>Privacy</a>
            <a href={"/contact"}>Contact us</a>
          </NavigationSection>
        </div>
      </FooterItems>
      <div style={{ paddingLeft: "30px", lineHeight: "15px" }}>
        <Seperator darkMode={darkMode} />
        <NavigationTitle style={{ textAlign: "left", marginTop: "60px" }}>
          What's in it for me?
        </NavigationTitle>
        <NavigationSubtitle style={{ textAlign: "left", marginBottom: "60px" }}>
          All the privacy features, a clean browser and no ads. And it's free.
        </NavigationSubtitle>
        <HeroButton
          href={"/download"}
          darkMode={darkMode == true ? false : true}
          noColor={false}
          style={{
            float: "right",
            marginTop: "-120px",
            padding: "0px 15px"
          }}
        >
          Download
        </HeroButton>
        <Seperator darkMode={darkMode} />
      </div>
    </StyledFooter>
  );
};
