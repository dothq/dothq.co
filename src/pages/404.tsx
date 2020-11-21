import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../../lib/tools/emoji"
import { Content } from "../components/Hero/style"

const NotFoundPage = () => {
    return (
        <Layout noEnding>
            <SEO title="Page Not Found" />
            <Content hasHero>
                <div className={"no-shadow hero-container"} style={({ '--spacing': "calc(100vh / 8)", marginBottom: 0 } as any)}>
                    <Emoji text={"🙄"} options={generateEmojiConfig({ className: 'emoji' })} />
                    <h1 style={{ fontSize: '2.8rem', marginTop: '12px' }}>404</h1>
                    <p style={{ fontSize: '16px', width: '400px', marginTop: '-8px' }}>We couldn't find that page.</p>

                    <Link to={"/"}>
                        <TextButton style={{ width: "max-content", margin: "0 auto", display: "flex", alignItems: "center" }} isBasic>
                            <FeatherIcon size={20} icon={"arrow-left"} style={{ marginRight: "6px" }} /> 
                            Go home
                        </TextButton>
                    </Link>
                </div>
            </Content>
        </Layout>
    )
}

export default NotFoundPage
