import styled from "styled-components";

export const StyledFooter = styled.div`
    height: 540px;
    background-color: ${props => props.theme.ui.homeBackground};
`;

export const Container = styled.div`
    display: flex;
    padding-top: 78px;
    margin: 0px auto;
    max-width: 1164px;
`;

export const LogoText = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 12px;

    color: ${props => props.theme.colors.tertiary};
`;

export const List = styled.div`
    margin-left: 190px;
    display: flex;
`;

export const ListGroup = styled.div`
    margin-right: 76px;
`;

export const ListTitle = styled.div`
    font-size: 16px;
    display: flex;

    color: ${props => props.theme.colors.tertiary};

    margin-bottom: 5px;
`;

export const ListItem = styled.div`
    font-family: Inter;
    font-size: 14px;
    display: flex;

    color: ${props => props.theme.colors.tertiary + "80"};

    margin-bottom: 2px;
`;

export const Copyright = styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-top: 360px;
    display: flex;
    position: absolute;
    color: ${props => props.theme.colors.tertiary + "90"};
`;