import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

const WelcomePage = () => {
    let currentIndex = 0;
    const welcomeTexts = ['Welcome', 'Bienvenido', 'Bienvenue', 'Welkom', 'Willkommen', 'Välkommen', 'Croeso', 'Fáilte', 'Vítejte']

    const [welcomeText, setWelcomeText] = React.useState(welcomeTexts[currentIndex])
    const [welcomeStyle, setWelcomeStyles] = React.useState({})

    React.useState(() => {
        setInterval(() => {
            ++currentIndex;
            if(currentIndex >= welcomeTexts.length) currentIndex = 0;
            setWelcomeText(welcomeTexts[currentIndex])
        }, 4000)
    })

    return (
        <Layout noEnding>
            <SEO title="Welcome to Dot Browser" />
            <div style={{ padding: '11.8vh' }}>
                <Emoji text={"⚪"} options={generateEmojiConfig({ className: 'emoji' })} />
                <h1 style={{ fontSize: '3rem', ...welcomeStyle }}>{welcomeText}</h1>
                <p style={{ fontSize: '16px', width: '400px', marginTop: '-18px' }}>Welcome to Dot Browser, the browser that protects you from being tracked and monitored.</p>

                <Link to={"/"}>
                    <TextButton isBasic>Get started</TextButton>
                </Link>

            </div>
        </Layout>
    )
}

export default WelcomePage
