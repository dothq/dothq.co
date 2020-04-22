import styled, { css } from 'styled-components';

export const StyledHeader = styled.div`
    margin-bottom: 2.5rem;
    height: 64px;
    width: 100%;
`

export const Container = styled.div`
    margin: 0px auto;
    max-width: 1164px;
    color: black;
    height: 64px;
    display: flex;
    align-items: center;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
`;

export const Logo = styled.div`
    height: 36px;
    width: 36px;
    background: ${props => props.theme.ui.logoGradient};
    border-radius: 28px;

    ${({ size }: { size?: number }) => css`
        height: ${size}px;
        width: ${size}px;
    `};
`;