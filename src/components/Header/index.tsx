import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, Container, Logo, Flex, NavItem, MenuSlot, MenuLine } from "./style"
import { Button, TextButton, IconButton } from "../Button"
import { navigate } from "gatsby"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { useGlobalState } from "../../context"
import { Avatar, HeaderItemBox } from "../style"
import Skeleton from "react-loading-skeleton"
import { ButtonV2 } from "../ButtonV2"
import { isBrowser } from "../../helpers/login"
import { ProductsMenu } from "./menus/Products"
import { Line } from "../Footer/style"

const onLogoContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/download")
}

const Header = ({ children, isFixed, headerRef, isDark, hidden, onTop }) => {
    const [menuVisible, setMenuVisible] = React.useState(false);

    const themeContext = React.useContext(ThemeManagerContext)
    const [user] = useGlobalState('user');

    const onMenuItemHover = () => {
        setMenuVisible(!menuVisible);
    }

    const onMenuParentLeave = () => {
        setMenuVisible(false);
    }

    return (
        <StyledHeader 
            onTop={onTop} 
            forceShadow={menuVisible} 
            className={"nav"} 
            ref={headerRef} 
            isDark={isDark}
            hide={hidden}
        >
            {children}
            <Container className={"nav-cont"}>
                <div className={"logotype"}>
                    <Link to={"/"}>
                        <Logo isDark={!isDark} onContextMenu={onLogoContextMenu} />
                    </Link>
                </div>
                <div className={"links"} onMouseLeave={onMenuParentLeave}>
                    <a style={{ height: '100%' }}>
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onClick={onMenuItemHover}
                        >Products</NavItem>
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}> 
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onClick={onMenuItemHover}
                        >Company</NavItem> 
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onClick={onMenuItemHover}
                        >Community</NavItem> 
                    </a>
                    <a target={"_blank"} style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onClick={onMenuItemHover}
                        >About</NavItem> 
                    </a>
                </div>
                <div className={"nbtn"}>
                    {!user && <>
                        <Link to={"/sign-in"}>
                            <ButtonV2 background={isDark ? 'white' : 'black'} color={isDark ? 'black' : 'white'}>Sign in</ButtonV2>
                        </Link>
                        <Link to={"/sign-up"}>
                            <ButtonV2 background={"transparent"} color={isDark ? 'white' : 'black'} style={{ marginRight: '8px' }}>Register</ButtonV2>
                        </Link>
                    </>}

                    {user && 
                        <Link to={"/me"} style={{ marginLeft: '20px' }}>
                            {user && user.avatar ? <Avatar width={32} noFade src={user.avatar} /> : <Skeleton width={32} height={32} circle={true} />}
                        </Link>
                    }
                </div>
            </Container>
            <MenuLine visible={menuVisible} />
            <MenuSlot visible={menuVisible}>
                <ProductsMenu />
            </MenuSlot>
        </StyledHeader>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    isFixed: PropTypes.bool,
    headerRef: PropTypes.any,
    hidden: PropTypes.bool,
    onTop: PropTypes.bool
  }
  
Header.defaultProps = {
    siteTitle: ``,
    hidden: false,
    onTop: false
}

export default Header