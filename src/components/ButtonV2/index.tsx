import styled, { css } from "styled-components";

export const ButtonV2 = styled.a`
    padding: 11px 32px;
    border-radius: 100px;
    text-align: center;

    ${({ color, background, w, h }: { color?: string; background?: string; w?: number; h?: number }) => css`
        color: ${color || "white"};
        background: ${background || "black"};
        width: ${w || "null"}px;
        height: ${h || "40"}px;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        transition: 0.3s opacity;

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    `};
`;