import React from "react";
import { StyledFooter, Container } from "./style";
import PropTypes from "prop-types"

const Footer = ({ children }) => (
    <StyledFooter>
        <Container>
            {children}
        </Container>
    </StyledFooter>
)

Footer.propTypes = {
    children: PropTypes.any,
  }
  
Footer.defaultProps = {
    children: '',
}

export default Footer;