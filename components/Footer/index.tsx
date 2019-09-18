import { StyledFooter, Container } from "./style";
import { StyledImage } from "./../Section/style";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledImage
          src={"https://getdot.js.org/src/icon.png"}
          style={{ filter: "greyscale(100%) invert(1)" }}
        ></StyledImage>
      </Container>
    </StyledFooter>
  );
};
