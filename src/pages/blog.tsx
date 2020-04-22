import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogHero } from '../components/BlogHero'

const BlogPage = () => {
    return (
        <Layout noEnding>
            <SEO title="Blog" />
            <BlogHero />
        </Layout>
    )
}

export default BlogPage
