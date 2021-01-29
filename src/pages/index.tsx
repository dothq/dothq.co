import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Buttons, P, Title } from "../components/style"

import landingShowcase from '../assets/images/browser.png'

import { ButtonV2 } from "../components/ButtonV2"
import { Features } from "../components/Features"
import { Content } from "../components/Hero/style"
import { colours } from "../colours"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Dot Browser, the privacy-centric web browser" isHome />
        <Content style={{ textAlign: "left" }}>

          <div style={{ display: "flex", flexDirection: "row" }}>

            <div style={{ maxWidth: "420px", paddingTop: "60px" }}>
              <Title className="hero-title">Take back your privacy.</Title>
              <P className="hero-p">Dot Browser is a privacy-conscious web browser with smarts built-in for protection against trackers and advertisments online.</P>
              
              <Buttons style={{ marginTop: '48px', justifyContent: "left" }} className={"landing-btns"}>
                <Link to={"/#features"}>
                  <ButtonV2 background={colours.gray4} color={"black"}>Learn More</ButtonV2>
                </Link>
                <Link to={"/browser"} style={{ marginLeft: '16px' }}>
                  <ButtonV2>Download Dot</ButtonV2>
                </Link>
              </Buttons>
            </div>

            <div style={{ width: "907px", display: "flex", justifyContent: "flex-end" }}>
              <img src={landingShowcase} width={800} id="browser-ui" />
              <img id="browser-wallpaper" src="https://source.unsplash.com/collection/67042424/800x522" width={800} height={522}></img>
            </div>

          </div>

          <div style={{ maxWidth: "674px", margin: "0 auto", marginTop: "88px", textAlign: "center" }}>
            <h4 style={{ color: colours.gray1, lineHeight: "38px", marginBottom: "16px" }}>We built a privacy browser in a world where your personal data is sold to the highest bidder.</h4>
            <P style={{ maxWidth: "500px", margin: "0 auto", fontWeight: 400 }}>Your data is constantly being sold through large advertisement networks that track what sites you like to visit online.</P>
          </div>

          <Features />
        </Content>
      </Layout>
    </>
  )
}

export default IndexPage
