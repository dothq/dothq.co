import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Content } from "../../components/Hero/style"
import { Heading, Description, FeatureIcon, Feature, FeatureDisplay } from "../../components/style"

import identity from '../../images/icons/identity.svg'
import fonts from '../../images/icons/fonts.svg'
import colours from '../../images/icons/colours.png'
import kit from '../../images/icons/kit.svg'
import { ButtonV2 } from "../../components/ButtonV2"

const DesignPage = () => {
    return (
        <Layout noEnding>
            <SEO title="Design Specifications" />
            <Content hasHero>
                <div className={"hero-container"}>
                    <div className={"hero-content"}>
                        <h1 style={{ marginBottom: '8px' }}>Design</h1>
                        <p>Our branding and design specifications for Dot products.</p>
                    </div>
                </div>
                <div className={"legal-content"}>
                    <FeatureDisplay>
                        <Feature>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <FeatureIcon src={identity} />
                                <div style={{ marginTop: '58px' }}>
                                    <Heading>Logos</Heading>
                                    <Description>Our brand identity and usage.</Description>
                                    <ButtonV2>View</ButtonV2>
                                </div>
                            </div>
                        </Feature>
                        <Feature>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <FeatureIcon src={fonts} />
                                <div style={{ marginTop: '58px' }}>
                                    <Heading>Fonts</Heading>
                                    <Description>Fonts and typefaces used in Dot products.</Description>
                                    <ButtonV2>View</ButtonV2>
                                </div>
                            </div>
                        </Feature>
                        <Feature>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <FeatureIcon src={colours} />
                                <div style={{ marginTop: '58px' }}>
                                    <Heading>Colours</Heading>
                                    <Description>All the verified colours used in Dot products.</Description>
                                    <ButtonV2>View</ButtonV2>
                                </div>
                            </div>
                        </Feature>
                        <Feature>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <FeatureIcon src={kit} />
                                <div style={{ marginTop: '58px' }}>
                                    <Heading>Kits</Heading>
                                    <Description>Small packages of branding assets and fonts.</Description>
                                    <ButtonV2>View</ButtonV2>
                                </div>
                            </div>
                        </Feature>
                    </FeatureDisplay>
                </div>
            </Content>
        </Layout>
    )
}

export default DesignPage
