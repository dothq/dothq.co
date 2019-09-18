import {
  StyledApp,
  Title,
  GlobalStyle,
  Home,
  Subtitle,
  Strong
} from "./styles";
import { TitleBar } from "../components/TitleBar/TitleBar";
import { Section } from "../components/Section";
import { StyledImage } from "./../components/Section/style";
import { Baseplate } from "../components/Baseplate";

const AppDownloads = () => {
  return (
    <StyledApp>
      <Baseplate />
      <Section>
        <Title>Download Dot Browser</Title>
        <Subtitle>
          <Strong>Dot Browser</Strong> is a privacy-centric browser with an
          intuitive interface and a robust ad-blocker.
        </Subtitle>

        <Section>
          <StyledImage
            src={"../static/Dot-landing.png"}
            draggable={false}
          ></StyledImage>
        </Section>
      </Section>
      <GlobalStyle />
    </StyledApp>
  );
};

export default AppDownloads;
