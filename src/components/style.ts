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
