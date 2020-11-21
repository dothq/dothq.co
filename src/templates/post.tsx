import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { BlogHero } from '../components/BlogHero'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PostContainer, PostMetadata, PostImage, PostContent } from '../components/style'
import { Time } from '../components/BlogCard'

const Post = ({ data, location }) => {
    const post = data.ghostPost

    return (
        <Layout noEnding noHero>
        <SEO title={post.title} />
        <BlogHero />
        <>
          <PostContainer>
            <PostMetadata style={{ marginBottom: post.feature_image ? '' : '2rem' }}>
              <h1>{post.title}</h1>
              <p>{new Date(post.published_at).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} (<Time date={post.published_at} />)</p>
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

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`