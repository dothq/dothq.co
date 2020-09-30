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

import { Banner } from "./Banner"

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
    if(process.env.NODE_ENV !== "development") {
      console.log("%cBeware!", "font: 2em sans-serif; color: yellow; background-color: red;");
      console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or “hack” someone’s account, it is a scam and will give them access to your account.", "font: 1.5em sans-serif; color: grey;");
    }

    if(typeof(alfUser) == "boolean") return;
    if(typeof(alfBuilds) == "boolean") return;

    setAlfUser(true)

    getMe().then(me => {
      if(me && me.ok === false) return setUser(undefined)
      setUser(me)
    })

    setAlfBuilds(true)

    // axios.get('https://dothq.co/api/builds/all')
    //   .then(res => res.data.results && setBuilds(res.data.results))

  }, [user, setUser, builds, setBuilds, themeContext, alfBuilds, alfUser, setAlfBuilds, setAlfUser]);

  return (
    <SkeletonTheme color={themeContext.isDark ? "#0f0f0f" : "#eee"} highlightColor={themeContext.isDark ? "#232323" : "#d8d8d8"}>
      <GS />
      {!blank && <Header 
        className={"nav"} 
        siteTitle={data.site.siteMetadata.title} 
        isFixed={false} 
        isDark={typeof(darkNav) == "undefined" ? false : darkNav}
      >
        {process.env.NODE_ENV === "development" && (
          <Banner>
            <span>
              You're running in development mode. Using <code>http://localhost:4000</code> as the API.
            </span>
          </Banner>
        )}
      </Header>}
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
