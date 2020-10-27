import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { navigate } from "gatsby"

import { useGlobalState } from '../../../lib/context'
import { Thinker } from "../../components/Thinker"
import UserController from "../../../lib/controllers/User"
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
