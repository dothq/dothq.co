import styled, { css } from "styled-components";

export const StyledFooter = styled.div`
  height: 280px;
  text-align: center;
  background-color: white;

  @media screen and (min-width: 1772px) {
    padding: 0 550px !important;
  }
  @media screen and (min-width: 1772px) {
    padding: 0 350px !important;
  }
  @media screen and (min-width: 1040px) {
    padding: 0 100px;
  }
`;

export const Container = styled.div`
  padding: 0 150px;
`;

export const FooterItems = styled.ul`
  margin: 1.5em 0 0;
  padding: 0;
  list-style: none;
`;

export const FooterItem = styled.li`
  margin: 0 0.5em;
  padding: 0;
  overflow: hidden;
`;
