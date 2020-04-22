import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="Page Not Found" />
            <div style={{ padding: '11.8vh' }}>
                <Emoji text={"🙄"} options={generateEmojiConfig({ className: 'emoji' })} />
                <h1 style={{ fontSize: '4rem' }}>404</h1>
                <p style={{ fontSize: '16px', width: '400px', marginTop: '-18px' }}>We couldn't find that page.</p>

                <Link to={"/"}>
                    <TextButton isBasic>Go home</TextButton>
                </Link>

            </div>
        </Layout>
    )
}

export default NotFoundPage
