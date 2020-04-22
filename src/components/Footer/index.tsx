import React from "react";
import { StyledFooter, Container, LogoText, List, ListTitle, ListGroup, ListItem, Copyright } from "./style";
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
            <Copyright>© {new Date().getFullYear()}, Dot HQ. All rights reserved.</Copyright>
            <List>
                <ListGroup>
                    <ListTitle>Explore</ListTitle>
                    <ListItem>Home</ListItem>
                    <ListItem>Features</ListItem>
                    <ListItem>Download</ListItem>
                    <ListItem>Careers</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Learn</ListTitle>
                    <ListItem>Blog</ListItem>
                    <ListItem>Changelog</ListItem>
                    <ListItem>Support</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Resources</ListTitle>
                    <ListItem>Brand</ListItem>
                    <ListItem>Press Kit</ListItem>
                    <ListItem>Guides</ListItem>
                    <ListItem>Notion</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Social</ListTitle>
                    <ListItem>Twitter</ListItem>
                    <ListItem>Discord</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Legal</ListTitle>
                    <ListItem>Terms</ListItem>
                    <ListItem>Privacy</ListItem>
                </ListGroup>
                <ListGroup>
                    <ListTitle>More from HQ</ListTitle>
                    <ListItem>Drop</ListItem>
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