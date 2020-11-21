import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      landingScreenshotLight: file(relativePath: { eq: "landing-screenshot-light.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      landingScreenshotDark: file(relativePath: { eq: "landing-screenshot-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 72) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[props.fileName].childImageSharp.fluid} data-sal={props['data-sal']} data-sal-delay={props['data-sal-delay']} data-sal-duration={props['data-sal-duration']} data-sal-easing={props['data-sal-easing']} />
}

export default Image
