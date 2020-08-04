import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { Button, HeroButton } from "../../components/Button"
import { Buttons, HeroSheet, HeroSheetStyle, FeatureDisplay, Feature, FeatureImage, Heading, Description, Title, FeatureIcon, NavFixed, HeroCover, HCC, HeroTitle, HeroSubtitle, Eyeballs, Eyeball, IrisLeft, IrisRight, Jail, JailTrigger } from "../../components/style"
import { createGlobalStyle } from "styled-components"

import { getOS } from "../helpers/os"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import FeatherIcon from 'feather-icons-react';
import { ButtonV2 } from "../../components/ButtonV2"
import { isBrowser } from "../../helpers/login"

const HSS = createGlobalStyle`${HeroSheetStyle}`;

const DotBrowserPage = () => {
    const leftEyeRef = React.createRef<HTMLDivElement>();
    const rightEyeRef = React.createRef<HTMLDivElement>();

    const [jailVisible, setJV] = React.useState(false);

    isBrowser() && window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            if(leftEyeRef.current == null) return;
            if(rightEyeRef.current == null) return;

            leftEyeRef.current.style.transform = `translate(${e.clientX/25}px, ${e.clientY/25}px)`
            rightEyeRef.current.style.transform = `translate(${e.clientX/25}px, ${e.clientY/25}px)`
        })
    })

    const onButtonsMouseEnter = () => {
        setJV(true)
    }

    const onButtonsMouseLeave = (e) => {
        // if(leftEyeRef.current == null) return;
        // if(rightEyeRef.current == null) return;

        // leftEyeRef.current.style.transform = `translate(${e.clientX/25}px, ${e.clientY/25}px)`
        // rightEyeRef.current.style.transform = `translate(${e.clientX/25}px, ${e.clientY/25}px)`

        setJV(false);
    }

    return (
        <>
            <Layout darkNav={false} noHero>
                <SEO title="Download Dot Browser" />
                <HeroCover h={563} background={"black"} style={{ marginBottom: '80px' }}>
                    <HCC w={1330} top={86} bottom={96} style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ display: 'flex', width: '550px', flexDirection: 'column', zIndex: '999' }}>
                            <HeroTitle color={"white"}>Browse securely without prying eyes</HeroTitle>
                            <HeroSubtitle color={"white"}>Get Dot Browser to block annoying advertisments and trackers. It’s that simple.</HeroSubtitle>
                            <Buttons style={{ marginTop: '72px', display: 'block' }}>
                                <ButtonV2 background={"white"} color={"black"}>Download for macOS</ButtonV2>
                                <ButtonV2 background={"transparent"} color={"white"}>Try our mobile version</ButtonV2>
                            </Buttons>
                        </div>
                        <JailTrigger onMouseEnter={onButtonsMouseEnter} onMouseLeave={(e) => onButtonsMouseLeave(e)} />
                        <div style={{ flex: 1 }}>
                            <Jail visible={jailVisible} />
                            <Eyeballs visible={!jailVisible}>
                                <Eyeball style={{ marginRight: '50px' }}>
                                    <IrisLeft ref={leftEyeRef} />
                                </Eyeball>

                                <Eyeball>
                                    <IrisRight ref={rightEyeRef} />
                                </Eyeball>
                            </Eyeballs>
                        </div>
                    </HCC>

                    <NavFixed />
                </HeroCover>

            </Layout>
        </>
    )
}

export default DotBrowserPage
