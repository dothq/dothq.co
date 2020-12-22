import React from 'react';

import { StyledEnding, ContainerParent, Container, Title } from "./style";
import { Link } from 'gatsby';

import { ButtonV2 } from '../ButtonV2'

const Ending = () => (
    <StyledEnding className={"ending"}>
        <ContainerParent>
            <Container>
                <Title>Ready for some privacy?</Title>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Link to={"https://github.com/dothq/browser-pr-builds/releases"}>
                        <ButtonV2 background={"white"} color={"black"} w={173}>Download</ButtonV2>
                    </Link>
                </div>
            </Container>
        </ContainerParent>
    </StyledEnding>
)

export default Ending;
