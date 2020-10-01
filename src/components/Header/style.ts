import styled, { css } from 'styled-components';
import { TextButton } from '../Button';

export const StyledHeader = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: 0.15s box-shadow, 0.3s transform ease-in-out;

    ${({ onTop, isDark, forceShadow, hide }: { onTop: boolean; isDark: boolean; forceShadow: boolean; hide: boolean }) => css`
        transform: translateY(${hide ? "-150px" : "0px"});
        background-color: ${!isDark ? "white" : "black"};
        box-shadow: ${forceShadow ? "0 3.2px 7.2px 0 #0002,0 .6px 1.8px 0 #0000001c" : onTop ? "0 3.2px 7.2px 0 #0002,0 .6px 1.8px 0 #0000001c" : ""};
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

export const MenuSlot = styled.div`
    transition: 0.3s transform, 0.25s height;
    transition-timing-function: cubic-bezier(.46,.03,.52,.96);
    overflow: hidden;

    ${({ visible }: { visible: boolean }) => css`
        height: ${visible ? "200px" : "0px"};
    `};
`;

export const MenuLine = styled.div`
    width: 100%;
    height: 1px;
    margin: 0 auto;
    background-color: #0000001f;
    transition: 0.2s opacity 0.2s;

    ${({ visible }: { visible: boolean }) => css`
        opacity: ${visible ? 1 : 0};
    `};
`;