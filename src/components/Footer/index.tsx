import React from "react";
import { StyledFooter, Container, LogoText, List, ListTitle, ListGroup, ListItem, Copyright, Logo, Socials, SocialIcon } from "./style";
import PropTypes from "prop-types"
import { Link } from "gatsby";

import twitter from '../../images/icons/twitter.svg'
import discord from '../../images/icons/discord.svg'
import youtube from '../../images/icons/youtube.svg'

export const Item = ({ href, children }: {href?: string, children: any}) => (
    <Link to={href}>
        <ListItem>{children}</ListItem>
    </Link>
)

export const ExternalItem = ({ href, children }: {href: string, children: any }) => (
    <a href={href}>
        <ListItem>{children}</ListItem>
    </a>
)

const Footer = ({ children }) => (
    <StyledFooter>
        <Container>
            <div style={{ flex: 1 }}>
                <Link to={"/"}>
                    <Logo />
                </Link>
                <LogoText>We are Dot HQ, the privacy brand.</LogoText>

                <Socials>
                    <SocialIcon href={"https://twitter.com/DotBrowser"} target={"_blank"} src={twitter} />
                    <SocialIcon href={"https://dothq.co/join"} target={"_blank"} src={discord} />
                    <SocialIcon href={"https://www.youtube.com/channel/UCgmXI2ccMKSTPNCij4_6Ubw"} target={"_blank"} src={youtube} />
                </Socials>
            </div>
            <List>
                <ListGroup>
                    <ListTitle>Products</ListTitle>
                    <Item href={"/download/dot"}>Dot Browser</Item>
                    <Item href={"/download/mobile"}>Dot Browser for Mobile</Item>
                    <Item href={"/id"}>Dot ID</Item>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Company</ListTitle>
                    <Item href={"/about"}>About Dot HQ</Item>
                    <Item href={"/branding"}>Branding</Item>
                    <Item href={"/kit"}>Press Kit</Item>
                    <ExternalItem href={"https://github.com/dothq"}>Open Source</ExternalItem>
                </ListGroup>
                <ListGroup>
                    <ListTitle>Resources</ListTitle>
                    <Item href={"/support"}>Support</Item>
                    <Item href={"/contact"}>Contact</Item>
                    <ExternalItem href={"https://status.dothq.co"}>Status</ExternalItem>
                    <Item href={"/blog"}>Blog</Item>
                </ListGroup>
                <ListGroup style={{ marginRight: 0 }}>
                    <ListTitle>Legal</ListTitle>
                    <Item href={"/legal/terms"}>Terms</Item>
                    <Item href={"/legal/privacy"}>Privacy</Item>
                    <Item href={"/legal/cookies"}>Cookies</Item>
                    <Item href={"/legal/gdpr"}>GDPR</Item>
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
