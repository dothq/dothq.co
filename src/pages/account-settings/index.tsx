import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { navigate } from "gatsby"

import { useGlobalState } from '../../../lib/context'
import { Thinker } from "../../components/Thinker"
import UserController from "../../../lib/controllers/User"
import { useCookies } from "react-cookie"

import apiFetch from '../../../lib/tools/fetcher'
import { Content } from "../../components/Hero/style"
import { HeroTabs, HeroTab } from "../../components/style"

const AccountSettingsPage = () => {
    const [user, setUser] = React.useState({
        ready: false,
        selectedTabId: 0,
        username: "",
        avatarId: "",
        email: ""
    });

    const fetchUser = async () => {
        const { data } = await apiFetch.post("/api/id/me", { 
            fields: ["username", "avatarId", "email"]
        })

        if(data.ok) {
            setUser({ ...user, ready: true, ...data.result })
        }
        else navigate("/sign-in")
    }

    React.useEffect(() => {
        fetchUser()
    }, [])
    
    return (
        <Layout noEnding>
            <SEO title="Account Settings" />
            <Content hasHero>
                {user.ready && (
                    <>
                        <div className={"hero-container"} style={{ paddingBottom: 0, boxShadow: "none" }}>
                            <div className={"hero-content"}>
                                <h1 style={{ marginBottom: '8px', textAlign: "left" }}>Welcome, {user.username}</h1>
                                <p style={{ textAlign: "left" }}>Manage your account information, privacy, and security settings all in one place.</p>
                            </div>

                            <div style={{ maxWidth: "1300px", margin: "0 auto", marginTop: "-1px" }}>
                                <HeroTabs selected={user.selectedTabId}>
                                    <HeroTab onClick={() => setUser({ ...user, selectedTabId: 0 })}>
                                        <img src={require("../../assets/images/icons/user.svg")}></img>
                                        General
                                    </HeroTab>
                                    <HeroTab onClick={() => setUser({ ...user, selectedTabId: 1 })}>
                                        <img src={require("../../assets/images/icons/privacy.svg")}></img>
                                        Privacy
                                    </HeroTab>
                                    <HeroTab onClick={() => setUser({ ...user, selectedTabId: 2 })}>
                                        <img src={require("../../assets/images/icons/synchronisation.svg")}></img>
                                        Synchronisation
                                    </HeroTab>
                                    <HeroTab onClick={() => setUser({ ...user, selectedTabId: 3 })}>
                                        <img src={require("../../assets/images/icons/devices.svg")}></img>
                                        Connected Devices
                                    </HeroTab>
                                    <HeroTab onClick={() => setUser({ ...user, selectedTabId: 4 })}>
                                        <img src={require("../../assets/images/icons/audit_logs.svg")}></img>
                                        Audit Log
                                    </HeroTab>
                                </HeroTabs>
                            </div>
                        </div>
                        <div style={{ maxWidth: "1300px", margin: "0 auto", width: "100%" }}>
hi
                        </div>
                    </>
                )}

                {!user.ready && (
                    <div style={{ width: "100%", height: "calc(100vh - 250px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Thinker size={12} />
                    </div>
                )}
            </Content>
        </Layout>
    )
}

export default AccountSettingsPage
