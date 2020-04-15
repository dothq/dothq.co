import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, Container, Logo, Flex } from "./style"
import { Button, TextButton, IconButton } from "../Button"
import { navigate } from "gatsby"
import FeatherIcon from 'feather-icons-react'

const onLogoContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/design")
}

const Header = ({ siteTitle }) => (
    <StyledHeader>
        <Container>
            <Flex>
                <Link to={"/"}>
                    <Logo onContextMenu={onLogoContextMenu} />
                </Link>
            </Flex>
            <Flex style={{ flex: 1, justifyContent: 'flex-end' }}>
                <IconButton><FeatherIcon icon="moon" size={18} /></IconButton>
                <IconButton><FeatherIcon icon="github" size={18} /></IconButton>
                <TextButton style={{ marginLeft: '16px' }}>Blog</TextButton>
                <TextButton style={{ marginLeft: '16px' }}>Features</TextButton>
                <Link to={"/download"} style={{ textDecoration: 'none', marginLeft: '16px' }}>
                    <Button shade={"blue"}>Download</Button>
                </Link>
            </Flex>
        </Container>
    </StyledHeader>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Header.defaultProps = {
    siteTitle: ``,
}

export default Header