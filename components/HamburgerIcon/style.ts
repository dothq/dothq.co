import styled, { css } from "styled-components";

export const HamburgerImageWrap = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
`;

export const HamburgerImage = styled.img`
  width: 30px;
  margin: auto;
  padding: 3px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s filter;
  filter: grayscale(1) brightness(0.5);

  &:hover {
    filter: grayscale(0) brightness(1);
  }
`;
