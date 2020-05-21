/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { createGlobalStyle } from 'styled-components'

import Header from "./Header/"
import Hero from "./Hero"
import Ending from "./Ending"
import Footer from "./Footer"
import "./layout.css"
import "./inter.css"

import { SkeletonTheme } from 'react-loading-skeleton';

import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import { BackgroundInject } from './style'
import { useGlobalState } from '../context'
import { getMe } from "../helpers/me"
import axios from 'axios';

const GS = createGlobalStyle`${BackgroundInject}`;

const Layout = ({ children, noEnding, noHero }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
				  
  const themeContext = React.useContext(ThemeManagerContext)

  React.useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    if(document.getElementsByClassName("twitter-tweet") && document.getElementsByClassName("twitter-tweet")[0]) document.getElementsByClassName("twitter-tweet")[0].appendChild(script);
  }, []);

  const [user, setUser] = useGlobalState('user');
  const [builds, setBuilds] = useGlobalState('builds');

  React.useEffect(() => {
    if(user !== undefined) return;
    if(builds !== undefined) return;
    getMe().then(me => {
      if(me.ok === true) setUser(me)
    })

    axios.get('https://dothq.co/api/builds.all')
      .then(res => res.data.results && setBuilds(res.data.results))
  }, [user, setUser, builds, setBuilds]);

  return (
    <SkeletonTheme color={themeContext.isDark ? "#0f0f0f" : "#eee"} highlightColor={themeContext.isDark ? "#232323" : "#d8d8d8"}>
      <GS />
      <Header siteTitle={data.site.siteMetadata.title} />
      {!noHero && <Hero>
        {children}
      </Hero>}
      {noHero && <>{children}</>}
      {!noEnding && <Ending />}
      <Footer />
    </SkeletonTheme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noEnding: PropTypes.bool,
  noHero: PropTypes.bool
}

export default Layout
