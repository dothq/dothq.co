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
import Ending from "./Ending"
import Footer from "./Footer"
import "./layout.css"
import "./inter.css"

const Layout = ({ children, center }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero>
        {children}
      </Hero>
      <Ending />
      <Footer>
        © {new Date().getFullYear()}, Dot HQ. All rights reserved.
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool
}

export default Layout
