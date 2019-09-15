import styled, { createGlobalStyle } from "styled-components";
import { importFont } from "../utils/importFont";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
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
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Home = styled.div``;
