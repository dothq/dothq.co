import styled, { css, createGlobalStyle } from "styled-components";

import link from '../images/link.svg'
import jail_cell from '../images/jail-cell.svg'

import authSide from '../images/login-side.png'
import check from '../images/check.svg'

export const BackgroundInject = css`
    .links {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        text-align: center;
        font-size: 16px;
        line-height: 140%;
        font-weight: 600;
        justify-content: center;
        display: flex;
    }

    @media screen and (max-width: 1500px) {
        #features {
            display: none;
        }

        #features-s {
            display: flex !important;
        }

        .sign-up-container, .sign-up-line {
            display: none;
        }
    }

    @media screen and (max-width: 1040px) {
        .links {
          display: none;
        }
    }

    @media screen and (max-width: 1280px) {
        .logotype {
            padding-left: 15px;
        }

        .nbtn {
            padding-right: 15px;
        }

        .ending {
            margin: 0 15px;
        }
    }

    @media screen and (max-width: 626px) {
        .landing-btns {
            flex-direction: column;
            align-items: center;
        }

        .landing-btns > a {
            margin-left: 0 !important;
        }

        .landing-btns > a:first-of-type {
            margin-bottom: 12px;
        }

        .mobile-btns {
            flex-direction: column;
            align-items: center;
            margin-bottom: 28px;
        }
    }

    .nbtn {
        flex: 0 0 auto;
        text-align: end;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        white-space: pre;
        width: 36px;
        flex-direction: row-reverse;
    }

    .logotype {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .fn-center {
        max-width: 1330px;
        height: 100%;
        margin: 0 auto;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;


export const FeatureDisplay = styled.div`
    display: flex;
    margin-top: 64px;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 48px;

    --spacing: 21.5px;
`;

export const Feature = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 128px;
`;

export const Heading = styled.div`
    font-family: Inter, system-ui;
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
    display: flex;
    align-items: center;
    color: #000000;
`;

export const Description = styled.div`
    font-family: Inter, system-ui;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 134%;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.7);
    width: 556px;
    text-align: left;
    margin-top: 18px;
`;

export const FeatureImage = styled.div`
    user-drag: none;
    transition: 0.5s opacity;

    ${({ src }: { src : any }) => css`
        background-image: url(${src});
        background-size: cover;
        background-position: center;
    `}
`;

export const Form = styled.div`
    display: inline-grid;
`;

export const InputContainer = styled.div`
    --input-border: ${props => props.theme.ui.border};
    border: 1px solid var(--input-border);
    display: inline-flex;
    border-radius: 4px;
    transition: 0.1s border;

    &:focus-within, &:focus {
        --input-border: #8c8c8c !important;
    }
`;

export const InputIconContainer = styled.div`
    height: 42px;
    display: flex;
    flex-direction: column;
    width: 42px;
    align-items: center;
    justify-content: center;
    min-width: 42px;
    color: ${props => props.theme.colors.tertiary};
`;

export const Input = styled.input`
    height: 41px;
    margin-top: 0.1px;
    font-family: 'Inter', system-ui;
    outline: none;
    border: none;
    font-size: 14px;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: inherit;
    background-color: transparent;
    color: ${props => props.theme.colors.tertiary};

    &::placeholder {
        color: ${props => props.theme.colors.tertiary + "87"};
    }
`;

export const Process = styled.div`
    display: flex;
`;

export const ProcessChild = styled.div`
    width: 8px;
    height: 8px;
    background-color: lightgray;
    border-radius: 10px;

    animation: 1s blink infinite;
    transition: 0.5s background-color;

    &:first-of-type {
        animation-delay: 0.25s;
    }

    &:nth-of-type(2) {
        animation-delay: 0.5s
    }

    &:last-of-type {
        animation-delay: 0.75s
    }

    @keyframes blink {
        0% {
            background-color: #d6d6d6;
        }
        100% {
            background-color: #b9b9b9;
        }
    }
`;

export const Title = styled.h1`
    background-color: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`;

export const InputHotkey = styled.div`
    font-size: 10px;
    margin-right: 8px;
    padding: 3px 7px;
    border-radius: 4px;
    border: 1px solid var(--input-border);
    transition: 0.1s border;
`;

export const PostMetadata = styled.div`
    border-top: 1px solid ${props => props.theme.ui.border};
    border-bottom: 1px solid ${props => props.theme.ui.border};
    -webkit-transition: 0.2s border;
    transition: 0.2s border;
    padding: 28px;

    h1 {
        text-align: center;
        font-size: 36px;
        font-weight: 600;
    }

    p {
        font-size: 16px;
        color: ${props => props.theme.colors.tertiary + "50"};
        margin: 0 auto;
    }
`;

