import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

const SponsorsPage = () => {
    return (
        <Layout noEnding>
            <SEO title="Sponsors" />
            <div style={{ paddingTop: 'calc(100vh / 24)', marginBottom: '3.5rem' }}>
                <h1 style={{ fontSize: '3rem' }}>Sponsors</h1>
                <p style={{ fontSize: '16px', width: '400px', marginTop: '-18px' }}>Thank you to the following people for making Dot HQ happen with their services.</p>

            </div>
            <div style={{ textAlign: "center" }}>
                Fosshost - <a href={"https://fosshost.org"} style={{ color: "blue" }}>fosshost.org</a>
            </div>
        </Layout>
    )
}

export default SponsorsPage
