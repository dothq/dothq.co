/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Markdown from 'markdown-to-jsx';

import axios from 'axios';

import { createGlobalStyle } from 'styled-components'

import Header from "./Header/"
import Hero from "./Hero"
import Ending from "./Ending"
import Footer from "./Footer"
import "./layout.css"
import "./inter.css"

import { SkeletonTheme } from 'react-loading-skeleton';
import { CookiesProvider } from 'react-cookie';

import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import { BackgroundInject } from './style'
import { useGlobalState } from '../../lib/context'

import { Banner } from "./Banner"
import { isBrowser } from "../../lib/helpers/login"

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

  const [motd, setMotd] = React.useState("");

  const [hidden, setHidden] = React.useState(false);
  const [onTop, setOnTop] = React.useState(false);

  const [builds, setBuilds] = useGlobalState('builds');

  const [alfUser, setAlfUser] = useGlobalState('afUser');
  const [alfBuilds, setAlfBuilds] = useGlobalState('afBuilds');

  React.useEffect(() => {
    let oldY = 0;

    axios.get("https://raw.githubusercontent.com/dothq/motd/main/motd.md")
      .then(res => setMotd(res.data))

    isBrowser() && window.addEventListener("scroll", (e) => {
      if(window.matchMedia("(max-width: 1280px)").matches) {
        setOnTop(false)
        return;
      };
      if(window.scrollY >= 500 && oldY < window.scrollY) setHidden(true);
      else setHidden(false);
      
      oldY = window.scrollY;
  
      if(window.scrollY >= 100) setOnTop(true)
      else setOnTop(false)
    })

    if(process.env.NODE_ENV !== "development") {
      console.log("%cBeware!", "font: 2em sans-serif; color: yellow; background-color: red;");
      console.log("%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or “hack” someone’s account, it is a scam and will give them access to your account.", "font: 1.5em sans-serif; color: grey;");
    }

    if(typeof(alfUser) == "boolean") return;
    if(typeof(alfBuilds) == "boolean") return;

    setAlfUser(true)

    setAlfBuilds(true)

  }, [builds, setBuilds, themeContext, alfBuilds, alfUser, setAlfBuilds, setAlfUser, motd]);

  return (
    <CookiesProvider>
      <SkeletonTheme color={themeContext.isDark ? "#0f0f0f" : "#eee"} highlightColor={themeContext.isDark ? "#232323" : "#d8d8d8"}>
        <GS />
        {!noHero && <Hero>
          {!blank && <Header 
            className={"nav"} 
            siteTitle={data.site.siteMetadata.title} 
            isFixed={false} 
            hideMenu={hidden}
            isDark={typeof(darkNav) == "undefined" ? false : darkNav}
            hidden={hidden}
            onTop={onTop}
          >
            <Banner>
              <Markdown options={{ forceInline: true }}>{motd}</Markdown>
            </Banner>
          </Header>}
          {children}
        </Hero>}
        {noHero && <>{children}</>}
        {!noEnding && <Ending />}
        {!blank && <Footer />}
        {/* <Snackbar visible={cookieBannerVisible} icon={cookie}>
          We use cookies to keep you logged into your account. We do not use cookies if you are browsing as a guest.
          <ButtonV2 onClick={() => setCBVisible(false)} style={{ marginLeft: "16px" }} background={colours.azure} color={colours.white}>OK</ButtonV2>
        </Snackbar> */}
      </SkeletonTheme>
    </CookiesProvider>
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
