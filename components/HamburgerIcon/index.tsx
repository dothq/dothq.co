import { HamburgerImage, HamburgerImageWrap } from "./style";
import { HamburgerState } from "../TitleBar/TitleBar";

export const hamburgerState = () => {
  if (HamburgerState.state == false) HamburgerState.state = true;
  HamburgerState.state = false;
};

export const HamburgerIcon = ({
  onClick
}: {
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <HamburgerImageWrap onClick={onClick}>
      <HamburgerImage src={"../static/hamburger.svg"} />
    </HamburgerImageWrap>
  );
};
