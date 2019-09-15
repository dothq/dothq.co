import { NavBar, Logo, NavLeft, NavRight } from "./style";
import { Button } from "./../Button/index";

export const TitleBar = () => {
  return (
    <NavBar>
      <NavLeft>
        <Logo logoImage={"https://getdot.js.org/src/icon.png"} />
      </NavLeft>
      <NavRight>
        <Button>Download</Button>
      </NavRight>
    </NavBar>
  );
};
