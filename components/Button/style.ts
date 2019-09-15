import styled, { css } from "styled-components";
import { ButtonStandards } from "./../../utils/standard";

export const StyledButton = styled.div`
  border-radius: 3px;
  height: 20px;
  cursor: pointer;
  transition: 0.3s color;
  margin-right: 10px;

  &:hover {
    color: var(--secondary-color);
  }

  ${ButtonStandards()}
`;
