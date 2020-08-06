import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Buttons, Title } from "../components/style"

import landingShowcase from '../images/landing-showcase.png'

import { ButtonV2 } from "../components/ButtonV2"
import { Features } from "../components/Features"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Dot Browser, the privacy-centric web browser" isHome />
        <div dot-slideup="true" style={{ animationDelay: '0.2s' }}><Title className="hero-title">Take back your privacy.</Title></div>
        <p className="hero-p" dot-slideup={"true"} style={{ animationDelay: '0.4s', opacity: 0.7 }}>Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisments online.</p>
        
        <div dot-slideup="true" style={{ animationDelay: '0.8s' }}>
          <Buttons style={{ marginBottom: '34px' }}>
            <Link to={"/#features"}>
              <ButtonV2 background={"#f6f6f6"} color={"black"}>Learn More</ButtonV2>
            </Link>
            <Link to={"/#"} style={{ marginLeft: '12px' }}>
              <ButtonV2>Download Coming Soon</ButtonV2>
            </Link>
          </Buttons>
        </div>

        <div style={{ maxWidth: `1920px`, marginBottom: `1.45rem`, margin: '0 auto' }}>
          <img src={landingShowcase} dot-slideup={"true"} style={{ animationDelay: '1s', width: '100%', height: '100%' }} />
        </div>

        <Features />

      </Layout>
    </>
  )
}

export default IndexPage
