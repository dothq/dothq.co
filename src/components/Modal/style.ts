import styled, { css } from "styled-components";

export const ModalBackground = styled.div`
    background-color: black;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const StyledModal = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500000;
    background-color: #00000050;

    // ${({ visible }: { visible: boolean }) => css`

    // `}
`;



export const ModalContainer = styled.data`
    padding: 24px;
    background-color: white;
    border-radius: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;