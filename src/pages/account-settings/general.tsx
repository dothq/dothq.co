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

const AccountSettingsPageGeneral = () => {
    const { user, loaded } = React.useContext(globalStateContext);

    return (
        <Layout noEnding>
            <SEO title="Account Settings" />
            <Content hasHero>
                {(loaded && user) && (
                    <>
                        <ASHero tab={0} user={user} />
                        <div style={{ maxWidth: "1300px", width: "100%", marginTop: "2rem", textAlign: "left" }}>
                            <Box style={{ marginBottom: "28px" }}>
                                <h3>Name</h3>
                                <p style={{ textAlign: "left" }}>Please enter your name or a username.</p>

                                <div style={{ display: "flex", alignItems: "flex-end" }}>
                                    <Input compact value={user.username} width={"100%"} />

                                    <Space s={10} />

                                    <ButtonV2 w={125} h={48} background={"#000000"} color={"#ffffff"} br={8} fs={18}>
                                        Save
                                    </ButtonV2>
                                </div>
                            </Box>

                            <Box style={{ marginBottom: "28px" }}>
                                <h3>Email</h3>
                                <p style={{ textAlign: "left" }}>Please enter the email you want to use to access Dot services with.</p>

                                <div style={{ display: "flex", alignItems: "flex-end" }}>
                                    <Input compact value={user.email} width={"100%"} type={"email"} />

                                    <Space s={10} />

                                    <ButtonV2 w={125} h={48} background={"#000000"} color={"#ffffff"} br={8} fs={18}>
                                        Save
                                    </ButtonV2>
                                </div>
                            </Box>

                            <Box>
                                <h3>Password</h3>
                                <p style={{ textAlign: "left" }}>Please enter a new password for your Dot ID.</p>

                                <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "14px" }}>
                                    <Input compact width={"100%"} type={"password"} />

                                    <Space s={10} />

                                    <Input compact width={"100%"} type={"password"} placeholder={"Re-enter password"} />
                                </div>

                                <ButtonV2 w={125} h={48} background={"#000000"} color={"#ffffff"} br={8} fs={18}>
                                    Save
                                </ButtonV2>
                            </Box>
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

export default AccountSettingsPageGeneral
