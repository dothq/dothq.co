import React from "react";
import { StyledFooter, Container, LogoText, List, ListTitle, ListGroup, ListItem, Copyright } from "./style";
import PropTypes from "prop-types"
import { Link } from "gatsby";
import { Logo } from "../Header/style";

export const Item = ({ href, children }) => (
    <Link to={href}>
        <ListItem>{children}</ListItem>
    </Link>
)

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
                    <Item href={"/"}>Home</Item>
                    <Item href={"/id"}>ID</Item>
                    <Item href={"/download"}>Download</Item>
                    <Item href={"/careers"}>Careers</Item>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Learn</ListTitle>
                    <Item href={"/blog"}>Blog</Item>
                    <Item href={"/changelog"}>Changelog</Item>
                    <Item href={"/support"}>Support</Item>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Resources</ListTitle>
                    <Item href={"/brand"}>Brand</Item>
                    <Item href={"/brand#kit"}>Press Kit</Item>
                    <Item href={"/guides"}>Guides</Item>
                    <Item href={"/design"}>Design</Item>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Social</ListTitle>
                    <Item href={"/5A"}>Twitter</Item>
                    <Item href={"/8J"}>Discord</Item>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Legal</ListTitle>
                    <Item href={"/legal/terms"}>Terms</Item>
                    <Item href={"/legal/privacy"}>Privacy</Item>
                    <Item href={"/legal/cookies"}>Cookies</Item>
                    <Item href={"/legal/legal/gdpr"}>GDPR</Item>
                </ListGroup>
                <ListGroup>
                    <ListTitle>More from HQ</ListTitle>
                    <Item href={"/products/drop"}>Drop</Item>
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