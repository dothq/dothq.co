import { StyledSection, Container } from "./style";

export const Section = ({
  children,
  style
}: {
  children?: any;
  style?: any;
}) => {
  return (
    <StyledSection style={style}>
      <Container>{children}</Container>
    </StyledSection>
  );
};
