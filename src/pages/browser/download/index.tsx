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
import { isBrowser } from "../../../../lib/helpers/login"
import { getOS } from "../../../../lib/helpers/os"

import * as shield from '../../../assets/images/icons/shield.svg'
import * as mail from '../../../assets/images/icons/mail.svg'
import * as sync from '../../../assets/images/icons/sync.svg'
import { Content } from "../../../components/Hero/style"

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
        if(getOS() && getOS().isMobile) navigate("/browser/download/mobile");

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
            <Layout darkNav={true}>
                <SEO title="Download Dot Browser" />
                <Content hasHero>
                    <div className={"hero-container"} style={{ backgroundColor: "black", '--spacing': '110px'  }}>
                        <div className={"hero-content"} style={{ flexDirection: "inherit" }}>
                            <div className={"db-download-container"} style={{ display: 'flex', width: '550px', flexDirection: 'column', zIndex: 999 }}>
                                <HeroTitle color={"white"}>Browse securely without prying eyes</HeroTitle>
                                <HeroSubtitle color={"white"}>Get Dot Browser to block annoying advertisments and trackers. It’s that simple.</HeroSubtitle>
                                <Buttons className={"db-download-buttons"} style={{ marginTop: '72px', display: 'flex', justifyContent: 'flex-start' }}>
                                    <ButtonV2 background={"white"} color={"black"}>Download for {getOS() && getOS().os}</ButtonV2>
                                    <Link to={"/browser/download/mobile"}>
                                        <ButtonV2 background={"transparent"} color={"white"}>Try our mobile version</ButtonV2>
                                    </Link>
                                </Buttons>
                            </div>
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

export default DotBrowserPage
