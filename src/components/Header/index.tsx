import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StyledHeader, Container, Logo, Flex } from "./style"
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
    navigate("/design")
}

const Header = ({ siteTitle }) => {
    const themeContext = React.useContext(ThemeManagerContext)
    const [user] = useGlobalState('user');

    return (
        <StyledHeader>
            <Container>
                <Flex>
                    <Link to={"/"}>
                        <Logo onContextMenu={onLogoContextMenu} />
                    </Link>
                </Flex>
                <Flex style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => themeContext.toggleDark()}><FeatherIcon icon={themeContext.isDark ? "sun" : "moon"} size={18} /></IconButton>

                    <a href={"https://github.com/dothq"}>
                        <IconButton><FeatherIcon icon="github" size={18} /></IconButton>
                    </a>

                    <Link to={"/blog"}>
                        <TextButton style={{ margin: '5px' }}>Blog</TextButton>
                    </Link>

                    {!user && 
                        <Link to={"/id"}>
                            <TextButton style={{ margin: '5px' }}>Login</TextButton>
                        </Link>
                    }

                    <Link to={"/download"} style={{ textDecoration: 'none', marginLeft: '16px' }}>
                        <Button shade={"blue"}>Download</Button>
                    </Link>

                    {user && 
                        <Link to={"/me"} style={{ marginLeft: '20px' }}>
                            {user && user.id ? <Avatar width={32} noFade src={`https://cdn.dothq.co/avatars/${user.id}.png`} /> : <Skeleton width={118} height={118} circle={true} />}
                        </Link>
                    }
                </Flex>
            </Container>
        </StyledHeader>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Header.defaultProps = {
    siteTitle: ``,
}

export default Header