import React from "react";
import { StyledFooter, Container, LogoText, List, ListTitle, ListGroup, ListItem } from "./style";
import PropTypes from "prop-types"
import { Link } from "gatsby";
import { Logo } from "../Header/style";

const Footer = ({ children }) => (
    <StyledFooter>
        <Container>
            <Link to={"/"}>
                <Logo size={52} />
                <LogoText>by Dot HQ.</LogoText>
            </Link>
            <List>
                <ListGroup>
                    <ListTitle>Explore</ListTitle>
                    <ListItem>Home</ListItem>
                </ListGroup>
            </List>
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