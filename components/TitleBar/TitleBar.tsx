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
import { Style } from "react-style-tag";

export const homePage = () => {
  window.location.href = "/";
};

export const navigate = (loc: any) => {
  window.location.href = loc;
};

export const TitleBar = (page: any) => {
  return (
    <NavBar>
      <Style>{`
        body {
          background-color: #f8f8f8 !important;
        }
      `}</Style>
      <NavLeft>
        <Logo
          logoImage={"https://dotbrowser.me/static/icon.png"}
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
        <HamburgerIcon />
      </HamburgerNavRight>
    </NavBar>
  );
};

export const DarkTitleBar = (page: any) => {
  return (
    <NavBar darkMode={true}>
      <Style>{`
        body {
          background-color: var(--accent-color) !important;
        }
      `}</Style>
      <NavLeft>
        <Logo
          logoImage={"https://dotbrowser.me/static/icon.png"}
          onClick={homePage}
          darkMode={true}
        />
      </NavLeft>
      <NavRight darkMode={true}>
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
        <HamburgerIcon />
      </HamburgerNavRight>
    </NavBar>
  );
};

export const MobileTitleBar = () => {
  return (
    <Hamburger>
      <HamburgerNavLeft>
        <Logo
          logoImage={"https://dotbrowser.me/static/icon.png"}
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
