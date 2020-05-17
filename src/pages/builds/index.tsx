import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Link, navigate } from "gatsby"
import { getUserToken, setToken } from "../../helpers/login"
import { getMe } from "../../helpers/me"

import Skeleton from 'react-loading-skeleton';
import { Heading, Avatar } from "../../components/style"
import { HeroButton } from '../../components/Button'
import { Time } from "../../components/BlogCard"

import { useGlobalState } from '../../context'

const BDPage = () => {
    const [user, setUser] = useGlobalState('user');

    React.useEffect(() => {
        const token = getUserToken()
        if(!token) navigate("/id?to=builds")
        if(!user) navigate("/id?to=builds")

        if(user && !user.hasOwnProperty("isEmployee")) navigate("/403?reason=This%20page%20is%20for%20employees%20only.")
    })

    const onBuildClick = () => {
        navigate('/builds/create')
    }
    
    return (
        <Layout noEnding noHero>
            <SEO title={'Builds Dashboard'} />
            <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="hero-container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '32px', marginBottom: '0' }}>Builds</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'end' }}>
                        <HeroButton shade={"blue"} style={{ height: '42px' }} onClick={() => onBuildClick()}>Create build</HeroButton>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BDPage
