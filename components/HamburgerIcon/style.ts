import styled, { css } from "styled-components";

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 30px;

  &:after {
    content: "";
    width: 30px;
    height: 30px;
    background: url(static/hamburger.svg);
    top: 10px;
    right: 5px;
    background-size: contain;
    opacity: 0.3;
  }
`;