export const PostContainer = styled.article``;

export const PostContent = styled.section`
    color: ${props => props.theme.colors.tertiary};
    max-width: 1164px;
    margin: 0 auto;
    text-align: center;

    a {
        color: ${props => props.theme.colors.primary};
        transition: 0.1s box-shadow ease;
        border-bottom: 1px solid ${props => props.theme.ui.background};
    }

    a:hover {
        text-decoration: none;
        box-shadow: 0 1px #0070f3;
    }

    h1 {
        font-size: 18px;
    }

    p {
        font-size: 16px;
    }

    img {
        max-width: 90%;
        height: auto;
    }

    figcaption {
        max-width: 650px;
        opacity: 0.5;
        font-size: 14px;
        margin: 0 auto;
    }

    ul {
        list-style-position: inside;
    }

    tt, code {
        background-color: ${props => props.theme.isDark ? `#131313` : `#efefef`};
        padding: 0.2em 4px;
    }

    code:before, code:after, tt:before, tt:after {
        display: none;
    }
`;

export const PostImage = styled.picture`
    height: 500px;
    width: -webkit-fill-available;
    display: block;
    border-bottom: 1px solid ${props => props.theme.ui.border};
    margin-bottom: 2rem;
    transition: 0.2s border;

    ${({ image }: { image: any }) => css`
        background-image: url(${image});
        background-size: cover;
        background-position: center;
    `}
`;

export const BlogMount = styled.div`
    display: flex;
    border-top: 1px solid ${props => props.theme.ui.border};
`;

export const BlogPosts = styled.div`
    width: 100%;
    max-width: 1164px;
    margin: 0 auto;
`;

export const BlogSidebar = styled.div``;

export const Avatar = styled.div`
    position: relative;

    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    ${({ src, width, noFade }: { src: any; width?: number; noFade?: boolean }) => css`
        width: ${width || 118}px;
        height: ${width || 118}px;
        border-radius: ${width || 118}px;
        ${!noFade ? `animation: 0.2s fadein forwards;opacity: 0;` : "opacity: 1;"}

        &:before {
            background-image: url(${src});
            background-size: cover;
            background-position: center;
            content: "";
            position: absolute;
            width: ${width || 118}px;
            height: ${width || 118}px;
            border-radius: ${width || 118}px;
            z-index: ${!noFade ? -1 : ''};
        }
    `}
`;

export const DatePicker = styled.input.attrs({
    type: 'date'
})`
    height: 41px;
    margin-top: 0.1px;
    font-family: 'Inter',system-ui;
    outline: none;
    border: none;
    font-size: 14px;
    position: relative;
    display: flex;
    border-radius: 4px;
    width: inherit;
    background-color: transparent;
    color: #000000;
    padding-right: 8px;
`;

export const DateTimePicker = styled.input.attrs({
    type: 'datetime-local'
})`
    height: 41px;
    margin-top: 0.1px;
    font-family: 'Inter',system-ui;
    outline: none;
    border: none;
    font-size: 14px;
    position: relative;
    display: flex;
    border-radius: 4px;
    width: inherit;
    background-color: transparent;
    color: #000000;
    padding-right: 8px;
`;

export const Spinner = styled.div`
    margin: auto;
    font-size: 10px;
    color: transparent;
    height: 14px;
    width: 14px;
    border: 1px solid white;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin;
    animation-duration: .6s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    box-sizing: border-box;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(1turn);
        }
    }
`;

export const PolicySectionTitle = styled.h3`
    text-align: left;
    margin: 0;

    b {
        position: relative;
        display: flex;
    }

    b:hover figure {
        opacity: 0.8;
    }
`;

export const PolicySectionCite = styled.figure.attrs(props => {
    id: props.id
})`
    width: 24px;
    height: 24px;
    opacity: 0;
    transition: 0.3s opacity;
    mask-image: url(${link});
    mask-size: 20px;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: black;
    margin-left: 6px;
`;

export const HelpHeroSheet = styled.div`
    position: absolute;
    width: 100%;
    height: 395px;
    top: 0;
    left: 0;
    background-image: radial-gradient(${props => props.theme.isDark ? '#7c7c7c' : '#adadad'} 1px,transparent 0),radial-gradient(${props => props.theme.isDark ? '#7c7c7c' : '#adadad'} 1px,transparent 0);
    background-position: 0 0,25px 25px;
    background-attachment: fixed;
    background-size: 50px 50px;
    background-color: ${props => props.theme.isDark ? '#2a2a2a' : '#f0f0f0'};
    z-index: -1;
    border-bottom: 1px solid ${props => props.theme.ui.border};
    transition: background 0.2s ease-out 0s, border 0.2s ease-out 0s, background-image 0.2s ease-out 0s;

    &::after {
        content: "";
        height: 395px;
        width: 100%;
        display: flex;
        background-image: linear-gradient(180deg, ${props => props.theme.isDark ? '#00000000' : '#ffffff00'} 0%, ${props => props.theme.isDark ? '#000000' : '#ffffff'} 100%);
    }
