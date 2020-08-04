import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button, HeroButton, TextButton } from "../components/Button"
import { Buttons, FeatureDisplay, Feature, FeatureImage, Heading, Description, Title } from "../components/style"
import { createGlobalStyle } from "styled-components"

import { getOS } from "../helpers/os"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

const BLMPage = () => {
  const themeContext = React.useContext(ThemeManagerContext)

  React.useEffect(() => {
    if(themeContext.isDark === false) {
      themeContext.toggleDark()
    }
  })

  return (
    <>
      <Layout noEnding isHome>
        <SEO title="Dot Browser, the privacy-centric web browser" isHome />
        <div dot-slideup="true" style={{ animationDelay: '0.2s' }}><Title className="hero-title">Black. Lives. Matter.</Title></div>
        <p className="hero-p" dot-slideup={"true"} style={{ animationDelay: '0.4s' }}>The <strong>Dot HQ Community</strong> believe that Black Lives Matter. We will not stand in silence while people are being mistreated.</p>

        <p className="hero-p" dot-slideup={"true"} style={{ animationDelay: '0.6s' }}>
          Please consider donating to <a href={"https://blacklivesmatter.com/"}><TextButton style={{ fontSize: '24px' }} isBasic>Black Lives Matter</TextButton></a> and or the <a href={"https://www.gofundme.com/f/georgefloyd"}><TextButton style={{ fontSize: '24px' }} isBasic>George Floyd Memorial Fund</TextButton></a>.
          <br /><br />
          Love, The Dot Team <Emoji text={"❤️"} options={generateEmojiConfig({ className: 'blm-emoji' })} />
        </p>

      </Layout>
    </>
  )
}

export default BLMPage
