import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { Button, HeroButton } from "../../../components/Button"
import { Buttons, FeatureDisplay, Feature, FeatureImage, Heading, Description, Title, FeatureIcon, NavFixed, HeroCover, HCC, HeroTitle, HeroSubtitle, Eyeballs, Eyeball, IrisLeft, IrisRight, Jail, JailTrigger } from "../../../components/style"
import { createGlobalStyle } from "styled-components"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import FeatherIcon from 'feather-icons-react';
import { ButtonV2 } from "../../../components/ButtonV2"
import { isBrowser } from "../../../helpers/login"
import { getOS } from "../../../helpers/os"

import * as shield from '../../../assets/images/icons/shield.svg'
import * as mail from '../../../assets/images/icons/mail.svg'
import * as sync from '../../../assets/images/icons/sync.svg'

import * as mobileScreenshot from '../../../assets/images/mobile-screenshot.svg'
import { Content } from "../../../components/Hero/style"

class DotBrowserMobilePage extends React.Component {
    public props;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout darkNav={true}>
                <SEO title="Download Dot Browser for Mobile" />
                <Content hasHero>
                    <div className={"hero-container"} style={{ '--spacing': '110px', backgroundColor: "black", boxShadow: "none", border: "none" }}>
                        <div className={"hero-content"} style={{ flexDirection: "inherit" }}>
                            <div className={"db-download-container"} style={{ display: 'flex', width: '550px', flexDirection: 'column', zIndex: 999 }}>
                                <HeroTitle color={"white"}>Browse the web on the go with privacy</HeroTitle>
                                <HeroSubtitle color={"white"}>It’s the same Dot Browser experience, with all your favourite privacy features, just pocket-sized.</HeroSubtitle>
                                <Buttons className={"mobile-btns"} style={{ marginTop: '72px', display: 'flex', justifyContent: 'flex-start' }}>
                                    <ButtonV2 background={"white"} color={"black"} style={{ minHeight: '40px', height: '40px' }}>Download for iOS</ButtonV2>
                                    <ButtonV2 background={"transparent"} color={"white"}>Download for Android</ButtonV2>
                                </Buttons>
                            </div>
                            <div className={"eyeball-container"} style={{ flex: 1, height: '0px' }}>
                                <img src={mobileScreenshot} style={{ 
                                    width: '422px',
                                    margin: '0 auto',
                                    display: 'flex',
                                    borderRadius: '12px 12px 0 0'
                                }} />
                            </div>
                        </div>
                    </div>

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
                </Content>
            </Layout>
        )
    }
}

export default DotBrowserMobilePage
