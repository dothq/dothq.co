import React from "react";
import { StyledFooter, Container, LogoText, List, ListTitle, ListGroup, ListItem, Copyright, Logo, Socials, SocialIcon, Line, Subtitle, SignupForm, SignupInput } from "./style";
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby";

import twitter from '../../images/icons/twitter.svg'
import discord from '../../images/icons/discord.svg'
import youtube from '../../images/icons/youtube.svg'

import { ButtonV2 } from '../ButtonV2'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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

const Footer = ({ children }) => {
    const emailRef = React.createRef<HTMLInputElement>();
    const registerBtnRef = React.createRef<HTMLAnchorElement>();

    const onEmailKeyUp = () => {
        const value = emailRef.current.value;

        if(!emailRegex.test(value)) return registerBtnRef.current.href = `/register`;
        registerBtnRef.current.href = `/register?email=${value}`
    }

    return (
        <StyledFooter>
            <Container>
                <div style={{ flex: 1, width: '100%' }}>
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
            <Line />
            <Container>
                <div style={{ display: 'flex', flex: 1 }}>
                    <Subtitle className={"register-sub"}>Register for a Dot ID, it's free.</Subtitle>
                </div>
                <div style={{ display: 'flex' }}>
                    <SignupForm>
                        <SignupInput type={"email"} placeholder={"Enter your email address"} ref={emailRef} onKeyUp={onEmailKeyUp} />
                        <ButtonV2 href={"/register"} ref={registerBtnRef} style={{ borderRadius: '0 100px 100px 0' }}>Register</ButtonV2>
                    </SignupForm>
                </div>
            </Container>
        </StyledFooter>
    )
}

Footer.propTypes = {
    children: PropTypes.any,
  }
  
Footer.defaultProps = {
    children: '',
}

export default Footer;
