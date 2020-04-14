import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, Container, Logo, Flex } from "./style"
import { Button, TextButton } from "../Button"
import { navigate } from "gatsby"

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
                <TextButton style={{ marginLeft: '16px' }}>Blog</TextButton>
                <TextButton style={{ marginLeft: '16px' }}>Features</TextButton>
                <Link to={"/download"} style={{ textDecoration: 'none', marginLeft: '16px' }}>
                    <Button>Download</Button>
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