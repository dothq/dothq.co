import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Link, navigate } from "gatsby"
import { getUserToken, isBrowser } from "../../helpers/login"
import { HeroButton, IconButton } from '../../components/Button'
import FeatherIcon from 'feather-icons-react'

import { useGlobalState } from '../../context'
import { Form, InputContainer, InputIconContainer, Input, Buttons, DateTimePicker } from "../../components/style"

const BDCreatePage = () => {
    const [user, setUser] = useGlobalState('user');

    if(isBrowser()) {
        const token = getUserToken()
        if(!token) navigate("/id?to=builds/create")
        if(!user) navigate("/id?to=builds/create")
    
        if(user && user.hasOwnProperty("isEmployee") && !user.isEmployee) navigate("/403?reason=This%20page%20is%20for%20employees%20only.")
    }

    const onBackClick = () => {
        navigate('/builds')
    }
    
    return (
        <Layout noEnding noHero>
            <SEO title={'Builds Dashboard'} />
            <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="hero-container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => onBackClick()}><FeatherIcon icon="arrow-left" size={24} /></IconButton>
                        <h1 style={{ fontSize: '32px', marginBottom: '0' }}>Create Build</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'end' }}>
                        {/* <HeroButton shade={"blue"} style={{ height: '42px' }} onClick={() => onBuildClick()}>Create build</HeroButton> */}
                    </div>
                </div>
            </div>
            <div style={{ margin: '0 auto', display: 'grid', justifyContent: 'left', maxWidth: '1064px' }}>
                <Form>
                    <InputContainer style={{ width: '275px', marginTop: '28px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"box"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="Product Name" type="name" />
                    </InputContainer>
        
                    <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"tag"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="Version" />
                    </InputContainer>

                    <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"monitor"} size={16} />
                        </InputIconContainer>
                        <Input placeholder="Supported OS (split by comma)" />
                    </InputContainer>

                    <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                        <InputIconContainer>
                            <FeatherIcon icon={"unlock"} size={16} />
                        </InputIconContainer>
                        <DateTimePicker placeholder={"Build unlocks at"} />
                    </InputContainer>

                    <div style={{ marginTop: '12px', fontSize: '12px' }}>
                        <label style={{ display: 'flex' }}>
                            <input type="checkbox" style={{ display: 'flex', alignSelf: 'center', marginRight: '8px' }} />
                            I have uploaded the assets for this build
                        </label>
                    </div>
                </Form>
        
                <Buttons style={{ margin: '28px 0', display: 'flex', justifyContent: 'left' }}>
                    <HeroButton shade={"blue"} style={{ boxShadow: 'none', height: '42px', width: '118px', justifyContent: 'center', marginRight: '28px' }}>
                        Create
                    </HeroButton>
                </Buttons> 
            </div>
        </Layout>
    )
}

export default BDCreatePage
