/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/"
import Hero from "./Hero"
import Footer from "./Footer"
import AlphaNotice from "./AlphaNotice"
import "./layout.css"
import "./inter.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {window.location.host === "alpha.dothq.co" && <AlphaNotice />}
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero>
        {children}
      </Hero>
      <Footer>
        © {new Date().getFullYear()}, Dot HQ. All rights reserved.
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
