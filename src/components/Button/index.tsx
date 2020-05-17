import styled, { css } from "styled-components";

export const Button = styled.div`
    ${({ shade }: { shade: 'blue' | 'white' | 'gray' | 'black' | 'red' }) => css`
        background-color: ${shade == "blue" ? "#0070F3" : shade == "white" ? props => props.theme.colors.secondary : shade == "black" ? "black" : shade == "red" ? "#ff5d5d" : "#303030"};
        color: ${shade == "blue" || shade == "gray" ? "#fff" : shade == "black" ? "#EDEDED" : shade == "red" ? "#fff" : "#757575"};

        ${shade == "white" ? `
            box-shadow: 0 5px 10px rgba(0,0,0,0.12);
        ` : ''}

        border: 1px solid ${props => props.theme.ui.border};

        &:hover {
            cursor: pointer;
            background-color: ${shade == "blue" ? "#0060D1" : shade == "gray" ? "#000000" : shade == "black" ? "#131313" : props => props.theme.isDark ? '#131313' : ''};

            ${shade == "white" ? `
                box-shadow: 0 5px 10px rgba(0,0,0,0.22);
                ${props => props.theme.isDark ? `background-color: darkgray` : ''}
            ` : `
                box-shadow: 0 5px 10px rgba(0,0,0,0.05);
            `}
        }
    `}

    border-radius: 4px;
    padding: 6px 18px;
    font-size: 16px;
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s box-shadow, 0.3s transform, 0.2s border;
`;

export const HeroButton = styled(Button)`
    height: 50px;
    display: flex;
    vertical-align: middle;
    align-items: center;
`;

export const TextButton = styled.div`
    background-color: transparent;
    padding: 0px 12px;
    font-size: 16px;
    color: ${props => props.theme.ui.color};
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s opacity;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    ${({ isBasic }: { isBasic?: boolean }) => css`
        ${isBasic ? `
            border-bottom: 0.2px solid ${props => props.theme.colors.tertiary};
            display: inline-block;
            padding: 0;
            color: rgb(0, 112, 243);
            transition: 0.1s box-shadow;

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