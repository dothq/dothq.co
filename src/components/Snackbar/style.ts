import styled, { css } from "styled-components";

export const StyledSnackbar = styled.div`
    position: fixed;
    background-color: white;
    height: 42px;
    bottom: 28px;
    width: fit-content;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.28);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 18px;
    transition: 0.2s bottom ease;
    font-size: 15px;

    ${({ visible }: { visible: boolean }) => css`
        bottom: ${visible ? "18px" : "-72px"};
    `}
`;