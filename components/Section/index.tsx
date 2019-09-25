import { StyledSection, Container } from "./style";

export const Section = ({
  children,
  style,
  darkMode
}: {
  children?: any;
  style?: any;
  darkMode?: boolean;
}) => {
  return (
    <StyledSection style={style} darkMode={darkMode}>
      <Container>{children}</Container>
    </StyledSection>
  );
};
