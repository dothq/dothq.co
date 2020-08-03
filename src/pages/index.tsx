import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton } from "../components/Button"
import { Buttons, HeroSheet, HeroSheetStyle, FeatureDisplay, Feature, FeatureImage, Heading, Description, Title, FeatureIcon } from "../components/style"
import { createGlobalStyle } from "styled-components"

import landingShowcase from '../images/landing-showcase.svg'

import * as shield from '../images/icons/shield.svg'
import * as mail from '../images/icons/mail.svg'
import * as sync from '../images/icons/sync.svg'

import * as blockerFeature from '../images/features/blocker_feature.svg'
import * as maskFeature from '../images/features/mask_feature.svg'
import * as syncFeature from '../images/features/sync_feature.svg'

import { getOS } from "../helpers/os"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

import FeatherIcon from 'feather-icons-react';
import { ButtonV2 } from "../components/ButtonV2"

const HSS = createGlobalStyle`${HeroSheetStyle}`;

const IndexPage = () => {
  const themeContext = React.useContext(ThemeManagerContext)

  return (
    <>
      <Layout>
        <SEO title="Dot Browser, the privacy-centric web browser" isHome />
        <div dot-slideup="true" style={{ animationDelay: '0.2s' }}><Title className="hero-title">Take back your privacy.</Title></div>
        <p className="hero-p" dot-slideup={"true"} style={{ animationDelay: '0.4s', opacity: 0.7 }}>Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisments online.</p>
        
        <div dot-slideup="true" style={{ animationDelay: '0.8s' }}>
          <Buttons style={{ marginBottom: '34px' }}>
            <Link to={"/#features"} style={{ textDecoration: 'none', pointerEvents: getOS() == "iOS" || getOS() == "Android" ? "none" : "all" }}>
              <ButtonV2 background={"#f6f6f6"} color={"black"}>Learn More</ButtonV2>
            </Link>
            <Link to={"/download"} style={{ textDecoration: 'none', marginLeft: '12px' }}>
              <ButtonV2>Download Dot Browser</ButtonV2>
            </Link>
          </Buttons>
        </div>

        <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, margin: '0 auto' }}>
          <img src={landingShowcase} dot-slideup={"true"} style={{ animationDelay: '1s' }} />
        </div>

        <div id="features" dot-slideup="true" style={{ animationDelay: '1.8s' }}>
          <FeatureDisplay>
            <Feature>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <FeatureIcon src={shield} />
                <div style={{ marginTop: '58px' }}>
                  <Heading>Block ads with ease</Heading>
                  <Description>Dot Browser blocks all those pesky advertisments and trackers you come across while browsing the web.</Description>
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <FeatureImage src={blockerFeature} style={{ width: '623px', height: '325px' }} />
              </div>

            </Feature>

            <Feature>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <FeatureImage src={maskFeature} style={{ width: '623px', height: '325px' }} />
              </div>

              <div style={{ display: 'flex' }}>
                <div>
                  <FeatureIcon src={mail} style={{ marginLeft: 'auto' }} />
                  <Heading style={{ marginTop: '58px', direction: 'rtl' }}>Say goodbye to spam</Heading>
                  <Description style={{ textAlign: 'right' }}>Dot Browser offers to mask your email with a temporary email address when registering for services online.</Description>
                </div>
              </div>


            </Feature>

            <Feature>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <FeatureIcon src={sync} />
                <div style={{ marginTop: '58px' }}>
                  <Heading>Pick up where you left off</Heading>
                  <Description>Dot Browser securely syncs your browsing data between devices linked to your Dot ID.</Description>

                  <ButtonV2 w={224} style={{ marginTop: '32px' }}>Learn more about this</ButtonV2>
                </div>
              </div>

              <div style={{ display: 'flex' }}>
                <FeatureImage src={syncFeature} style={{ width: '623px', height: '325px' }} />
              </div>

            </Feature>

          </FeatureDisplay>
        </div>

      </Layout>
    </>
  )
}

export default IndexPage
