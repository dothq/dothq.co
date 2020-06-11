import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form, Avatar, Heading, Spinner } from "../../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../../components/Button"
import { Link } from "gatsby"

import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../../tools/emoji"

import { parse } from 'search-params' 
import { isBrowser } from "../../helpers/login"
import Skeleton from "react-loading-skeleton"

import axios from 'axios';

const OnboardingPage = ({ location }) => {
    const [user, setUser] = React.useState(null);
    const [githubUser, setGithubUser] = React.useState(null);

    const [ghLoading, setGHLoading] = React.useState(false);
    const [ghErrorMessage, setGHErrorMessage] = React.useState(null);

    const [onboardingVisible, setOnboardingVisible] = React.useState(-1);
    const [currentStep, setCurrentStep] = React.useState(0);

    const [emailIncorrect, setEmailIncorrect] = React.useState(false);

    const [sobtnLoading, setsobtnLoading] = React.useState(false);

    const maxStep = 3;

    const emailRef = React.createRef<HTMLInputElement>();

    const search = parse(location.search)

    React.useEffect(() => {
        if(!search.code) return setOnboardingVisible(0)

        if(user !== null) return;
        axios.get(`https://dothq.co/api/organization.codes/${search.code}`)
            .then(res => {
                if(res.data.ok && res.data.ok == true) {
                    setOnboardingVisible(1)
                    setUser(res.data.appliesTo)
                } else {
                    setOnboardingVisible(0)
                }
            })
    })

    const onMigrateClick = () => {
        setCurrentStep(2)
    }

    const onVerifyEmailClick = () => {
        if(emailRef.current.value.length == 0) return;
        if(!user) return;

        const body = {
            id: user.id,
            email: emailRef.current.value
        }

        setsobtnLoading(true)

        axios.post(`https://dothq.co/api/organization.verify`, body)
            .then(res => {
                if(res.data.ok == true) {
                    setCurrentStep(1)
                    setEmailIncorrect(false)
                }
            }).catch(res => {
                setsobtnLoading(false)
                setEmailIncorrect(true)
            })
    }

    let isSameBefore = false;

    const onGitHubBlur = (e) => {       
        isSameBefore = false 
        console.log(isSameBefore)
        const value = e.target.value;

        if(value.length == 0) {
            setGHErrorMessage(null)
            return setGithubUser(null)
        }

        if(githubUser && value.toLowerCase() == githubUser.login.toLowerCase()) {
            
            isSameBefore = true;
            return console.log(isSameBefore)
        };

        if(isSameBefore) {
            if(githubUser && githubUser.type !== "User") return;
        }

        setGHErrorMessage(null)
        setGHLoading(true)
        setGithubUser(null)

        axios.get(`https://api.github.com/users/${value}`)
            .then(res => {
                if(res.data.login) {
                    if(res.data.type !== "User") {
                        setGHErrorMessage(`@${res.data.login} is a reserved username`)
                        setGithubUser(res.data)
                        return setGHLoading(false)
                    }
                    setGithubUser(res.data)
                    setGHLoading(false)
                } else {
                    setGithubUser(null)
                    setGHLoading(false)
                }
            }).catch(err => {
                setGithubUser(null)
                setGHLoading(false)
                console.log(err.response.data.message)
                setGHErrorMessage(err.response.data.message)
            })

    }

    return (
        <Layout noEnding noHero>
            <SEO title="Welcome to Dot HQ" />
            {onboardingVisible == 1 && <>
                <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                    <div className="hero-container">
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <Emoji text={"👋"} options={generateEmojiConfig({ className: 'emoji-center' })} />
                            <h1 style={{ fontSize: '32px', marginBottom: '0', textAlign: 'center', marginTop: '12px' }}>Welcome to Dot HQ</h1>
                            <Heading style={{ textTransform: 'uppercase', fontSize: '14px', color: 'gray', margin: '0 auto' }}>Step {currentStep + 1} of {maxStep}</Heading>
                        </div>
                    </div>
                </div>
                <div>
                    {currentStep == 0 && <>
                        <div style={{ margin: '0 auto', display: 'grid', justifyContent: 'center', maxWidth: '1064px' }}>
                            <h1 style={{ fontSize: '24px', marginBottom: '0', textAlign: 'center', marginTop: '12px' }}>Hi, {user && user.username}</h1>
                            <p style={{ fontSize: '16px' }}>Confirm your email address to continue.</p>

                            <InputContainer style={{ width: '275px', marginTop: '28px', margin: '0 auto', borderColor: emailIncorrect ? '#FF5E5E' : '' }}>
                                <InputIconContainer>
                                    <FeatherIcon icon={"mail"} size={16} />
                                </InputIconContainer>
                                <Input placeholder="me@domain.tld" type="email" ref={emailRef} />
                            </InputContainer>

                            <Buttons style={{ margin: '28px 0', display: 'flex', justifyContent: 'center' }}>
                                <HeroButton shade={"blue"} style={{ boxShadow: 'none', height: '42px', justifyContent: 'center' }} onClick={onVerifyEmailClick}>
                                    {sobtnLoading ? <Spinner /> : 'Continue'}
                                </HeroButton>
                            </Buttons> 
                        </div>
                    </>}

                    {currentStep == 1 && <>
                        <div style={{ margin: '0 auto', display: 'grid', justifyContent: 'center', maxWidth: '1064px' }}>
                            <h1 style={{ fontSize: '24px', marginBottom: '0', textAlign: 'center', marginTop: '12px' }}>One last step</h1>
                            <p style={{ fontSize: '16px' }}>{user.username}, what is your GitHub username?</p>
                    
                            <InputContainer style={{ width: '275px', marginTop: '28px', margin: '0 auto', borderColor: emailIncorrect ? '#FF5E5E' : '' }}>
                                <InputIconContainer>
                                    <FeatherIcon icon={"github"} size={16} />
                                </InputIconContainer>
                                <InputIconContainer style={{ minWidth: '76px', opacity: 0.5, fontSize: '14px' }}>
                                    <span>github.com/</span>
                                </InputIconContainer>
                                <Input placeholder="" type="text" onBlur={onGitHubBlur} />
                            </InputContainer>

                            {!ghErrorMessage && githubUser && <a target={"_blank"} href={`https://github.com/${githubUser.login}`} style={{ display: 'flex', marginTop: '16px', flexDirection: 'column' }}>
                                <Avatar width={32} src={githubUser.avatar_url} style={{ margin: '0 auto', marginBottom: '8px' }} />
                                <div>
                                    <p style={{ fontSize: '14px', margin: 0 }}>{githubUser.name}</p>
                                    <p style={{ fontSize: '12px', margin: 0, opacity: 0.7, width: '300px', lineHeight: '19px' }}>{githubUser.bio}</p>
                                </div>
                            </a>}

                            {ghErrorMessage && <div style={{ display: 'flex', marginTop: '16px', flexDirection: 'column' }}><p style={{ fontSize: '14px', margin: 0 }}>{ghErrorMessage}</p></div>}
                            {ghLoading && <div style={{ display: 'flex', margin: '28px 0', flexDirection: 'column' }}><Spinner /></div>}

                            <Buttons style={{ margin: '28px 0', display: 'flex', justifyContent: 'center' }}>
                                <HeroButton shade={"blue"} style={{ pointerEvents: githubUser ? 'all' : 'none', opacity: githubUser ? 1 : 0.5, boxShadow: 'none', height: '42px', justifyContent: 'center' }} onClick={onMigrateClick}>
                                    Become an employee at Dot HQ
                                </HeroButton>
                            </Buttons> 
                        </div>
                    </>}

                    {currentStep == 2 && <>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                            <h1 style={{ fontSize: '24px', marginBottom: '0', textAlign: 'center', marginTop: '12px' }}>One moment</h1>
                            <p style={{ fontSize: '16px' }}>We're sending you to the login page.</p>
                        </div>
                    </>}
                </div>
            </>}
            {onboardingVisible == 0 && <>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Emoji text={"😕"} options={generateEmojiConfig({ className: 'emoji-center' })} />
                    <h1 style={{ fontSize: '42px', marginBottom: '0', textAlign: 'center', marginTop: '12px' }}>404</h1>
                    <p style={{ fontSize: '20px' }}>Your code has either expired, or doesn't exist.</p>
                </div>
            </>}
        </Layout>
    )
}

export default OnboardingPage
