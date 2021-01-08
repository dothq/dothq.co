import styled, { css } from "styled-components";

export const StyledButtonV2 = styled.button`
    padding: 5px 18px;
    text-align: center;
    display: block;
    border: 0;
    outline: 0;
    
    ${({ color, background, w, h, br, fs, disabled, bc }: { color?: string; background?: string; w?: number; h?: number; br?: number; fs?: number; disabled?: boolean; bc?: string }) => css`
        color: ${color || "white"};
        background: ${background || "rgb(0, 93, 255)"};
        width: ${w || "null"}px;
        height: ${`${h}px` || "auto"};
        border-radius: ${br || 8}px;
        font-weight: 600;
        font-size: ${fs || 14}px;
        transition: 0.3s all;
        border: ${bc ? `2px solid ${bc}` : ""};

        opacity: ${disabled ? "0.5 !important" : ""};
        cursor: ${disabled ? "not-allowed" : ""} !important;

        &:focus {
            outline: none;
            box-shadow: 0px 0px 0px 4px ${background}75;
        }

        &:hover {
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)) repeat scroll 0% 0%, ${background || "rgb(0, 93, 255)"} none repeat scroll 0% 0%;
            cursor: pointer;
        }
    `};
`;