import styled, { css } from "styled-components";

export const ButtonV2 = styled.button`
    padding: 11px 32px;
    border-radius: 100px;
    text-align: center;
    display: block;
    border: 0;
    outline: 0;
    
    ${({ color, background, w, h }: { color?: string; background?: string; w?: number; h?: number }) => css`
        color: ${color || "white"};
        background: ${background || "black"};
        width: ${w || "null"}px;
        height: ${`${h}px` || "auto"};
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
