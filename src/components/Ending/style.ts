import styled from "styled-components";

import * as landingScreenshotLight from '../../images/landing-screenshot-light.png'
import * as landingScreenshotDark from '../../images/landing-screenshot-dark.png'

export const StyledEnding = styled.div`
    height: 380px;
    background-color: ${props => props.theme.ui.background};
    border-top: 1px solid ${props => props.theme.ui.border};
`;

export const ContainerParent = styled.div`
    margin: 0px auto;
    max-width: 1164px;
    height: 100%;
    display: flex;
`;

export const Container = styled.div`
    padding-top: 79px;
    text-align: left;

    @media only screen and (max-width: 1450px) {
        text-align: center;

        &:first-of-type {
            width: -webkit-fill-available !important;

            * {
                justify-content: center !important;
            }
        }

        &:last-of-type {
            display: none;
        }
    }
`;

export const Heading = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    text-transform: uppercase;

    color: ${props => props.theme.colors.tertiary + "80"};
    margin-bottom: 18px;
`;

export const Title = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    font-size: 37px;
    color: ${props => props.theme.colors.tertiary};
`;

export const Or = styled.div`
    &:before {
        content: 'or';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        text-align: center;
        color: ${props => props.theme.colors.tertiary};
        vertical-align: middle;
        display: flex;
        align-self: center;
        height: 50px;
        padding: 0 25px;
    }
`;

export const FadingOutScreenshot = styled.div`
    background: linear-gradient(90deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.secondary + "80"} 98.92%), url(${props => props.theme.isDark ? landingScreenshotDark : landingScreenshotLight});
    height: 378px;
    background-size: cover;

    @media only screen and (max-width: 1450px) {
        display: none;
    }
`;