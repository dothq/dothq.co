import { StyledButton } from "./style";

export const Button = ({
  children,
  iconRight,
  iconLeft,
  onClick,
  page,
  style
}: {
  children?: any;
  iconRight?: any;
  iconLeft?: any;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
  page?: any;
  style?: any;
}) => {
  return (
    <StyledButton
      iconLeft={iconLeft}
      iconRight={iconRight}
      onClick={onClick}
      page={page}
      style={style}
    >
      {children}
    </StyledButton>
  );
};
