import styled, { css } from "styled-components";

export const StyledButtonV2 = styled.button`
    padding: 11px 32px;
    text-align: center;
    display: block;
    border: 0;
    outline: 0;
    
    ${({ color, background, w, h, br, fs, disabled, bc }: { color?: string; background?: string; w?: number; h?: number; br?: number; fs?: number; disabled?: boolean; bc?: string }) => css`
        color: ${color || "white"};
        background: ${background || "black"};
        width: ${w || "null"}px;
        height: ${`${h}px` || "auto"};
        border-radius: ${br || 100}px;
        font-weight: 600;
        font-size: ${fs || 15}px;
        line-height: 18px;
        transition: 0.3s opacity, 0.3s background, 0.3s box-shadow;
        border: ${bc ? `2px solid ${bc}` : ""};

        opacity: ${disabled ? "0.5 !important" : ""};
        cursor: ${disabled ? "not-allowed" : ""} !important;

        &:focus {
            outline: none;
            box-shadow: 0px 0px 0px 4px ${bc ? bc : background}80;
        }

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    `};
`;