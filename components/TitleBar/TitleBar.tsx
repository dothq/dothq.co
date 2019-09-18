import {
  NavBar,
  Logo,
  NavLeft,
  NavRight,
  Hamburger,
  HamburgerNavRight,
  HamburgerNavLeft
} from "./style";
import { Button } from "./../Button/index";
import { HamburgerIcon } from "./../HamburgerIcon/style";

export const homePage = () => {
  window.location.href = "/";
};

export const navigate = (loc: any) => {
  window.location.href = loc;
};

export const displayHamburger: boolean = true;

export const TitleBar = () => {
  return (
    <NavBar>
      <NavLeft>
        <Logo
          logoImage={"https://getdot.js.org/src/icon.png"}
          onClick={homePage}
        />
      </NavLeft>
      <NavRight>
        <Button onClick={() => navigate("/download")}>Download</Button>
        <Button
          onClick={() => navigate("https://translate.dotbrowser.me")}
          iconRight={"/static/launch.svg"}
        >
          Translate
        </Button>
        <Button onClick={() => navigate("/sign-in")}>Sign in</Button>
      </NavRight>
      <HamburgerIcon></HamburgerIcon>
    </NavBar>
  );
};

export const MobileTitleBar = () => {
  return (
    <Hamburger onClickEvent={displayHamburger}>
      <HamburgerNavLeft>
        <Logo
          logoImage={"https://getdot.js.org/src/icon.png"}
          onClick={homePage}
        />
      </HamburgerNavLeft>
      <HamburgerNavRight>
        <Button onClick={() => navigate("/download")}>Download</Button>
        <Button
          onClick={() => navigate("https://translate.dotbrowser.me")}
          iconRight={"/static/launch.svg"}
        >
          Translate
        </Button>
        <Button onClick={() => navigate("/sign-in")}>Sign in</Button>
      </HamburgerNavRight>
    </Hamburger>
  );
};

export const MobileNav = () => {
  return (
    <NavBar>
      <NavLeft>
        <Logo
          logoImage={"https://getdot.js.org/src/icon.png"}
          onClick={homePage}
        />
      </NavLeft>
      <NavRight>
        <HamburgerIcon>ok</HamburgerIcon>
      </NavRight>
    </NavBar>
  );
};
