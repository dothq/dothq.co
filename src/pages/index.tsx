import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton } from "../components/Button"
import { Buttons, HeroSheet, HeroSheetStyle } from "../components/style"
import { createGlobalStyle } from "styled-components"

const HSS = createGlobalStyle`${HeroSheetStyle}`;

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Dot Browser, the privacy-centric web browser" isHome />
      <h1>Take back your privacy.</h1>
      <p><strong>Dot Browser</strong> is a <strong>privacy-conscious</strong> web browser that protects you from being <strong>tracked</strong> and <strong>monitored</strong>.</p>
      <Buttons style={{ marginBottom: '34px' }}>
        <Link to={"/download"} style={{ textDecoration: 'none' }}>
          <HeroButton shade={"blue"}>Download for macOS</HeroButton>
        </Link>
        <Link to={"/download"} style={{ textDecoration: 'none', marginLeft: '32px' }}>
          <HeroButton shade={"white"}>Learn more</HeroButton>
        </Link>
      </Buttons>
      <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, margin: '0 auto' }}>
        <Image fileName={"landingScreenshotLight"} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    <HeroSheet>
      <HSS />
    </HeroSheet>
  </>
)

export default IndexPage
