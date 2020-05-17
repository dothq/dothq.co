import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

import { parse } from 'search-params' 

const NotFoundPage = ({ location }) => {
    const search = parse(location.search)

    return (
        <Layout>
            <SEO title="Page Not Accessible" />
            <div style={{ padding: '11.8vh' }}>
                <Emoji text={"⛔"} options={generateEmojiConfig({ className: 'emoji' })} />
                <h1 style={{ fontSize: '4rem' }}>403</h1>
                <p style={{ fontSize: '16px', width: '400px', marginTop: '-18px' }}>We can't let you access this page.</p>
                {search.reason && <p style={{ fontSize: '16px', width: '400px', marginTop: '-18px' }}>Reason: {search.reason}</p>}

                <Link to={"/"}>
                    <TextButton isBasic>Go home</TextButton>
                </Link>

            </div>
        </Layout>
    )
}

export default NotFoundPage
