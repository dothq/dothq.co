import styled from "styled-components";

export const Button = styled.div`
    background-color: #0070F3;
    border-radius: 4px;
    padding: 6px 18px;
    font-size: 16px;
    color: white;
    letter-spacing: 0.3px;
    transition: 0.2s background-color;

    &:hover {
        cursor: pointer;
        background-color: #0060D1;
    }
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
