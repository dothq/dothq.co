import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton } from "../components/Button"
import { Buttons } from "../components/style"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Dot Browser, the privacy-centric web browser" isHome />
      <h1>Take back your privacy.</h1>
      <p><strong>Dot Browser</strong> is a <strong>privacy-conscious</strong> web browser that protects you from being <strong>tracked</strong> and <strong>monitored</strong>.</p>
      <Buttons>
        <Link to={"/download"} style={{ textDecoration: 'none', marginLeft: '16px' }}>
          <HeroButton>Download for macOS</HeroButton>
        </Link>
      </Buttons>
      <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, margin: '0 auto' }}>
        <Image fileName={"landingScreenshotLight"} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
    <div className="hero-top-sheet"></div>
  </>
)

export default IndexPage
