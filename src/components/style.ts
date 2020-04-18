import styled, { css } from "styled-components";

import * as emojis from '../images/apple_emojis.png'

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeroSheet = styled.div`
    position: absolute;
    width: 100%;
    height: 650px;
    top: 0;
    background-color: #ffffff;
    z-index: -1;
    border-bottom: 1px solid #eaeaea;
`;

export const HeroSheetStyle = css`
    body {
        background-color: #f9f9f9;
    }
`;

export const FeatureDisplay = styled.div`
    display: flex;
    margin-top: 64px;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 48px;
`;

export const Feature = styled.div`
    text-align: left;
    max-width: 248px;
    margin-right: 57px;

    &:last-of-type {
        margin-right: 0 !important;
    }
`;

export const Heading = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    color: #1D1D1D;
    margin-bottom: 4px;
`;

export const Description = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #626262;
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
    border: 1px solid #eaeaea;
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
`;

export const Input = styled.input`
    height: 42px;
    font-family: 'Inter', system-ui;
    outline: none;
    border: none;
    font-size: 14px;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: inherit;
`;