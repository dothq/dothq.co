import React from 'react';

import { StyledEnding, ContainerParent, Container, Title, Or, FadingOutScreenshot } from "./style";
import { HeroButton } from '../Button';
import { Buttons } from '../style';
import { getOS } from '../../helpers/os';
import { Link } from 'gatsby';

import * as macos from '../../images/os/macos.png'
import * as windows from '../../images/os/windows.png'
import * as linux from '../../images/os/linux.png'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import { ButtonV2 } from '../ButtonV2'

const Ending = () => (
    <StyledEnding>
        <ContainerParent>
            <Container>
                <Title>Ready for some privacy?</Title>
                <Buttons style={{ marginTop: '60px', justifyContent: 'center' }}>
                    <Link to={"/download"}>
                        <ButtonV2 background={"white"} color={"black"} w={173}>Download</ButtonV2>
                    </Link>
                </Buttons>
            </Container>
        </ContainerParent>
    </StyledEnding>
)

export default Ending;
