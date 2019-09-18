import styled, { css } from "styled-components";
import { ButtonStandards } from "./../../utils/standard";

export const StyledButton = styled.div`
  border-radius: 3px;
  height: 20px;
  cursor: pointer;
  transition: 0.3s filter;
  margin-right: 10px;
  text-align: center;
  color: var(--secondary-color) !important;
  filter: grayscale(100%) brightness(0.5);

  &:hover {
    filter: unset !important;
  }

  ${({ iconRight, iconLeft }: { iconRight: any; iconLeft: any }) => {
    if (iconRight) {
      return css`
        width: 75px;
        text-align: unset !important;

        &:after {
          content: "";
          width: 18px;
          height: 18px;
          background: url(${iconRight}) no-repeat;
          position: absolute;
          display: none;
          background-size: contain;
          margin: 3px 4px;
          opacity: 1;

          @media screen and (min-width: 1000px) {
            display: inline-block;
          }
        }
      `;
    }
    if (iconLeft) {
      return css`
        width: 75px;
        text-align: unset !important;

        &:before {
          content: "";
          width: 30px;
          height: 30px;
          background: url(${iconLeft}) no-repeat -30px -50px fixed;
          top: 10px;
          right: 5px;
          position: absolute;
          display: none;
          background-size: contain;
          margin: 3px 4px;
          opacity: 1;

          @media screen and (min-width: 1000px) {
            display: inline-block;
          }
        }
      `;
    }
  }}

  ${ButtonStandards()}
`;
