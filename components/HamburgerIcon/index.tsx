import { HamburgerImage, HamburgerImageWrap } from "./style";

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
