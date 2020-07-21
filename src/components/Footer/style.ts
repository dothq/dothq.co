import styled from "styled-components";

export const StyledFooter = styled.div`
    height: 540px;
    background-color: ${props => props.theme.ui.homeBackground};
    border-top: 1px solid ${props => props.theme.ui.border}
`;

export const Container = styled.div`
    display: flex;
    padding-top: 78px;
    margin: 0px auto;
    max-width: 1164px;
    @media screen and (max-width: 800px) {
        & {
           flex-direction: column;
           margin-left: 78px;
        }
    }
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
    @media screen and (max-width: 800px) {
        & {
           flex-direction: column;
           flex-wrap: wrap;
        }
    }
`;

export const ListGroup = styled.div`
    margin-right: 76px;
`;

export const ListTitle = styled.div`
    font-size: 16px;
    display: flex;
    font-weight: 600;

    color: ${props => props.theme.colors.tertiary};

    margin-bottom: 5px;
    @media screen and (max-width: 800px) {
        & {
           margin-top: 10px;
        }
    }
`;

export const ListItem = styled.div`
    font-family: Inter;
    font-size: 14px;
    display: flex;

    color: ${props => props.theme.colors.tertiary + "80"};

    margin-bottom: 2px;

    &:hover {
        opacity: 0.7;
    }
`;

export const Copyright = styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-top: 360px;
    display: flex;
    
    position: absolute;
    color: ${props => props.theme.colors.tertiary + "90"};

    @media screen and (max-width: 800px) {
        & {
           margin-top: 0;
           bottom: 0;
           position: relative;
        }
    }
`;