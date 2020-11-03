import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { isBrowser } from "../helpers/login"

function SEO({ description, lang, meta, title, isHome }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s ${!isHome ? `- ${site.siteMetadata.title}` : ''}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0`
        },
        {
          name: `keywords`,
          content: `dot browser, electron, react, privacy, typescript, browser, web, anonymity, robust, blocker, trackers, mind, free web browser, open source web browser, oss web browser, open source, free, privacy browsers, privacy apps, privacy open source, secure open source, github open source, git open source, open source software, dot-browser, freedoms, dothq, dot hq, wexond, wexond browser, wexond.net, chrome, chromium, google, brave, edge, google browser, edge browser, chromium browser, chrome browser, brave browser, clean, minimal, sleek, adblocker, adblock`
        },
        {
          name: `og:keywords`,
          content: `dot browser, electron, react, privacy, typescript, browser, web, anonymity, robust, blocker, trackers, mind, free web browser, open source web browser, oss web browser, open source, free, privacy browsers, privacy apps, privacy open source, secure open source, github open source, git open source, open source software, dot-browser, freedoms, dothq, dot hq, wexond, wexond browser, wexond.net, chrome, chromium, google, brave, edge, google browser, edge browser, chromium browser, chrome browser, brave browser, clean, minimal, sleek, adblocker, adblock`
        }
      ].concat(meta)}
    >
      {isBrowser() && (!(parseInt(navigator.doNotTrack) || parseInt(window.doNotTrack) || parseInt(navigator.msDoNotTrack) || navigator.doNotTrack === "yes")) && <script async defer data-domain="dothq.co" src="https://analytics.dothq.co/js/plausible.js"></script>}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  isHome: false
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  isHome: PropTypes.bool
}

export default SEO
