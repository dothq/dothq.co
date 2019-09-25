import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  min-height: 500px;
  height: auto;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;

  ${({ darkMode }: { darkMode: boolean }) => css`
    background-color: ${darkMode == true ? "var(--accent-color)" : "none"};
    --theme-color: ${darkMode == true ? "#171717" : "#f8f8f8"} !important;
  `}

  @media screen and (min-width: 1000px) {
    display: flex;
  }

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
  display: block;
  line-height: 15px;

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

export const StyledImage = styled.img``;
