import React from 'react';

import { StyledEnding, ContainerParent, Container, Heading, Title, Or, FadingOutScreenshot } from "./style";
import { HeroButton } from '../Button';
import { Buttons } from '../style';
import { getOS } from '../../helpers/os';
import { Link } from 'gatsby';

import * as macos from '../../images/os/macos.png'
import * as windows from '../../images/os/windows.png'
import * as linux from '../../images/os/linux.png'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

const OSLink = ({ os }) => {
    const themeContext = React.useContext(ThemeManagerContext)

    if(os == "windows") { 
        return (
            <Link to={"/download?os=windows"} style={{ textDecoration: 'none', width: '28px', height: '28px', marginTop: '10px', marginRight: '18px' }}>
                <img src={windows} style={{ filter: themeContext.isDark ? 'invert(1)' : '' }} />
            </Link>
        )
    } else if(os == "macos") {
        return (
            <Link to={"/download?os=macos"} style={{ textDecoration: 'none', width: '28px', height: '28px', marginTop: '10px', marginRight: '18px' }}>
                <img src={macos} style={{ filter: themeContext.isDark ? 'invert(1)' : '' }} />
            </Link>
        )
    } else {
        return (
            <Link to={"/download?os=linux"} style={{ textDecoration: 'none', width: '28px', height: '28px', marginTop: '10px', marginRight: '18px' }}>
                <img src={linux} style={{ filter: themeContext.isDark ? 'invert(1)' : '' }} />
            </Link>
        )
    }
}

const Ending = () => (
    <StyledEnding>
        <ContainerParent>
            <Container style={{ width: '514px', display: 'inline-block' }}>
                <Heading>Protect your privacy.</Heading>
                <Title>Download Dot Browser</Title>
                <Buttons style={{ marginTop: '72px', justifyContent: 'flex-start' }}>
                    <Link to={"/download"} style={{ textDecoration: 'none' }}>
                        <HeroButton shade={"black"}>Download for {getOS()}</HeroButton>
                    </Link>
                    <Or />
                    {getOS() == "Windows" || getOS() == "macOS" ? <OSLink os={"linux"} /> : ''}
                    {getOS() == "Linux" || getOS() == "macOS" ? <OSLink os={"windows"} /> : ''}
                    {getOS() == "Linux" || getOS() == "Windows" ? <OSLink os={"macos"} /> : ''}
                </Buttons>
            </Container>
            <Container style={{ width: '650px', paddingTop: 0 }}>
                <FadingOutScreenshot />
            </Container>
        </ContainerParent>
    </StyledEnding>
)

export default Ending;
