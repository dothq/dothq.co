import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton } from "../components/Button"
import { Buttons, HeroSheet, HeroSheetStyle, FeatureDisplay, Feature, FeatureImage, Heading, Description, Title } from "../components/style"
import { createGlobalStyle } from "styled-components"

import * as landingScreenshotLight from '../images/landing-screenshot-light.png'
import * as landingScreenshotDark from '../images/landing-screenshot-dark.png'

import * as blockAds from '../images/features/block_ads.svg'
import * as familiarDesign from '../images/features/familiar_design.svg'
import * as syncData from '../images/features/sync_data.svg'
import * as openSource from '../images/features/open_source.svg'
import { getOS } from "../helpers/os"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const HSS = createGlobalStyle`${HeroSheetStyle}`;

const IndexPage = () => {
  const themeContext = React.useContext(ThemeManagerContext)

  return (
    <>
      <Layout>
        <SEO title="Dot Browser, the privacy-centric web browser" isHome />
        <div dot-slideup="true" style={{ animationDelay: '0.2s' }}><Title className="hero-title">Take back your privacy.</Title></div>
        <p className="hero-p" dot-slideup={"true"} style={{ animationDelay: '0.4s' }}><strong>Dot Browser</strong> is a <strong>privacy-conscious</strong> web browser that protects you from being <strong>tracked</strong> and <strong>monitored</strong>.</p>
        
        <div dot-slideup="true" style={{ animationDelay: '0.8s' }}>
          <Buttons style={{ marginBottom: '34px' }}>
            <Link to={"/download"} style={{ textDecoration: 'none', pointerEvents: getOS() == "iOS" || getOS() == "Android" ? "none" : "all" }}>
              <HeroButton shade={"blue"} disabled={getOS() == "iOS" || getOS() == "Android"}>Download for {getOS()}</HeroButton>
            </Link>
            <Link to={"#features"} style={{ textDecoration: 'none', marginLeft: '32px' }}>
              <HeroButton shade={"white"}>Learn more</HeroButton>
            </Link>
          </Buttons>
        </div>

        <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, margin: '0 auto' }}>
          <img src={themeContext.isDark ? landingScreenshotDark : landingScreenshotLight} dot-slideup={"true"} style={{ animationDelay: '1s' }} />
        </div>

        <div dot-slideup="true" style={{ animationDelay: '1.8s' }}>
          <FeatureDisplay>
            <Feature>
              <FeatureImage src={blockAds} />
              <Heading>Block ads with ease</Heading>
              <Description>Dot automatically blocks advertisments and trackers out of the box.</Description>
            </Feature>
            <Feature>
              <FeatureImage src={familiarDesign} />
              <Heading>Familiar design</Heading>
              <Description>You won’t need to re-invent the wheel to understand the layout.</Description>
            </Feature>
            <Feature>
              <FeatureImage src={syncData} />
              <Heading>Back-up your data</Heading>
              <Description>Use your Dot ID to sync your browsing data to the cloud.</Description>
            </Feature>
            <Feature>
              <FeatureImage src={openSource} />
              <Heading>Everything open-source</Heading>
              <Description>Transparency is our heart. You can read every line of code that goes into our browser.</Description>
            </Feature>
          </FeatureDisplay>
        </div>

      </Layout>
      <HeroSheet>
        <HSS />
      </HeroSheet>
    </>
  )
}

export default IndexPage
