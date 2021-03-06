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
import { HeroTabs, HeroTab, Box, AuthField, AuthInput, AuthPlaceholder } from "../../components/style"

import { globalStateContext } from '../../store';
import { ButtonV2 } from "../../components/ButtonV2"
import { Input, Space } from "../../components/Input"
import { List, ListItem } from "../../components/List"

import QRCode from 'qrcode.react'
import { ASHero } from "../../components/ASHero"

const AccountSettingsPage = () => {
    const { user, loaded } = React.useContext(globalStateContext);

    navigate("general")

    return (
        <Layout noEnding>
            <SEO title="Account Settings" />
            <Content hasHero>
                {(loaded && user) && (
                    <>
                        <ASHero tab={-1} user={user} />
                        <div style={{ width: "100%", height: "calc(100vh - 450px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Thinker size={12} />
                        </div>
                    </>
                )}

                {(!loaded || !user) && (
                    <div style={{ width: "100%", height: "calc(100vh - 250px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Thinker size={12} />
                    </div>
                )}
            </Content>
        </Layout>
    )
}

export default AccountSettingsPage