`;

export const HelpHeroSheetStyle = css`

`;

export const HelpHero = styled.div`
    max-width: 728px;
    margin: 0 auto;
`;

export const HelpSubtitle = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: ${props => props.theme.colors.tertiary}db;
`;

export const HelpTitle = styled.div`
    font-weight: 600;
    font-size: 28px;
    color: ${props => props.theme.colors.tertiary};
`;

export const HelpIcon = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);

    ${({ src, size }: { src: any; size: number; }) => css`
        width: ${size}px;
        height: ${size}px;
        border-radius: ${size}px;
        display: flex;
 
        &:before {
            background-image: url(${src});
            background-size: ${size/1.9999999999999999}px;
            background-repeat: no-repeat;
            background-position: center;
            content: "";
            position: absolute;
            width: ${size}px;
            height: ${size}px;
        }
    `}
`;

export const HelpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HelpAlert = styled.a`
    width: 250px;
    height: 24px;
    background-color: ${props => props.theme.colors.tertiary};

    font-weight: 500;
    font-size: 12px;
    text-align: center;

    color: ${props => props.theme.colors.secondary};

    border-radius: 100px;

    text-decoration: none;
`;

export const HelpSearch = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.isDark ? 'black' : props => props.theme.colors.secondary};
    box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-right: 14px;
    border: 1px solid ${props => props.theme.isDark ? props => props.theme.ui.border : 'transparent'};

    svg {
        color: ${props => props.theme.colors.tertiary + "87"};
    }
`;

export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    padding-left: 18px;
    background-color: transparent;
    border-radius: 8px;
    color: ${props => props.theme.colors.tertiary};

    &::placeholder {
        color: ${props => props.theme.colors.tertiary + "87"};
    }
`;

export const HelpExtras = styled.div`
    max-width: 674px;
    margin-top: 42px;
    height: 100%;
    margin: 0 auto;
    text-align: left;
`;

export const FlexGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 38px;
    grid-row-gap: 38px;
    padding-bottom: 42px;
    --spacing: 21.5px;
`;

export const ExtraItem = styled.div`
    width: 140px;
    height: 125px;
    box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
    background-color: ${props => props.theme.isDark ? 'black' : props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.isDark ? props => props.theme.ui.border : 'transparent'};
    border-radius: 6px;
    color: ${props => props.theme.colors.tertiary};
    padding: 22px 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    place-content: space-between;
    text-decoration: none;
    transition: 0.2s box-shadow, 0.2s transform;

    &:hover {
        box-shadow: 0 2.5999999999999996px 20px 0 rgba(0,0,0,.17), 0 1.7999999999999998px 20px 0 rgba(0,0,0,.14);
        transform: scale(1.01)
    }
`;

export const ExtraItemText = styled.div`
    font-weight: 500;
    font-size: 15px;
    color: ${props => props.theme.colors.tertiary}90;
    line-height: 18px;
`;

export const FeatureIcon = styled.div`
    ${({ src }: { src: any; }) => css`
        background-color: #f2f6ff;
        background-image: url(${src});
        background-size: 44px;
        width: 88px;
        height: 88px;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 88px;
    `};
`;

export const HeroCover = styled.div`
    ${({ h, background }: { h: number; background: any; }) => css`
        height: ${h}px;
        background: ${background};
    `}; 
`;

export const HCC = styled.div`
    ${({ w, background, top, bottom }: { w: number; background?: any; top?: number; bottom?: number }) => css`
        max-width: ${w}px;
        height: 100%;
        background: ${background};
        margin: 0 auto;
        padding-top: calc(64px + ${top}px);
        padding-bottom: ${bottom}px;
        position: relative;
    `};
`;

export const HeroTitle = styled.div`
    font-size: 48px;
    line-height: 48px;
    font-weight: bold;

    ${({ color }: { color?: any }) => css`
        color: ${color};
    `};
`;

export const HeroSubtitle = styled.div`
    font-size: 20px;
    line-height: 134%;
    font-weight: 500;
    opacity: 0.7;
    margin-top: 32px;

    ${({ color }: { color?: any }) => css`
        color: ${color};
    `};
`;

