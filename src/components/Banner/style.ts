import styled from "styled-components";

export const StyledBanner = styled.div`
    height: 58px;
    background-color: black;
    width: 100%;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    a {
        text-decoration: none;
        opacity: 1;
        color: #30ffcf;
        transition: 0.2s opacity;
    }

    a:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;