import { StyledSection, Container } from "./style";

export const Section = ({ children }: { children?: any }) => {
  return (
    <StyledSection>
      <Container>{children}</Container>
    </StyledSection>
  );
};
