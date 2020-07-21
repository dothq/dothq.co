import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, Container, Logo, Flex, NavItem } from "./style"
import { Button, TextButton, IconButton } from "../Button"
import { navigate } from "gatsby"
import FeatherIcon from 'feather-icons-react'

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { useGlobalState } from "../../context"
import { Avatar } from "../style"
import Skeleton from "react-loading-skeleton"

const onLogoContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/download")
}

const Header = ({ siteTitle, isFixed, headerRef }) => {
    const themeContext = React.useContext(ThemeManagerContext)
    const [user] = useGlobalState('user');

    return (
        <StyledHeader isFixed={isFixed} ref={headerRef}>
            <Container>
                <Flex>
                    <Link to={"/"}>
                        <Logo className={"nav-logo"} onContextMenu={onLogoContextMenu} />
                    </Link>
                </Flex>
                <Flex style={{ justifyContent: 'center', flex: 1 }}>
                    <a style={{ height: '100%' }}>
                        <NavItem className={"nav-item"} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>Products</NavItem>
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}> 
                        <NavItem className={"nav-item"} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>Company</NavItem> 
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem className={"nav-item"} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>Community</NavItem> 
                    </a>
                    <a href={"https://status.dothq.co"} target={"_blank"} style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem className={"nav-item"} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>Status</NavItem> 
                    </a>
                </Flex>
                <Flex style={{ justifyContent: 'flex-end' }}>
                    <IconButton className={"nav-icon-item"} onClick={() => themeContext.toggleDark()}><FeatherIcon icon={themeContext.isDark ? "sun" : "moon"} size={18} /></IconButton>

                    {user && 
                        <Link to={"/me"} style={{ marginLeft: '20px' }}>
                            {user && user.avatar ? <Avatar width={32} noFade src={user.avatar} /> : <Skeleton width={32} height={32} circle={true} />}
                        </Link>
                    }
                </Flex>
            </Container>
        </StyledHeader>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
    isFixed: PropTypes.bool,
    headerRef: PropTypes.any
  }
  
Header.defaultProps = {
    siteTitle: ``,
}

export default Header