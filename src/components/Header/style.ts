import styled, { css } from 'styled-components';
import { TextButton } from '../Button';

export const StyledHeader = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: 0.15s box-shadow, 0.3s transform ease-in-out;

    ${({ onTop, isDark, hide }: { onTop: boolean; isDark: boolean; hide: boolean }) => css`
        transform: translateY(${hide ? "-150px" : "0px"});
        background-color: ${!isDark ? "white" : "black"};
        box-shadow: ${onTop ? "0 3.2px 7.2px 0 #0000000f,0 .6px 1.8px 0 #0000001c" : ""};
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

    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;

    background-image: url(${require("../../assets/images/hq-logo.svg")});
    background-size: cover;
    background-repeat: no-repeat;

    ${({ size, isDark }: { size?: number; isDark?: boolean }) => css`
        height: ${size}px;
        width: ${size}px;
        filter: ${isDark ? 'invert(0)' : 'invert(1)'};
    `};
`;

export const NavItem = styled(TextButton)`
    padding: 0px 22px;
    font-size: 15px;
    font-weight: 600;
    height: 64px;

    &:hover {
        box-shadow: inset 0 -1px 0px 0px black;
        opacity: 1;
    }

    ${({ isDark }: { isDark?: boolean }) => css`
        color: ${isDark ? 'black' : 'white'};
    `};
`

export const MenuSlot = styled.div`
    transition: 0.15s opacity;
    overflow: hidden;
    position: absolute;
    z-index: 5;
    box-shadow: 0 -1px 0px 0px #EAEAEA;

    &:after {
        content: "";
        position: relative;
        box-shadow: inset 0 25.6px 57.6px 0 rgba(0, 0, 0, 0.04),inset 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.12);
        top: 0;
        width: 100vw;
        height: 100vh;
        display: block;
    }

    ${({ visible }: { visible: boolean }) => css`
        opacity: ${visible ? 1 : 0};
        pointer-events: ${visible ? "all" : "none"};
    `};
`;