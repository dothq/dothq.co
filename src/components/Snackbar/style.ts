import styled, { css } from "styled-components";
import { colours } from "../../colours";

export const StyledSnackbar = styled.div`
    position: fixed;
    background-color: white;
    bottom: 28px;
    width: fit-content;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.28);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    transition: 0.8s bottom cubic-bezier(1,-0.59,0,1.75);
    font-size: 15px;
    width: max-content;
    color: ${colours.black};
    max-width: 100%;

    ${({ visible }: { visible: boolean }) => css`
        bottom: ${visible ? "18px" : "-72px"};
    `}
`;