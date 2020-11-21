import styled, { css } from "styled-components";

const DROPDOWN_BG = "#ffffff"
const DROPDOWN_BG_ACCENT = "rgba(72, 74, 77, 0.267)"
const DROPDOWN_TEXT_COLOUR = "#414141"
const DROPDOWN_NAV_SIZE = "60px"
const DROPDOWN_BR = "8px"
const DROPDOWN_ANIMATION_SPEED = "0.3s"

export const DropdownCaret = styled.div`
    width: 12px;
    height: 12px;
    display: block;
    background-color: black;
    margin: 0 auto;
    transform: translateY(8px);
    clip-path: polygon(50% 0%, 0 65%, 100% 65%);
`;

export const StyledDropdown = styled.div`
    position: absolute;
    top: 100px;
    width: 300px;
    background-color: ${DROPDOWN_BG};
    box-shadow: 0 9.4px 14.4px 0 #0002,0 1.2px 3.6px 0 #0000001c;
    border-radius: ${DROPDOWN_BR};
    padding: 12px;
    overflow: hidden;
    transition: height ${DROPDOWN_ANIMATION_SPEED} ease, transform 0.2s ease, opacity 0.2s ease-in;

    ___gatsby::after {
        content: "";
        background: transparent;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        cursor: default;
        z-index: 80;
    }

    @keyframes dropdown_fade {
        0% {
            opacity: 0
        }
        100% {
            opacity: 1
        }
    }

    ${({ open, height }: { open: boolean; height: number }) => css`
        transform: translateX(6%);
        height: ${open ? height : 0}px;
        opacity: 0;
        animation: ${open && `dropdown_fade .1s ease-in forwards`};
    `};
`;