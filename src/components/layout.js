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
import { Banner } from "./Banner"
import "./layout.css"
import "./inter.css"

import { SkeletonTheme } from 'react-loading-skeleton';

import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import { BackgroundInject } from './style'
import { useGlobalState } from '../context'
import { getMe } from "../helpers/me"

import axios from 'axios';

const GS = createGlobalStyle`${BackgroundInject}`;


const Layout = ({ children, noEnding, noHero, isHome, darkNav, blank }) => {
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

  const [alfUser, setAlfUser] = useGlobalState('afUser');
  const [alfBuilds, setAlfBuilds] = useGlobalState('afBuilds');

  React.useEffect(() => {
    if(typeof(alfUser) == "boolean") return;
    if(typeof(alfBuilds) == "boolean") return;

    setAlfUser(true)

    getMe().then(me => {
      if(me && me.ok === false) return setUser(undefined)
      setUser(me)
    })

    setAlfBuilds(true)

    axios.get('https://dothq.co/api/builds/all')
      .then(res => res.data.results && setBuilds(res.data.results))

  }, [user, setUser, builds, setBuilds, themeContext, alfBuilds, alfUser, setAlfBuilds, setAlfUser]);

  return (
    <SkeletonTheme color={themeContext.isDark ? "#0f0f0f" : "#eee"} highlightColor={themeContext.isDark ? "#232323" : "#d8d8d8"}>
      <GS />
      <Banner>
        Get a sneak peek of the new version of this website. <a style={{ margin: "0 12px" }} href="https://new.dothq.co">Try it out</a> or <a style={{ marginLeft: "12px" }} href="https://dothq.link/mns">Learn more</a>
      </Banner>
      {!blank && <Header className={"nav"} siteTitle={data.site.siteMetadata.title} isFixed={false} isDark={typeof(darkNav) == "undefined" ? true : darkNav} />}
      {!noHero && <Hero>
        {children}
      </Hero>}
      {noHero && <>{children}</>}
      {!noEnding && <Ending />}
      {!blank && <Footer />}
    </SkeletonTheme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noEnding: PropTypes.bool,
  noHero: PropTypes.bool,
  isHome: PropTypes.bool,
  darkNav: PropTypes.bool,
  blank: PropTypes.bool
}

export default Layout
