import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { BlogHero } from '../components/BlogHero'
import { BlogCard } from '../components/BlogCard'
import { BlogPosts, BlogMount, BlogSidebar } from '../components/style'
import { generateEmojiConfig } from '../../lib/tools/emoji'
import Emoji from 'react-emoji-render'
import { TextButton } from '../components/Button'

const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges

    return (
        <Layout noEnding noHero>
            <SEO title={"Blog"} />
            <BlogHero />
            <BlogMount>
                <BlogPosts>
                    {posts.sort((nodeA, nodeB) => {
                      return nodeB.node.published_at - nodeA.node.published_at
                    }).map(({ node }) => (
                        <BlogCard post={node} key={node.id} />
                    ))}
                    <p style={{ textAlign: "center", maxWidth: "700px", padding: "80px 0", fontWeight: 700, fontSize: "24px", display: "grid", margin: 0 }}>
                      <Emoji text={"👻"} options={generateEmojiConfig({ className: 'emoji' })} />
                      <br />It's pretty spooky down here.
                      <p style={{ fontSize: '16px' }}>Why don't you head back <Link to={"/blog#"}><TextButton isBasic>to the top?</TextButton></Link></p>
                    </p>
                </BlogPosts>
                <BlogSidebar>
                </BlogSidebar>
            </BlogMount>
        </Layout>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`