import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import { Link, navigate } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

import { useGlobalState } from '../context'

const LOPage = () => {
    const [user] = useGlobalState('user');

    React.useEffect(() => {
        if(user) navigate('/')
    })

    return (
        <Layout>
            <SEO title="Logged out" />
            <div style={{ padding: '11.8vh' }}>
                <Emoji text={"💥"} options={generateEmojiConfig({ className: 'emoji' })} />
                <h1 style={{ fontSize: '3rem' }}>Poof!</h1>
                <p style={{ fontSize: '16px', width: '400px', marginBottom: '5px' }}>You've been logged out of your account.</p>

                <Link to={"/"} style={{ marginRight: '28px' }}>
                    <TextButton isBasic>Go Home</TextButton>
                </Link>

                <Link to={"/id"}>
                    <TextButton isBasic>Login to another account</TextButton>
                </Link>

            </div>
        </Layout>
    )
}

export default LOPage
