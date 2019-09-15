import { StyledApp, Title, GlobalStyle, Home } from "./styles";
import { TitleBar } from "../components/TitleBar/TitleBar";

const App = () => {
  return (
    <StyledApp>
      <TitleBar />
      <GlobalStyle />
    </StyledApp>
  );
};

export default App;
