import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { navigate, Link } from "gatsby"
import Emoji from "react-emoji-render"
import { generateEmojiConfig } from "../../../lib/tools/emoji"
import { TextButton } from "../../components/Button"

const MigratePage = () => {
    React.useEffect(() => {
        
    })

    return (
        <Layout>
            <SEO title="One moment" />
            <div style={{ paddingTop: 'calc(100vh / 24)', marginBottom: '3.5rem' }}>
                <Emoji text={"⌛"} options={generateEmojiConfig({ className: 'emoji' })} />
                <h1 style={{ fontSize: '3rem' }}>One moment</h1>
                <p style={{ fontSize: '16px', width: '400px', marginBottom: '5px' }}>We're sending you to the login page.</p>

            </div>
        </Layout>
    )
}

export default MigratePage
