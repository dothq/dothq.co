import styled, { createGlobalStyle } from "styled-components";
import { importFont } from "../utils/importFont";
import { TextStandards } from "../utils/standard";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        background-color: #f8f8f8;
        ${importFont("robotoMono")}
    }


    :root {
        --accent-color: rgb(23, 23, 23);
        --secondary-color: #0eb8de;
    }
`;

export const StyledApp = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-size: 2.3em;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 500;

  ${TextStandards()}
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #494949 !important;
  font-weight: 100;

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
