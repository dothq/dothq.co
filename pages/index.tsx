import {
  StyledApp,
  Title,
  GlobalStyle,
  Home,
  Subtitle,
  Strong
} from "./styles";
import { TitleBar, MobileTitleBar } from "../components/TitleBar/TitleBar";
import { Section } from "../components/Section";
import { StyledImage } from "./../components/Section/style";
import { Footer } from "../components/Footer";
import Head from "next/head";
import { Button } from "../components/Button";
import { Baseplate } from "./../components/Baseplate/index";

const App = () => {
  return (
    <StyledApp classList="is-desktop">
      <Baseplate />
      <Section>
        <Title>It's time to ditch memory hogging browsers.</Title>
        <Subtitle>
          <Strong>Dot</Strong> is a privacy-centric browser with an intuitive
          interface and a robust ad-blocker.
        </Subtitle>
        <Section>
          <StyledImage
            id="landing"
            src={"../static/Dot-landing.png"}
            draggable={false}
            style={{ width: "1800px" }}
          ></StyledImage>
        </Section>
        <Section
          style={{
            position: "absolute",
            top: "0px",
            width: "14000%",
            height: "87%",
            marginTop: "108px"
          }}
        ></Section>
      </Section>
      <Footer />
      <GlobalStyle />
    </StyledApp>
  );
};

export default App;
