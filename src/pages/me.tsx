import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, navigate } from "gatsby"
import { getUserToken, setToken } from "../helpers/login"
import { getMe } from "../helpers/me"

import Skeleton from 'react-loading-skeleton';
import { Heading, Avatar } from "../components/style"
import { HeroButton } from '../components/Button'
import { Time } from "../components/BlogCard"

import { useGlobalState } from '../context'

const MePage = () => {
    const [user, setUser] = useGlobalState('user');

    React.useEffect(() => {
        const token = getUserToken()
        if(!token) navigate("/id")
        if(!user) navigate("/id")
    })

    const onLogoutClick = () => {
        window.location.href = "/logged-out"
        setToken(null)
    }
    
    return (
        <Layout noEnding noHero>
            <SEO title={''} />
            <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="hero-container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {user && user.avatar ? <Avatar src={user.avatar} /> : <Skeleton width={118} height={118} circle={true} />}
                        <div style={{ marginLeft: '38px' }}>
                            <h1 style={{ fontSize: '32px', marginBottom: '0' }}>{user && user.username || <Skeleton width={Math.floor(Math.random()*(300-100+1)+100)} />}</h1>
                            <Heading style={{ textTransform: 'uppercase', fontSize: '14px', color: 'gray', margin: 0 }}>{user && user.dateCreated ? "Account created" : <Skeleton width={Math.floor(Math.random()*(300-100+1)+100)} />}</Heading>
                            <p style={{ fontSize: '14px', margin: 0, textAlign: 'left' }}>{user && user.dateCreated ? <Time date={user && user.dateCreated} /> : <Skeleton width={Math.floor(Math.random()*(200-100+1)+100)} />}</p>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <HeroButton shade={"black"} style={{ height: '42px' }} onClick={() => onLogoutClick()}>Log out</HeroButton>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MePage
