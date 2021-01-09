import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

export const StyledListItem = styled.li`
    height: 32px;
    border-bottom: 1px solid var(--gray-4);
    display: flex;
    align-items: center;
    height: auto;
    padding: 8px 0;
    margin: 0;

    font-weight: 400;
    font-size: 14px;

    &:last-of-type {
        border: none;
    }

    img {
        user-select: none;
    }
`;