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

const AccountSettingsPageAudit = () => {
    const { user, loaded } = React.useContext(globalStateContext);

    return (
        <Layout noEnding>
            <SEO title="Account Settings" />
            <Content hasHero>
                {(loaded && user) && (
                    <>
                        <ASHero tab={4} user={user} />
                        <div style={{ maxWidth: "1300px", width: "100%", marginTop: "2rem", textAlign: "left" }}>
                            audit
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

export default AccountSettingsPageAudit
