import styled, { css } from "styled-components";

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeroSheet = styled.div`
    position: absolute;
    width: 100%;
    height: 650px;
    top: 0;
    background-color: ${props => props.theme.ui.background};
    z-index: -1;
    border-bottom: 1px solid ${props => props.theme.ui.border};
    transition: background 0.2s ease-out 0s, border 0.2s ease-out 0s;
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

    p {
        color: ${props => props.theme.colors.tertiary + "db"};
        transition: color 0.2s ease-out 0s;  
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
    border: 1px solid ${props => props.theme.ui.border};
    display: inline-flex;
    border-radius: 4px;
    transition: 0.1s border;

    &:focus-within, &:focus {
        border: 1px solid #8c8c8c;
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