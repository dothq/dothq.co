import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  min-height: 500px;
  height: auto;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const Container = styled.div`
  display: block;
  line-height: 15px;
`;

export const StyledImage = styled.img``;
