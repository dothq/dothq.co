import React from "react"
import { Link } from "gatsby"

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

class DotBrowserPage extends React.Component {
    public leftEyeRef = React.createRef<HTMLDivElement>();
    public rightEyeRef = React.createRef<HTMLDivElement>();

    public props;

    public state = {
        jailVisible: false
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        isBrowser() && window.addEventListener('mousemove', (e) => {
            if(!document.hasFocus()) return;

            requestAnimationFrame(() => {
                if(window.matchMedia("(max-width: 1280px)").matches) return;
    
                if(this.leftEyeRef.current == null) return;
                if(this.rightEyeRef.current == null) return;
    
                const multiplier = (window.innerWidth+window.innerHeight)*Math.PI/380;

                this.leftEyeRef.current.style.transform = `translate(${e.clientX/multiplier}px, ${e.clientY/multiplier}px)`
                this.rightEyeRef.current.style.transform = `translate(${e.clientX/multiplier}px, ${e.clientY/multiplier}px)`
            })
        })

        var to;

        const jailRunner = () => {
            if(!document.hasFocus()) return this.setState({ jailVisible: false });

            this.setState({ jailVisible: !this.state.jailVisible })

            clearTimeout(to);
            to = setTimeout(jailRunner, 8000)
        }
    
        to = setTimeout(jailRunner, 3000)

    }

    render() {
        return (
            <>
                <Layout darkNav={false} noHero>
                    <SEO title="Download Dot Browser" />
                    <HeroCover h={563} background={"black"} style={{ marginBottom: '80px' }}>
                        <HCC w={1330} top={86} bottom={96} style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={"db-download-container"} style={{ display: 'flex', width: '550px', flexDirection: 'column', zIndex: 999 }}>
                                <HeroTitle color={"white"}>Browse securely without prying eyes</HeroTitle>
                                <HeroSubtitle color={"white"}>Get Dot Browser to block annoying advertisments and trackers. It’s that simple.</HeroSubtitle>
                                <Buttons style={{ marginTop: '72px', display: 'block' }}>
                                    <ButtonV2 background={"white"} color={"black"}>Download for {getOS()}</ButtonV2>
                                    <ButtonV2 background={"transparent"} color={"white"}>Try our mobile version</ButtonV2>
                                </Buttons>
                            </div>
                            <JailTrigger />
                            <div className={"eyeball-container"} style={{ flex: 1 }}>
                                <Jail visible={this.state.jailVisible} />
                                <Eyeballs visible={!this.state.jailVisible}>
                                    <Eyeball style={{ marginRight: '50px' }}>
                                        <IrisLeft ref={this.leftEyeRef} />
                                    </Eyeball>
    
                                    <Eyeball>
                                        <IrisRight ref={this.rightEyeRef} />
                                    </Eyeball>
                                </Eyeballs>
                            </div>
                        </HCC>
    
                        <NavFixed />
                    </HeroCover>

                    <div className={"fn-center"} style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <FeatureIcon src={shield} />
                                <div style={{ marginTop: '58px' }}>
                                    <Heading>Block ads with ease</Heading>
                                    <Description>Dot Browser blocks all those pesky advertisments and trackers you come across while browsing the web.</Description>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <FeatureIcon src={mail} />
                                <div style={{ marginTop: '58px' }}>
                                    <Heading>Say goodbye to spam</Heading>
                                    <Description>Dot Browser offers to mask your email with a temporary email address when registering for services online.</Description>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <FeatureIcon src={sync} />
                                <div style={{ marginTop: '58px' }}>
                                    <Heading>Pick up where you left off</Heading>
                                    <Description>Dot Browser securely syncs your browsing data between devices linked to your Dot ID.</Description>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </Layout>
            </>
        )
    }
}

export default DotBrowserPage
