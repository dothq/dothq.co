import styled, { css } from "styled-components";
import { TextStandards } from "../../utils/standard";

export const StyledFooter = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: 1772px) {
    padding: 0 550px !important;
  }
  @media screen and (min-width: 1772px) {
    padding: 0 350px !important;
  }
  @media screen and (min-width: 1040px) {
    padding: 0 100px;
  }

  ${({ darkMode }: { darkMode: boolean }) => css`
    --theme-color: ${darkMode == true ? "white" : "black"};
    --theme-filter: ${darkMode == true ? "brightness(0.8)" : "invert(0.2)"};
  `};
`;

export const Container = styled.div`
  padding: 0 150px;
`;

export const FooterItems = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export const FooterItem = styled.li`
  margin: 0 0.5em;
  padding: 0;
  overflow: hidden;
`;

export const Heading = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 700;
  line-height: 1.28571429;
  letter-spacing: normal;
  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--theme-color);
  mix-blend-mode: difference;
`;

export const NavigationSection = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 1.5rem 0 0 0;
  margin-right: 50px;

  a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    text-decoration: none;
    margin-bottom: 3px;
    color: var(--theme-color);
    filter: var(--theme-filter);
    font-size: 14px;
    line-height: 20px;

    &:hover {
      color: var(--theme-color);
      filter: brightness(1);
    }
  }
`;

export const NavigationTitle = styled.h1`
  font-size: 2.3em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;
  color: var(--theme-color);

  ${TextStandards()}
`;

export const NavigationSubtitle = styled.h2`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 100;
  color: var(--theme-color);

  ${TextStandards()}
`;
