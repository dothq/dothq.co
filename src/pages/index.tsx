import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton } from "../components/Button"
import { Buttons, HeroSheet, HeroSheetStyle, FeatureDisplay, Feature, FeatureImage, Heading, Description } from "../components/style"
import { createGlobalStyle } from "styled-components"

import * as landingScreenshotLight from '../images/landing-screenshot-light.png'

import * as blockAds from '../images/features/block_ads.svg'
import * as familiarDesign from '../images/features/familiar_design.svg'
import * as syncData from '../images/features/sync_data.svg'
import * as openSource from '../images/features/open_source.svg'
import { getOS } from "../helpers/os"

const HSS = createGlobalStyle`${HeroSheetStyle}`;

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Dot Browser, the privacy-centric web browser" isHome />
      <h1 className="hero-title" data-sal="slide-up" data-sal-delay="200" data-sal-duration="500" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)">Take back your privacy.</h1>
      <p className="hero-p" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)"><strong>Dot Browser</strong> is a <strong>privacy-conscious</strong> web browser that protects you from being <strong>tracked</strong> and <strong>monitored</strong>.</p>
      
      <Buttons style={{ marginBottom: '34px' }} data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)">
        <Link to={"/download"} style={{ textDecoration: 'none' }}>
          <HeroButton shade={"blue"}>Download for {getOS()}</HeroButton>
        </Link>
        <Link to={"#features"} style={{ textDecoration: 'none', marginLeft: '32px' }}>
          <HeroButton shade={"white"}>Learn more</HeroButton>
        </Link>
      </Buttons>

      <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, margin: '0 auto' }}>
        <img src={landingScreenshotLight} data-sal="slide-up" data-sal-duration="500" data-sal-delay="1000" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)" data-sal-threshold={0.1} />
      </div>

      <FeatureDisplay data-sal="slide-up" data-sal-duration="500" data-sal-delay="100" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)">
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

    </Layout>
    <HeroSheet>
      <HSS />
    </HeroSheet>
  </>
)

export default IndexPage
