import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Link, navigate } from "gatsby"
import { getUserToken, setToken } from "../../helpers/login"
import { getMe } from "../../helpers/me"

import Skeleton from 'react-loading-skeleton';
import { Heading, Avatar } from "../../components/style"
import { HeroButton } from '../../components/Button'
import { Time } from "../../components/BlogCard"

import { useGlobalState } from '../../context'
import { Content } from "../../components/Hero/style"
import { Thinker } from "../../components/Thinker"
import UserController from "../../controllers/User"
import { useCookies } from "react-cookie"

const AccountSettingsPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [user, setUser] = useGlobalState('user');

    const userController = UserController;

    React.useEffect(() => {
        const token = cookies.token;

        if(token.length == 0) navigate("/sign-in?next=/account-settings")

        userController.getSelf(token)
            .catch(_ => navigate("/sign-in?next=/account-settings"))
    })
    
    return (
        <Layout blank noEnding noHero>
            <SEO title={"Dot ID"} />
            <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Thinker size={12} />
            </div>
        </Layout>
    )
}

export default AccountSettingsPage
