import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form, Process, ProcessChild } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import Emoji from "react-emoji-render"
import { getRandomEmoji } from "../helpers/emoji"
import { Link } from "gatsby"
import { generateEmojiConfig } from "../tools/emoji"
import { loginWithCredentials } from "../helpers/login"
import { Snackbar } from "../components/Snackbar"

const IDPage = () => {
    const [emoji, setEmoji] = React.useState("👋")

    const emailRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();

    const [passwordLength, setPasswordLength] = React.useState(0);
    const [passwordType, setPasswordType] = React.useState("password");

    const [snackbarVisible, setSnackbarVisibility] = React.useState(false);
    const [snackbarContent, setSnackbarContent] = React.useState("");

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

    const onLoginClick = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(password.length == 0) return;
        if(email.length == 0) return;

        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false) return;

        const resp = await loginWithCredentials({ email, password })

        console.log(resp)

        if(resp.ok == false) {
            setSnackbarContent(resp.error ? resp.error : resp.status)
            setSnackbarVisibility(true)

            setTimeout(() => {
                setSnackbarVisibility(false)
            }, 2000);
        }
    }

    return (
        <Layout center={true}>
            <SEO title="Login" />
            <div style={{ paddingTop: '12vh' }}>
                <a onClick={() => onEmojiClick()} onMouseEnter={onEmojiMouseEnter} onMouseLeave={onEmojiMouseLeave}>
                    <Emoji text={emoji} options={generateEmojiConfig({ className: 'id-emoji' })} />
                </a>
                <h1 style={{ fontSize: '3rem' }}>Log in to your Dot ID</h1>
        
                <Form>
                    <InputContainer style={{ width: '275px', marginTop: '28px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"mail"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="me@domain.tld" type="email" ref={emailRef} />
                    </InputContainer>
        
                    <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"lock"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="Password" type={passwordType} ref={passwordRef} onInput={onPasswordInput} style={{ width: '189px' }} />
                        {passwordLength !== 0 && <InputIconContainer onClick={() => onPasswordShowClick()} style={{ cursor: 'pointer' }}>
                            <FeatherIcon icon={passwordType !== "password" ? "eye" : "eye-off"} size={16} />
                        </InputIconContainer>}
                    </InputContainer>
                </Form>
        
                <Buttons style={{ margin: '28px 0' }}>
                    <HeroButton shade={"blue"} style={{ boxShadow: 'none', height: '42px', width: '118px', justifyContent: 'center', marginRight: '28px' }} onClick={onLoginClick}>
                        Log in
                    </HeroButton>

                    <HeroButton shade={"white"} style={{ height: '42px', width: '118px', justifyContent: 'center', border: '1px solid #ececec' }}>
                        Sign up
                    </HeroButton>
                </Buttons>

                <Process>
                    <ProcessChild />
                    <ProcessChild />
                    <ProcessChild />
                </Process>

                <Link to={"/reset-password"}>
                    <TextButton isBasic>Forgot your password?</TextButton>
                </Link>

                <Snackbar visible={snackbarVisible}>
                    {snackbarContent}
                </Snackbar>

            </div>
        </Layout>
    )
}

export default IDPage
