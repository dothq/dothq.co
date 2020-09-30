import styled, { css } from 'styled-components';
import { TextButton } from '../Button';

export const StyledHeader = styled.div`
    margin-bottom: 84px;
    height: 64px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: white;
    transition: 0.3s box-shadow;

    ${({ onTop }: { onTop: boolean }) => css`
        box-shadow: ${onTop ? "0 3.2px 7.2px 0 #0002,0 .6px 1.8px 0 #0000001c" : ""};
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