import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form, Process, ProcessChild } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import Emoji from "react-emoji-render"
import { getRandomEmoji } from "../helpers/emoji"
import { Link, navigate } from "gatsby"
import { generateEmojiConfig } from "../tools/emoji"
import { loginWithCredentials, setToken, isBrowser } from "../helpers/login"

import { parse } from 'search-params' 

import { useGlobalState } from '../context'

const IDPage = ({ location }) => {
    const [emoji, setEmoji] = React.useState("👋")

    const emailRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();

    const [passwordLength, setPasswordLength] = React.useState(0);
    const [passwordType, setPasswordType] = React.useState("password");

    const [errorVisible, setErrorVisibility] = React.useState(false);
    const [errorContent, setErrorContent] = React.useState("");

    const [isDisabled, setDisabled] = React.useState(false);

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
        if(!emailRef.current) return;
        if(!passwordRef.current) return;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(isDisabled) return;

        if(password.length == 0) return;
        if(email.length == 0) return;

        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == false) return;

        setDisabled(true)

        const resp = await loginWithCredentials({ email, password })

        console.log(resp)

        if(resp.ok == false) {
            setDisabled(false)

            setErrorContent(resp.error ? resp.error : resp.status)
            setErrorVisibility(true)
        } else {
            setErrorContent("")
            setErrorVisibility(false)

            const search = parse(location.search)

            window.location.href = typeof(search.to) == "string" ? search.to : "/me"
            setToken(resp.access_token)
        }
    }

    isBrowser() && window.addEventListener('keypress', (event) => {
        if(event.which == 13) {
            onLoginClick()
        }
    })

    const [user] = useGlobalState('user');

    React.useEffect(() => {
        if(user && !isDisabled) navigate('/me')
    })

    return (
        <Layout>
            <SEO title="Login" />
            <div style={{ padding: '12vh' }}>
                <a onClick={() => onEmojiClick()} onMouseEnter={onEmojiMouseEnter} onMouseLeave={onEmojiMouseLeave}>
                    <Emoji text={emoji} options={generateEmojiConfig({ className: 'id-emoji' })} />
                </a>
                <h1 style={{ fontSize: '3rem' }}>Log in to your Dot ID</h1>
                {errorVisible && <p className={"error-text"}>{errorContent}</p>}
        
                <Form className={isDisabled ? 'disabled' : ''}>
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

                    <HeroButton shade={"white"} style={{ height: '42px', width: '118px', justifyContent: 'center' }}>
                        Sign up
                    </HeroButton>
                </Buttons>

                {/* <Process>
                    <ProcessChild />
                    <ProcessChild />
                    <ProcessChild />
                </Process> */}

                <Link to={"/reset-password"}>
                    <TextButton isBasic>Forgot your password?</TextButton>
                </Link>

            </div>
        </Layout>
    )
}

export default IDPage
