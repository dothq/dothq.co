import styled, { css } from "styled-components";

export const StyledThinker = styled.div`
    display: flex;
    width: min-content;
`;

export const ThinkerCircle = styled.div`
    ${({ delay, color, size }: { delay: number; color: string; size?: number }) => css`
        width: ${size || 8}px;
        height: ${size || 8}px;
        border-radius: ${size || 8}px;
        margin-right: ${(size || 8) / 4}px;
        background-color: ${color};
        animation: 1s pulse infinite ${delay}s;
    `}
    
    @keyframes pulse {
        50% {
            opacity: 0.35;
        }
    }
`;