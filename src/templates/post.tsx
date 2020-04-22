import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogHero } from '../components/BlogHero'
import { PostContainer, PostMetadata, PostImage, PostContent } from "../components/style"

const Post = ({ data }) => {
  const post = data.ghostPost

  return (
    <Layout noEnding noHero>
      <SEO title={post.title} />
      <BlogHero />
      <>
        <PostContainer>
          <PostMetadata>
            <h1>{post.title}</h1>
            <p>{new Date(post.published_at).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </PostMetadata>
          {post.feature_image ? (
            <PostImage image={post.feature_image} />
          ) : null}
          <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostContainer>
      </>
    </Layout>
  )
}
export default Post
export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
      published_at
    }
  }
`