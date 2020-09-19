import styled, { css } from "styled-components";

export const StyledThinker = styled.div`
    display: flex;
    width: min-content;
`;

export const ThinkerCircle = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin-right: 2px;
   
    ${({ delay, color }: { delay: number; color: string }) => css`
        background-color: ${color};
        animation: 1s pulse infinite ${delay}s;
    `}
    
    @keyframes pulse {
        50% {
            opacity: 0.35;
        }
    }
`;