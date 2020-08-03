import styled from "styled-components";

import * as landingScreenshotLight from '../../images/landing-screenshot-light.png'
import * as landingScreenshotDark from '../../images/landing-screenshot-dark.png'

export const StyledEnding = styled.div`
    height: 272px;
    margin-bottom: 46px;
`;

export const ContainerParent = styled.div`
    margin: 0px auto;
    max-width: 1300px;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #4965ff;
    border-radius: 18px;
`;

export const Container = styled.div`
    padding-top: 76px;
    text-align: left;
`;

export const Title = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: white;
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
`;
