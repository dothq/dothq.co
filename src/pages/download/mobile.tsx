import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { Button, HeroButton } from "../../components/Button"
import { Buttons, FeatureDisplay, Feature, FeatureImage, Heading, Description, Title, FeatureIcon, NavFixed, HeroCover, HCC, HeroTitle, HeroSubtitle, Eyeballs, Eyeball, IrisLeft, IrisRight, Jail, JailTrigger } from "../../components/style"
import { createGlobalStyle } from "styled-components"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import FeatherIcon from 'feather-icons-react';
import { ButtonV2 } from "../../components/ButtonV2"
import { isBrowser } from "../../helpers/login"
import { getOS } from "../../helpers/os"

import * as shield from '../../images/icons/shield.svg'
import * as mail from '../../images/icons/mail.svg'
import * as sync from '../../images/icons/sync.svg'

import * as mobileScreenshot from '../../images/mobile-screenshot.svg'

class DotBrowserMobilePage extends React.Component {
    public props;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Layout darkNav={false} noHero>
                    <SEO title="Download Dot Browser for Mobile" />
                    <HeroCover h={563} background={"black"} style={{ marginBottom: '80px', height: 'fit-content' }}>
                        <HCC w={1330} top={86} bottom={96} style={{ display: 'flex', flexDirection: 'row', paddingTop: '64px', paddingBottom: '96px' }}>
                            <div className={"db-download-container"} style={{ display: 'flex', width: '670px', flexDirection: 'column', zIndex: 999, paddingTop: '86px', paddingBottom: '0px' }}>
                                <HeroTitle color={"white"}>Browse the web on the go with privacy</HeroTitle>
                                <HeroSubtitle color={"white"}>It’s the same Dot Browser experience, with all your favourite privacy features, just pocket-sized.</HeroSubtitle>
                                <Buttons className={"mobile-btns"} style={{ marginTop: '72px', display: 'flex', justifyContent: 'end' }}>
                                    <ButtonV2 background={"white"} color={"black"} style={{ minHeight: '40px', height: '40px' }}>Download for iOS</ButtonV2>
                                    <ButtonV2 background={"transparent"} color={"white"}>Download for Android</ButtonV2>
                                </Buttons>
                            </div>
                            <div className={"eyeball-container"} style={{ flex: 1, height: '0px' }}>
                                <img src={mobileScreenshot} style={{ 
                                    width: '452px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    marginTop: 'calc(100px - 64px)',
                                    clipPath: 'inset(0 0 512px 0)'
                                }} />
                            </div>
                        </HCC>
    
                        <NavFixed />
                    </HeroCover>

                    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', '--spacing': '54px', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', margin: '0 var(--spacing)', paddingBottom: '4.25rem' }}>
                            <div style={{ maxWidth: '299px', justifySelf: 'center' }}>
                                <FeatureIcon src={shield} style={{ margin: '0 auto' }} />
                                <Heading style={{ marginTop: '58px', fontSize: '30px', textAlign: 'center' }}>Block ads with ease</Heading>
                                <Description style={{ width: 'auto', textAlign: 'center' }}>Dot Browser blocks all those pesky advertisments and trackers you come across while browsing the web.</Description>
                            </div>
                        </div>
                        <div style={{ display: 'flex', margin: '0 var(--spacing)', paddingBottom: '4.25rem' }}>
                            <div style={{ maxWidth: '325px', justifySelf: 'center' }}>
                                <FeatureIcon src={mail} style={{ margin: '0 auto' }} />
                                <Heading style={{ marginTop: '58px', fontSize: '30px', textAlign: 'center' }}>Say goodbye to spam</Heading>
                                <Description style={{ width: 'auto', textAlign: 'center' }}>Dot Browser offers to mask your email with a temporary email address when registering for services online.</Description>
                            </div>
                        </div>
                        <div style={{ display: 'flex', margin: '0 var(--spacing)', paddingBottom: '4.25rem' }}>
                            <div style={{ maxWidth: '377px', justifySelf: 'center' }}>
                                <FeatureIcon src={sync} style={{ margin: '0 auto' }} />
                                <Heading style={{ marginTop: '58px', fontSize: '30px', textAlign: 'center' }}>Pick up where you left off</Heading>
                                <Description style={{ width: 'auto', textAlign: 'center' }}>Dot Browser securely syncs your browsing data between devices linked to your Dot ID.</Description>
                            </div>
                        </div>
                    </div>
    
                </Layout>
            </>
        )
    }
}

export default DotBrowserMobilePage
