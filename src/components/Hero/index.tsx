import React from "react"
import { StyledHero } from "./style";
import PropTypes from "prop-types"

const Hero = ({ children }) => (
    <StyledHero className={"s-center"}>
        {children}
    </StyledHero>
)

Hero.propTypes = {
    children: PropTypes.any,
  }
  
Hero.defaultProps = {
    children: '',
}

export default Hero;