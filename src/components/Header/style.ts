import styled, { css } from 'styled-components';
import { TextButton } from '../Button';

export const StyledHeader = styled.div`
    margin-bottom: 84px;
    height: 64px;
    width: 100%;

    ${({ isFixed }: { isFixed: boolean }) => css`
        top: ${isFixed ? 0 : ''};

        ${isFixed ? `
            position: fixed;
            z-index: 9999;
            background-color: #00000075;
            backdrop-filter: blur(16px);
            border-bottom: 1px solid #333333;
        ` : ''}
    `};
`

export const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-width: 1300px;
    height: 64px;
    margin: 0 auto;
    display: flex;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
`;

export const Logo = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 36px;

    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;

    ${({ size, isDark }: { size?: number; isDark?: boolean }) => css`
        height: ${size}px;
        width: ${size}px;
        background: ${isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
    `};
`;

export const NavItem = styled(TextButton)`
    padding: 0px 4px;
    font-size: 15px;
    font-weight: 600;

    ${({ isDark }: { isDark?: boolean }) => css`
        color: ${isDark ? 'black' : 'white'};
    `};
`