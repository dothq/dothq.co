import styled, { css } from "styled-components";

export const NavBar = styled.div`
  height: 80px;
  display: none;

  @media screen and (min-width: 1772px) {
    padding: 0 550px !important;
  }
  @media screen and (min-width: 1772px) {
    padding: 0 350px !important;
  }
  @media screen and (min-width: 1040px) {
    padding: 0 100px;
  }

  @media screen and (min-width: 1000px) {
    display: block;
  }
`;

export const Logo = styled.div`
  ${({ logoImage }: { logoImage: any }) => css`
    background: url(${logoImage}) 50% 50% no-repeat;
    width: 75px;
    height: 75px;
    background-size: 50px;
    filter: invert(1);
    cursor: pointer;
  `}
`;

export const NavLeft = styled.div`
  float: left;
`;

export const NavRight = styled.div`
  float: right;
  bottom: -14px;
  position: relative;
  display: flex;
`;

export const Hamburger = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s opacity;

  ${({ onClickEvent }: { onClickEvent: boolean }) => css`
    opacity: ${onClickEvent ? "1" : "0"};
    pointer-events: ${onClickEvent ? "all" : "none"};
  `}

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const HamburgerNavLeft = styled.div`
  top: 0px;
  position: absolute;
`;

export const HamburgerNavRight = styled.div`
  float: right;
  bottom: -14px;
  position: relative;
  transform: scale(1.5);
`;
