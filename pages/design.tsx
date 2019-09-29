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
import { TitleBar, MobileTitleBar } from "../components/TitleBar/TitleBar";
import { Section } from "../components/Section";
import { StyledImage } from "../components/Section/style";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { Button } from "../components/Button";
import Baseplate from "../components/Baseplate/index";
import { Heading, NavigationSection } from "./../components/Footer/style";
import { Logo } from "../components/TitleBar/style";

const App = () => {
  return (
    <StyledApp classList="is-desktop">
      <Baseplate darkMode={false} />
      <Section>
        <Title>Our Design System</Title>
        <Subtitle>
          We follow these design guidelines and re-usable components to create
          our site.
        </Subtitle>
        <div
          style={{
            display: "inline-flex",
            textAlign: "center",
            marginLeft: "60px"
          }}
        >
          <NavigationSection>
            <Heading style={{ color: "black" }}>Titles and Text</Heading>
            <Heading style={{ color: "black" }}>heading</Heading>
            <Title>h1</Title>
            <Subtitle>h2</Subtitle>
            <Paragraph>paragraph</Paragraph>
          </NavigationSection>
          <NavigationSection>
            <Heading style={{ color: "black" }}>Buttons and Navigation</Heading>
            <HeroButton darkMode={true} style={{ marginLeft: "25px" }}>
              HeroButton
            </HeroButton>
            <Button>Button</Button>
            <Button
              iconRight={"../static/hamburger.svg"}
              style={{ width: "100px", marginLeft: "20px" }}
            >
              Icon button
            </Button>
          </NavigationSection>
          <NavigationSection>
            <Heading style={{ color: "black" }}>Images and lines</Heading>
            <Logo logoImage={"../static/icon.png"} title="Logo component" />
            <Seperator
              title="Seperator component"
              style={{
                width: "110px",
                border: "1px solid black"
              }}
            />
          </NavigationSection>
        </div>
      </Section>
      <Footer />
      <GlobalStyle />
    </StyledApp>
  );
};

export default App;
