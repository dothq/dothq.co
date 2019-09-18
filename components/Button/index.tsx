import { StyledButton } from "./style";

export const Button = ({
  children,
  iconRight,
  iconLeft,
  onClick
}: {
  children?: any;
  iconRight?: any;
  iconLeft?: any;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <StyledButton iconLeft={iconLeft} iconRight={iconRight} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
