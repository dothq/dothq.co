import styled, { css } from "styled-components";

export const Button = styled.div`
    ${({ shade, disabled, hasArrow, hasBorder, isHome }: { shade: 'blue' | 'white' | 'gray' | 'black' | 'red'; disabled?: boolean; hasArrow?: boolean; hasBorder?: boolean; isHome?: boolean }) => css`
        background-color: ${shade == "blue" ? "rgba(255, 255, 255, 0.25)" : shade == "white" ? "transparent" : shade == "black" ? "black" : shade == "red" ? "#ff5d5d" : "#303030"};
        color: ${shade == "blue" || shade == "gray" ? "#fff" : shade == "black" ? "#EDEDED" : shade == "red" ? "#fff" : isHome ? "white" : props => props.theme.colors.tertiary};

        border: ${hasBorder ? `1px solid ${shade == "blue" ? "rgba(255, 255, 255, 0.25)" : shade == "white" ? "black" : shade == "black" ? "black" : shade == "red" ? "#ff5d5d" : "#303030"}` : ''};

        &:hover {
            cursor: pointer;
            background-color: ${shade == "blue" ? "rgba(255, 255, 255, 0.4)" : shade == "gray" ? "#000000" : shade == "black" ? "#131313" : isHome ? "transparent" : props => props.theme.colors.tertiary};
            color: ${shade == "white" ? "white" : ""};
            opacity: ${shade == "white" ? isHome ? 0.6 : 1 : 1};
        }

        padding: 5px 18px;

        ${hasArrow ? `
            position: relative;
            padding-right: 35px;

            --a-start: 50px;

            svg {
                transition: 150ms cubic-bezier(0.215,0.61,0.355,1) margin-left;
                position: absolute;
                margin-left: calc(100% - var(--a-start));
            }

            &:hover > svg {
                position: absolute;
                margin-left: calc(100% - calc(var(--a-start) - 2px));
            }
        ` : ""}

        pointer-events: ${disabled ? 'none' : 'all'};
        opacity: ${disabled ? 0.5 : 1};
    `}

    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s background-color, 0.2s box-shadow, 0.3s transform, 0.2s border, 0.2s opacity;
`;

export const HeroButton = styled(Button)`
    height: 36px;
    display: flex;
    vertical-align: middle;
    align-items: center;
`;

export const TextButton = styled.div`
    background-color: transparent;
    padding: 0px 12px;
    font-size: 16px;
    color: ${props => props.theme.colors.secondary};
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s opacity;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    @media screen and (max-width: 800px) {
        & {
        padding: 0px 10px;
        }
    }

    ${({ isBasic }: { isBasic?: boolean }) => css`
        ${isBasic ? `
            border-bottom: 0.2px solid ${props => props.theme.colors.tertiary};
            display: inline-block;
            padding: 0;
            color: rgb(0, 112, 243);
            transition: 0.1s box-shadow;
            font-weight: 500;

            &:hover {
                box-shadow: rgb(0, 112, 243) 0px 1px 0px 0px;
                opacity: 1;
            }
        ` : ''}
    `}
`;

export const IconButton = styled(TextButton)`
    display: flex;
    height: 32px;
    align-items: center;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;