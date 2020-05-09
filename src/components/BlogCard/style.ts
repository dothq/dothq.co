import styled from "styled-components";

export const StyledBlogCard = styled.div`
    display: block;
    max-width: 700px;
    padding: 0 16px;
    box-shadow: 0 1px ${props => props.theme.ui.border};
    padding-top: 40px;
`;

export const CardDate = styled.div`
    font-size: 14px;
    opacity: 0.8;
    padding-bottom: 0.8rem;
    color: ${props => props.theme.colors.tertiary};
`;

export const CardTitle = styled.h1`
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 1rem;
    display: inline-block;
    transition: 0.1s border-bottom;
    border-bottom: 1px solid ${props => props.theme.colors.tertiary + "00"};
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid ${props => props.theme.colors.tertiary};
    }
`;

export const CardDescription = styled.div`
    font-size: 15px;
    opacity: 0.7;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.tertiary};
`;

export const ReadMore = styled.figure`
    padding-bottom: 40px;
    transition: 0.1s color;
    display: flex;
    cursor: pointer;
    color: ${props => props.theme.colors.tertiary + "90"};

    span {
        font-size: 12px;
        padding-left: 12px;
        font-weight: 600;
        margin-top: -2px;
        letter-spacing: 0.5px;
    }

    &:hover {
        color: ${props => props.theme.isDark ? props => props.theme.colors.tertiary : props => props.theme.colors.primary} !important;
    }
`;
