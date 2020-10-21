import styled, { css } from "styled-components";

export const StyledHero = styled.section`
    margin: 0px auto;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    margin-top: calc(64px + 84px);

    ${({ hasHero }: { hasHero?: boolean }) => css`
        ${hasHero ? `
            display: flex;
            align-items: center;
            max-width: unset !important;
            margin: 0 auto;
            flex-direction: column;
            overflow-x: hidden;

            .hero-container {
                border-bottom: 1px solid #EAEAEA;
                box-shadow: 0 3.2px 7.2px 0 #0002,0 .6px 1.8px 0 #0000001c;
                padding-top: calc(64px + var(--spacing, 82px));
                padding-bottom: var(--spacing, 64px);
                width: 100%;
                margin-bottom: 3.5rem;
                background-color: white;
            }

            .hero-container > .hero-content {
                max-width: 1300px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
            }
        ` : ''};
    `};
`;