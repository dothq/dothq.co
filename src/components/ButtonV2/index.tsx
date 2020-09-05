import styled, { css } from "styled-components";

export const ButtonV2 = styled.button`
    padding: 11px 32px;
    text-align: center;
    display: block;
    border: 0;
    outline: 0;
    
    ${({ color, background, w, h, br, fs }: { color?: string; background?: string; w?: number; h?: number; br?: number; fs?: number }) => css`
        color: ${color || "white"};
        background: ${background || "black"};
        width: ${w || "null"}px;
        height: ${`${h}px` || "auto"};
        border-radius: ${br || 100}px;
        font-weight: 600;
        font-size: ${fs || 15}px;
        line-height: 18px;
        transition: 0.3s opacity;

        &:hover {
            opacity: 0.3;
            cursor: pointer;
        }
    `};
`;
