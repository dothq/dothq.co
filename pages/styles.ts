import styled, { createGlobalStyle, css } from "styled-components";
import { importFont } from "../utils/importFont";
import { TextStandards } from "../utils/standard";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        background-color: var(--theme-color);
        ${importFont("robotoMono")}
    }


    :root {
        --accent-color: rgb(23, 23, 23);
        --secondary-color: #0eb8de;
    }
`;

export const StyledApp = styled.div`
  background-color: var(--theme-color);
  height: 100vh;
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 2.3em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;

  ${({ darkMode }: { darkMode: any }) => {
    return css`
      color: ${darkMode == false ? "white" : "black"};
    `;
  }}

  ${TextStandards()}
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 100;

  ${({ darkMode }: { darkMode: any }) => {
    return css`
      color: ${darkMode == false ? "#d1d1d1" : "#494949 !important"};
    `;
  }}

  ${TextStandards()}
`;

export const Strong = styled.strong`
  font-weight: 400;
`;

export const Home = styled.div``;

const Page = () => {
  return false;
};

export default Page;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
`;

export const FlexBox = styled.div`
  background-color: #f1f1f1;
  width: 50%;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
`;

export const HeroButton = styled.a`
  padding: 14px 25px;
  border-radius: 5px;
  font-family: Segoe UI;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  line-height: 60px;
  font-weight: 500;
  transition: box-shadow 0.4s cubic-bezier(0.17, 0.84, 0.24, 1.21) 0s;
  margin-right: 30px;
  text-decoration: none;

  ${({ darkMode, noColor }: { darkMode: any; noColor?: boolean }) => {
    return css`
      background-color: ${noColor == true
        ? "none"
        : darkMode == false
        ? "white"
        : "var(--accent-color)"};
      color: ${noColor == true
        ? "white"
        : darkMode == false
        ? "black"
        : "white"};
      --color-shadow: ${noColor == true ? "none" : "0 0 0px 2px #a4a4a4"};
    `;
  }}

  &:hover {
    box-shadow: var(--color-shadow);
  }
`;

export const Buttons = styled.div`
  height: 60px;
  text-align: center;
`;

export const Link = styled.a`
  cursor: pointer;
  border-radius: 50px;
  user-select: none;
`;

export const HoverButton = styled.a`
  border-radius: 50px;
  transition: background-color 0.3s ease 0s;
  width: 24px;
  height: 24px;
  min-height: 24px;
  max-height: 24px;
  position: absolute;
  margin-left: 10px;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;