export const Eyeballs = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 72px;

    transition: 0.3s opacity 0.1s, 0.3s transform 0.1s;

    ${({ visible }: { visible: boolean }) => css`
        transform: scale(${visible ? 1 : 0.9});
        opacity: ${visible ? 1 : 0.2};
    `};
`;

export const Eyeball = styled.div`
    width: 240px;
    height: 110px;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
    position: relative;
`;

export const Iris = styled.div`
    width: 48px;
    height: 48px;
    background-color: black;
    border: 8px solid #cccccc;
    border-radius: 48px;
    position: absolute;
    left: 50px;
    top: 40px;
`;

export const Jail = styled.div`
    width: 638px;
    height: 288px;
    background-image: url(${jail_cell});
    position: absolute;
    z-index: 1;
    transform: translate(68px, -12px);
    transition: 0.4s margin-top cubic-bezier(0.69, 0.01, 0, 1.05), 0.25s opacity;

    ${({ visible }: { visible: boolean }) => css`
        margin-top: ${visible ? '0px' : '-70px'};
        opacity: ${visible ? 1 : 0};
    `};
`;

export const IrisLeft = styled(Iris)``;
export const IrisRight = styled(Iris)``;

const NFS = css`
    .nav {
        position: absolute;
        top: 0;
        margin-bottom: 0;
        z-index: 100;
    }

    @media screen and (max-width: 1280px) {
        .db-download-container {
            text-align: center;
            margin: 0 auto;
        }

        .db-download-buttons {
            justify-content: center !important;
        }

        .eyeball-container {
            display: none;
        }
    }
`;

export const NavFixed = createGlobalStyle`${NFS}`;

export const JailTrigger = styled.div`
    position: absolute;
    width: 600px;
    height: calc(100% - 78px);
    top: 0;
    left: -24px;
    margin-top: 78px;
`;

export const AuthSide = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${authSide});
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
    background-color: #F4F6FF;
    background-position-x: center;
`;

export const AuthLogo = styled.div`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 1000px;
`;

export const AuthTitle = styled.div`
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    color: #242424;
    margin-top: 100px;
`;

export const AuthDesc = styled.div`
    font-weight: normal;
    font-size: 16px;
    line-height: 135.3%;
    color: #727272;
    max-width: 358px;
    margin-top: 22px;

    a {
        transition: 0.1s opacity;

        &:hover {
            opacity: 0.5;
        }
    }
`;

export const AuthLink = styled.div`
    display: contents;
    color: #4965FF !important;
    cursor: pointer;

    transition: 0.1s opacity;

    &:hover {
        opacity: 0.5;
    }

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const AuthField = styled.div`
    display: flex;

    border: 2px solid #D2D2D2;
    border-radius: 8px;
    height: 58px;

    max-width: 525px;

    transition: 0.3s border;
    position: relative;

    --pad: 19px;

    &:hover {
        border-color: #AAAAAA;
    }

    &:focus-within {
        border-color: #4965FF;

        span {
            --pad: 8px !important;
        }
    }

    input:not(:placeholder-shown) ~ span {
        --pad: 8px !important;
    }
`;

export const AuthPlaceholder = styled.span`
    font-weight: 500;
    font-size: 12px;
    line-height: 135.3%;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.7;
    position: absolute;
    padding: var(--pad) 20px;
    transition: 0.15s padding;
    pointer-events: none;
    user-select: none;
`;

export const AuthInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 135.3%;
    color: #000000;
    opacity: 0.9;
    padding: 10px 20px;
    padding-top: 10px;
    width: 100%;
    height: 100%;
    padding-top: 28px;
`;

export const Checkbox = styled.div`
    display: flex;

    label {
        margin-left: 14px;
        font-weight: 500;
        font-size: 15px;
        line-height: 135.3%;
        display: flex;
        align-items: center;
        color: #000000;
    }
`;

export const CheckboxField = styled.input`
    width: 22px;
    height: 22px;

    outline: none;
    border: 2px solid #D2D2D2;

    transition: 0.15s all;

    appearance: none;
    -moz-appearance: none;

    border-radius: 4px;

    &:hover {
        border-color: #AAAAAA;
    }

    &:checked {
        border-color: transparent;
        background-color: #4965FF;
        background-image: url(${check});
    }
`;

export const HeaderItemBox = styled.div`
	background-color: white;
	padding: 21px;
	height: 320px;
	width: 450px;
	border-radius: 8px;
    box-shadow: 0 25.6px 57.6px 0 rgba(0,0,0,.22),0 4.8px 14.4px 0 rgba(0,0,0,.18);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    z-index: 9999;
`;