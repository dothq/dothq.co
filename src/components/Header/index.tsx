import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, Container, Logo, Flex, NavItem } from "./style"
import { Button, TextButton, IconButton } from "../Button"
import { navigate } from "gatsby"

import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { useGlobalState } from "../../context"
import { Avatar, HeaderItemBox } from "../style"
import Skeleton from "react-loading-skeleton"
import { ButtonV2 } from "../ButtonV2"
import { isBrowser } from "../../helpers/login"

const onLogoContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/download")
}

const Header = ({ children, isFixed, headerRef, isDark }) => {
    const [onTop, setOnTop] = React.useState(false);

    const boxRef = React.createRef<HTMLDivElement>();

    const themeContext = React.useContext(ThemeManagerContext)
    const [user] = useGlobalState('user');

    let to;
    let linkIsHovered = false;
    let boxIsHovered = false;

    const onHeaderLinkHover = (e) => {
        if(!boxRef || !boxRef.current) return;
        const headerLink = e.target;

        const bounds = headerLink.getBoundingClientRect();

        clearTimeout(to);

        boxRef.current.style.transform = `translateX(${(bounds.left * 2) - (bounds.width * 2.425) - bounds.left}px)`
        boxRef.current.style.transition = `0.4s transform, 0.3s opacity`
        boxRef.current.style.opacity = "1";
        boxRef.current.style.pointerEvents = "all";

        linkIsHovered = true;
    }

    const onHeaderBoxHover = () => {
        if(!boxRef || !boxRef.current) return;

        boxIsHovered = true;

        boxRef.current.style.opacity = "1";
        boxRef.current.style.pointerEvents = "all";

        linkIsHovered = true;
    }

    const onHeaderBoxMouseOff = () => {
        if(!boxRef || !boxRef.current) return;

        boxIsHovered = false;

        boxRef.current.style.opacity = "0";
        boxRef.current.style.pointerEvents = "none";
    }

    const onHeaderLinkMouseOff = () => {
        if(!boxRef || !boxRef.current) return;

        if(linkIsHovered) return boxRef.current.style.opacity = "0";

        to = setTimeout(() => {
            if(boxIsHovered) return;

            boxRef.current.style.transition = ``
            linkIsHovered = false;
            boxIsHovered = false;
            boxRef.current.style.pointerEvents = "none";
        }, 500);
    }

    const onLinksHover = () => {

    }

    React.useState(() => {
        isBrowser() && window.addEventListener("scroll", () => {
            if(window.scrollY >= 100) setOnTop(true)
            else setOnTop(false)
        })
    })

    return (
        <StyledHeader onTop={onTop} className={"nav"} ref={headerRef} isDark={isDark}>
            {children}
            <Container>
                <div className={"logotype"}>
                    <Link to={"/"}>
                        <Logo isDark={!isDark} onContextMenu={onLogoContextMenu} />
                    </Link>
                </div>
                <div className={"links"} onMouseOver={onLinksHover}>
                    <a style={{ height: '100%' }}>
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onMouseOver={(e) => onHeaderLinkHover(e)}
                            onMouseLeave={onHeaderLinkMouseOff}
                        >Products</NavItem>
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}> 
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onMouseOver={(e) => onHeaderLinkHover(e)}
                            onMouseLeave={onHeaderLinkMouseOff}
                        >Company</NavItem> 
                    </a>
                    <a style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onMouseOver={(e) => onHeaderLinkHover(e)}
                            onMouseLeave={onHeaderLinkMouseOff}
                        >Community</NavItem> 
                    </a>
                    <a target={"_blank"} style={{ marginLeft: '32px', height: '100%' }}>
                        <NavItem 
                            isDark={!isDark} 
                            style={{ height: '100%', display: 'flex', alignItems: 'center' }} 
                            onMouseOver={(e) => onHeaderLinkHover(e)}
                            onMouseLeave={onHeaderLinkMouseOff}
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
            <HeaderItemBox ref={boxRef} onMouseOver={onHeaderBoxHover} onMouseLeave={onHeaderBoxMouseOff}>

            </HeaderItemBox>
        </StyledHeader>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    isFixed: PropTypes.bool,
    headerRef: PropTypes.any
  }
  
Header.defaultProps = {
    siteTitle: ``,
}

export default Header