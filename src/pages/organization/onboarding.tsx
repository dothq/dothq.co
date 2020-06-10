import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../../tools/emoji"

import { parse } from 'search-params' 
import { isBrowser } from "../../helpers/login"

const OnboardingPage = ({ location }) => {
    const search = parse(location.search)

    const onMigrateClick = () => {
        if(isBrowser()) window.location.href = "/organization/migrate"
    }

    return (
        <Layout noEnding noHero>
            <SEO title="Welcome to Dot HQ" />
            <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="hero-container">
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Emoji text={"👋"} options={generateEmojiConfig({ className: 'emoji-center' })} />
                        <h1 style={{ fontSize: '32px', marginBottom: '0', textAlign: 'center', marginTop: '12px' }}>Welcome to Dot HQ</h1>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ margin: '0 auto', display: 'grid', justifyContent: 'center', maxWidth: '1064px' }}>
                    <h1 style={{ fontSize: '24px', marginBottom: '0', textAlign: 'center', marginTop: '12px' }}>Let's get started</h1>
                    <p style={{ fontSize: '16px' }}>This will only take a few minutes.</p>
            
                    <Buttons style={{ margin: '28px 0', display: 'flex', justifyContent: 'center' }}>
                        <HeroButton shade={"blue"} style={{ boxShadow: 'none', height: '42px', justifyContent: 'center' }} onClick={onMigrateClick}>
                            Migrate to a Business Account
                        </HeroButton>
                    </Buttons> 
                </div>
            </div>
        </Layout>
    )
}

export default OnboardingPage
