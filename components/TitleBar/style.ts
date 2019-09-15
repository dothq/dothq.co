import styled, { css } from "styled-components";

export const NavBar = styled.div`
  height: 80px;

  @media screen and (min-width: 1772px) {
    padding: 0 550px !important;
  }
  @media screen and (min-width: 1772px) {
    padding: 0 350px !important;
  }
  @media screen and (min-width: 1040px) {
    padding: 0 200px;
  }
`;

export const Logo = styled.div`
  ${({ logoImage }: { logoImage: any }) => css`
    background: url(${logoImage}) 50% 50% no-repeat;
    width: 75px;
    height: 75px;
    background-size: 50px;
    filter: invert(1);
  `}
`;

export const NavLeft = styled.div`
  float: left;
`;

export const NavRight = styled.div`
  float: right;
  margin-right: 100px;
  bottom: -14px;
  position: relative;
  display: flex;
`;
