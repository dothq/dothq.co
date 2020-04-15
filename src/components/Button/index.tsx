import styled, { css } from "styled-components";

export const Button = styled.div`
    ${({ shade }: { shade: 'blue' | 'white' }) => css`
        background-color: ${shade == "blue" ? "#0070F3" : "#fff"};
        color: ${shade == "blue" ? "#fff" : "#757575"};

        ${shade == "white" ? `
            box-shadow: 0 5px 10px rgba(0,0,0,0.12);
        ` : ''}

        &:hover {
            cursor: pointer;
            background-color: ${shade == "blue" ? "#0060D1" : ""};

            ${shade == "white" ? `
                box-shadow: 0 5px 10px rgba(0,0,0,0.22);
            ` : `
                box-shadow: 0 5px 10px rgba(0,0,0,0.05);
            `}
        }
    `}

    border-radius: 4px;
    padding: 6px 18px;
    font-size: 16px;
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s box-shadow, 0.3s transform;
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
    color: black;
    letter-spacing: 0.3px;
    transition: 0.2s background-color, 0.2s opacity;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
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