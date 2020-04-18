import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import Emoji from "react-emoji-render"
import { getRandomEmoji } from "../helpers/emoji"

interface Options {
    protocol?: 'http' | 'https';
    baseUrl?: string;
    size?: string;
    ext?: 'svg' | 'png';
    className?: string;
  }

const emojiOptions: Options = {
    protocol: "https",
    baseUrl: "//cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/",
    ext: 'svg',
    size: '',
    className: 'id-emoji'
}

const IDPage = () => {
    const [emoji, setEmoji] = React.useState("👋")

    const passwordRef = React.createRef<HTMLInputElement>();

    const [passwordLength, setPasswordLength] = React.useState(0);
    const [passwordType, setPasswordType] = React.useState("password");

    const onEmojiClick = () => {
        setEmoji(getRandomEmoji())
    }

    const onEmojiMouseEnter = () => {
        setEmoji(getRandomEmoji())
    }

    const onEmojiMouseLeave = () => {
        setEmoji("👋")
    }

    const onPasswordInput = () => {
        setPasswordLength(passwordRef.current.value.length)
    }

    const onPasswordShowClick = () => {
        if(passwordType == "password") {
            setPasswordType("text")
        } else {
            setPasswordType("password")
        }
    }

    return (
        <Layout center={true}>
            <SEO title="Login" />
            <div style={{ paddingTop: '12vh' }}>
                <a onClick={() => onEmojiClick()} onMouseEnter={onEmojiMouseEnter} onMouseLeave={onEmojiMouseLeave}>
                    <Emoji text={emoji} options={emojiOptions} />
                </a>
                <h1 style={{ fontSize: '3rem' }}>Log in to your Dot ID</h1>
        
                <Form>
                    <InputContainer style={{ width: '275px', marginTop: '28px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"mail"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="me@domain.tld" type="email" />
                    </InputContainer>
        
                    <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"lock"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="Password" type={passwordType} ref={passwordRef} onInput={onPasswordInput} />
                        {passwordLength !== 0 && <InputIconContainer>
                            <FeatherIcon icon={passwordType !== "password" ? "eye" : "eye-off"} size={16} onClick={() => onPasswordShowClick()} style={{ cursor: 'pointer' }} />
                        </InputIconContainer>}
                    </InputContainer>
                </Form>
        
                <Buttons style={{ margin: '28px 0' }}>
                    <HeroButton shade={"blue"} style={{ boxShadow: 'none', height: '42px', width: '118px', justifyContent: 'center', marginRight: '28px' }}>
                        Log in
                    </HeroButton>

                    <HeroButton shade={"white"} style={{ height: '42px', width: '118px', justifyContent: 'center', border: '1px solid #ececec' }}>
                        Sign up
                    </HeroButton>
                </Buttons>

            </div>
        </Layout>
    )
}

export default IDPage
