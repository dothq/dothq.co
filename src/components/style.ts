import styled, { css } from "styled-components";

import link from '../images/link.svg'

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeroSheet = styled.div`
    position: absolute;
    width: 100%;
    height: 650px;
    top: 0;
    background-image: radial-gradient(${props => props.theme.isDark ? props.theme.ui.border : "#dcdcdc"} 1px,transparent 0),radial-gradient(${props => props.theme.isDark ? props.theme.ui.border : "#dcdcdc"} 1px,transparent 0);
    background-position: 0 0,25px 25px;
    background-attachment: fixed;
    background-size: 50px 50px;
    background-color: ${props => props.theme.ui.background};
    z-index: -1;
    border-bottom: 1px solid ${props => props.theme.ui.border};
    transition: background 0.2s ease-out 0s, border 0.2s ease-out 0s, background-image 0.2s ease-out 0s;
`;

export const BackgroundInject = css`
    body {
        background-color: ${props => props.theme.ui.background};
        transition: background 0.2s ease-out 0s;
    }

    h1 {
        color: ${props => props.theme.colors.tertiary};
        transition: color 0.2s ease-out 0s;  
    }

    p, label, input[type="datetime-local"] {
        color: ${props => props.theme.colors.tertiary + "db"};
        transition: color 0.2s ease-out 0s;  
    }

    ::-webkit-calendar-picker-indicator, input[type="checkbox"] {
        filter: ${props => props.theme.isDark ? 'invert(1)' : ''};
    }

    .EmbeddedTweet {
        background: ${props => props.theme.ui.background} !important;
    }

    :root {
        --border: ${props => props.theme.ui.border};
        --homebg: ${props => props.theme.ui.homeBackground};
    }

    *::selection {
        background-color: ${props => props.theme.isDark ? "#2b2b2b" : "#deeffd"};
    }

    .small-hero {
        ${props => props.theme.isDark ? `
            margin-top: -110px;
            padding-top: calc(2.5rem + 64px);
            background-color: var(--homebg);
        ` : ''}
    }
`;

export const HeroSheetStyle = css`
    @keyframes slideup {
        0% {
            transform: translateY(30%);
            opacity: 0;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    body {
        background-color: ${props => props.theme.ui.homeBackground};
        transition: background 0.2s ease-out 0s;
    }
    
    * [dot-slideup="true"] {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
        animation-name: slideup;
        animation-fill-mode: forwards;
        opacity: 0;
        transform: translateY(20%);
        transition-property: opacity,transform;
    }
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
    text-align: left;
    max-width: 248px;
    margin: var(--spacing);
`;

export const Heading = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 19px; 
    color: ${props => props.theme.colors.tertiary + "cc"};
    margin-bottom: 4px;
`;

export const Description = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: ${props => props.theme.colors.tertiary + "a6"};
`;

export const FeatureImage = styled.img`
    user-drag: none;
    max-width: 248px;
    margin-bottom: 18px;
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
    background-image: ${props => props.theme.ui.titleGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

export const BlackLivesMatter = styled.div`
    height: 42px;
    border-bottom: 1px solid ${props => props.theme.ui.border};
    text-align: center;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.tertiary};
    font-size: 15.5px;
    background-color: ${props => props.theme.ui.background};
    transition: all 0.2s ease-out 0s;

    a {
        color: ${props => props.theme.colors.tertiary}90;
    }
`;

export const BLMBtn = styled.a`
    margin: 0 5px;
    color: white;

    &:hover {
        text-decoration: underline;
    }
`;