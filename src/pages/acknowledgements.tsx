import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Content } from "../components/Hero/style"

const AcknowledgementsPage = () => {
    return (
        <Layout noEnding>
            <SEO title="Acknowledgements" />
            <Content hasHero>
                <div className={"hero-container"}>
                    <div className={"hero-content"}>
                        <h1 style={{ marginBottom: '8px' }}>Acknowledgements</h1>
                        <p>The people that make Dot HQ possible.</p>
                    </div>
                </div>
                <div className={"legal-content"}>
                    <main>
                        <p>
                            Special thanks to <a href={"https://fosshost.org"}>fosshost.org</a> for kindly providing us with a build server for Dot Browser.
                        </p>
                        <p>
                            Thank you to <a href={"https://mozilla.org"}>Mozilla</a> for creating the Firefox web browser and promoting privacy.
                        </p>
                    </main>
                </div>
            </Content>
        </Layout>
    )
}

export default AcknowledgementsPage
