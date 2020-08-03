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
import { ButtonV2 } from "../ButtonV2"

const onLogoContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/download")
}

const Header = ({ siteTitle, isFixed, headerRef, isDark }) => {
    const themeContext = React.useContext(ThemeManagerContext)
    const [user] = useGlobalState('user');

    return (
        <StyledHeader isFixed={isFixed} ref={headerRef} isDark={isDark}>
            <Container>
                <div className={"logotype"}>
                    <Link to={"/"}>
                        <Logo isDark={isDark} onContextMenu={onLogoContextMenu} />
                    </Link>
                </div>
                <div className={"links"}>
                    <a style={{ height: '100%' }}>
                        <NavItem isDark={isDark} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>Products</NavItem>
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}> 
                        <NavItem isDark={isDark} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>Company</NavItem> 
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem isDark={isDark} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>Community</NavItem> 
                    </a>
                    <a target={"_blank"} style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem isDark={isDark} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>About</NavItem> 
                    </a>
                </div>
                <div className={"nbtn"}>
                    <ButtonV2>Sign in</ButtonV2>
                    <ButtonV2 background={"transparent"} color={"black"} style={{ marginRight: '8px' }}>Register</ButtonV2>

                    {user && 
                        <Link to={"/me"} style={{ marginLeft: '20px' }}>
                            {user && user.avatar ? <Avatar width={32} noFade src={user.avatar} /> : <Skeleton width={32} height={32} circle={true} />}
                        </Link>
                    }
                </div>
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