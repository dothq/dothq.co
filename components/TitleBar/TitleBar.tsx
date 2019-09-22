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
import { HamburgerIcon } from "../HamburgerIcon";
import { useState } from "react";

export const homePage = () => {
  window.location.href = "/";
};

export const navigate = (loc: any) => {
  window.location.href = loc;
};

export class HamburgerState {
  public static state: boolean = false;
}

new HamburgerState();

setInterval(() => {
  console.log(HamburgerState.state);
}, 1);

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
          onClick={() => navigate("https://github.com/dot-browser/desktop")}
        >
          GitHub
        </Button>
        <Button
          onClick={() => navigate("https://translate.dotbrowser.me")}
          iconRight={"/static/launch.svg"}
        >
          Translate
        </Button>
        <Button onClick={() => navigate("/sign-in")}>Sign in</Button>
      </NavRight>
      <HamburgerNavRight>
        <HamburgerIcon onClick={() => (HamburgerState.state = true)} />
      </HamburgerNavRight>
    </NavBar>
  );
};

export const MobileTitleBar = () => {
  return (
    <Hamburger visible={HamburgerState.state}>
      <HamburgerNavLeft>
        <Logo
          logoImage={"https://getdot.js.org/src/icon.png"}
          onClick={homePage}
        />
      </HamburgerNavLeft>
      <HamburgerNavRight>
        <Button onClick={() => navigate("/download")}>Download</Button>
        <Button
          onClick={() => navigate("https://github.com/dot-browser/desktop")}
        >
          GitHub
        </Button>
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
