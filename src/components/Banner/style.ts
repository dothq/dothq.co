import styled from "styled-components";

export const StyledBanner = styled.div`
    background-color: white;
    width: 100%;
    color: black;
    min-height: 38px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    border-bottom: 1px solid var(--gray-4);
    padding: 6px 12px;

    a {
        text-decoration: none;
        opacity: 1;
        color: var(--azure);
        transition: 0.2s opacity;
    }

    a:hover {
        opacity: 0.7;
        cursor: pointer;
    }
`;