import { StyledFooter, Container, FooterItems, FooterItem } from "./style";
import { StyledImage } from "./../Section/style";
import { Button } from "./../Button/index";
import { Logo } from "../TitleBar/style";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterItems>
        <FooterItem>
          <Logo logoImage={"https://dotbrowser.me/static/icon.png"} />
        </FooterItem>
      </FooterItems>
      <p>&copy; 2019 Dot Browser</p>
    </StyledFooter>
  );
};
