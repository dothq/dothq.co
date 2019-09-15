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

const App = () => {
  return (
    <StyledApp>
      <TitleBar />
      <Section>
        <Title>It's time to ditch memory hogging browsers.</Title>
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

export default App;
