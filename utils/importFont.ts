import { css } from "styled-components";

export const importFont = (fontName: "robotoMono" | "roboto") => {
  return css`
    ${require("./fonts/" + fontName)[fontName]}
  `;
};
