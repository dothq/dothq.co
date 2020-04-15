import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton } from "../components/Button"
import { Buttons, HeroSheet, HeroSheetStyle } from "../components/style"
import { createGlobalStyle } from "styled-components"

import * as landingScreenshotLight from '../images/landing-screenshot-light.png'

const HSS = createGlobalStyle`${HeroSheetStyle}`;

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Dot Browser, the privacy-centric web browser" isHome />
      <h1 className="hero-title" data-sal="slide-up" data-sal-delay="200" data-sal-duration="500" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)">Take back your privacy.</h1>
      <p className="hero-p" data-sal="slide-up" data-sal-delay="400" data-sal-duration="500" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)"><strong>Dot Browser</strong> is a <strong>privacy-conscious</strong> web browser that protects you from being <strong>tracked</strong> and <strong>monitored</strong>.</p>
      
      <Buttons style={{ marginBottom: '34px' }} data-sal="slide-up" data-sal-duration="500" data-sal-delay="600" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)">
        <Link to={"/download"} style={{ textDecoration: 'none' }}>
          <HeroButton shade={"blue"}>Download for macOS</HeroButton>
        </Link>
        <Link to={"#features"} style={{ textDecoration: 'none', marginLeft: '32px' }}>
          <HeroButton shade={"white"}>Learn more</HeroButton>
        </Link>
      </Buttons>

      <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, margin: '0 auto' }}>
        <img src={landingScreenshotLight} data-sal="slide-up" data-sal-duration="500" data-sal-delay="1000" data-sal-easing="cubic-bezier(0.87, 0, 0.13, 1)" data-sal-threshold={0.1} />
      </div>

    </Layout>
    <HeroSheet>
      <HSS />
    </HeroSheet>
  </>
)

export default IndexPage
