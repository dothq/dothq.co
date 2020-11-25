import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, Container, Logo, Flex, NavItem, MenuSlot, MenuLine } from "./style"
import { Button, TextButton, IconButton } from "../Button"
import { navigate } from "gatsby"

import { useCookies } from 'react-cookie';

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { useGlobalState } from "../../../lib/context"
import { Avatar, HeaderItemBox, HeaderTab, HeaderTabs } from "../style"
import Skeleton from "react-loading-skeleton"
import { ButtonV2 } from "../ButtonV2"
import { isBrowser } from "../../../lib/helpers/login"
import { ProductsMenu } from "./menus/Products"
import { Line } from "../Footer/style"
import UserController from "../../../lib/controllers/User"

import apiFetch from '../../../lib/tools/fetcher';
import { getUser } from "../../services/authenticate"
import { BrowserMenu } from "./menus/Browser"
import { globalStateContext } from "../../store"

const onLogoContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/download")
}

const Header = ({ children, isFixed, headerRef, isDark, hidden, onTop, hideMenu }) => {
    const { user, loaded } = React.useContext(globalStateContext);

    const [state, setState] = React.useState({
        callingMe: true
    });
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [menuItemHovered, setMenuItemHovered] = React.useState(false);
    const [menuItemSection, setMenuItemSection] = React.useState("browser");

    const themeContext = React.useContext(ThemeManagerContext)

    const onMenuItemHover = (v, sect) => {
        setMenuVisible(v);
        setMenuItemHovered(v);
        setMenuItemSection(sect);
    }

    return (
        <StyledHeader 
            onTop={onTop} 
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
                <div className={"links"}>
                    <HeaderTabs style={{ margin: 0, display: "flex", justifyContent: "center" }}>
                        <HeaderTab 
                            onMouseEnter={() => onMenuItemHover(true, "browser")}
                            onMouseLeave={() => onMenuItemHover(false, "browser")}
                        >
                            Browser
                        </HeaderTab>
                        <HeaderTab 
                            onMouseEnter={() => onMenuItemHover(true, "products")}
                            onMouseLeave={() => onMenuItemHover(false, "products")}
                        >
                            Products
                        </HeaderTab>
                        <HeaderTab 
                            onMouseEnter={() => onMenuItemHover(true, "company")}
                            onMouseLeave={() => onMenuItemHover(false, "company")}
                        >
                            Company
                        </HeaderTab>
                        <HeaderTab 
                            onMouseEnter={() => onMenuItemHover(true, "about")}
                            onMouseLeave={() => onMenuItemHover(false, "about")}
                        >
                            About
                        </HeaderTab>
                    </HeaderTabs>
                </div>
                <div className={"nbtn"}>
                    <>
                        {!user && <>
                            <Link to={"/sign-in"}>
                                <ButtonV2 background={isDark ? 'white' : 'black'} color={isDark ? 'black' : 'white'}>Sign in</ButtonV2>
                            </Link>
                            <Link to={"/sign-up"}>
                                <ButtonV2 background={"transparent"} color={isDark ? 'white' : 'black'} style={{ marginRight: '8px' }}>Register</ButtonV2>
                            </Link>
                        </>}

                        {user && 
                            <Link to={"/account-settings"} style={{ marginLeft: '20px' }}>
                                <Avatar width={32} noFade src={`https://cdn.dothq.co/` + (!user.avatarId ? `assets/defaultAvatar.png` : `avatars/${user.avatarId}.png`)} />
                            </Link>
                        }
                    </>
                </div>
            </Container>
            <MenuSlot visible={menuVisible && !hideMenu} onMouseEnter={() => onMenuItemHover(true, menuItemSection)} onMouseOut={() => onMenuItemHover(false, menuItemSection)}>
                {menuItemSection == "browser" && <BrowserMenu />}
                {menuItemSection == "products" && <ProductsMenu />}
            </MenuSlot>
        </StyledHeader>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    isFixed: PropTypes.bool,
    headerRef: PropTypes.any,
    hidden: PropTypes.bool,
    onTop: PropTypes.bool,
    hideMenu: PropTypes.bool
}
  
Header.defaultProps = {
    siteTitle: ``,
    hidden: false,
    onTop: false,
    hideMenu: false
}

export default Header