import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ fileName }) => {
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

  return <Img fluid={data[fileName].childImageSharp.fluid} />
}

export default Image
