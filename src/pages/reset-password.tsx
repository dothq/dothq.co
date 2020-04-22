import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../tools/emoji"

const RSPage = () => {
    return (
        <Layout center={true}>
            <SEO title="Reset Password" />
            <div style={{ padding: '11.8vh' }}>
                <Emoji text={"🔒"} options={generateEmojiConfig({ className: 'emoji' })} />
                <h1 style={{ fontSize: '3rem' }}>Reset Password</h1>
                <p style={{ fontSize: '16px', width: '400px', marginBottom: '5px' }}>You'll need to pop your email in below and we'll send you a link to reset your password.</p>
        
                <Form>
                    <InputContainer style={{ width: '275px', marginTop: '28px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"mail"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="me@domain.tld" type="email" />
                    </InputContainer>
                </Form>
        
                <Buttons style={{ margin: '28px 0' }}>
                    <HeroButton shade={"blue"} style={{ boxShadow: 'none', height: '42px', width: '140px', justifyContent: 'center' }}>
                        Send email
                    </HeroButton>
                </Buttons>

                <Link to={"/id"}>
                    <TextButton isBasic>Back to login</TextButton>
                </Link>

            </div>
        </Layout>
    )
}

export default RSPage
