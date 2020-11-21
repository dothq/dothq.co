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

const AccountSettingsPage = () => {
    const { user, loaded } = React.useContext(globalStateContext);
    const [tab, setTab] = React.useState(0);
    
    return (
        <Layout noEnding>
            <SEO title="Account Settings" />
            <Content hasHero>
                {loaded && (
                    <>
                        <div className={"hero-container"} style={{ paddingBottom: 0, marginBottom: 0, boxShadow: "none", borderBottom: "1px solid #eaeaea" }}>
                            <div className={"hero-content"}>
                                <h1 style={{ marginBottom: '8px', textAlign: "left" }}>Welcome, {user.username}</h1>
                                <p style={{ textAlign: "left" }}>Manage your account information, privacy, and security settings all in one place.</p>
                            </div>

                            <div style={{ maxWidth: "1300px", margin: "0 auto", marginTop: "-1px" }}>
                                <HeroTabs selected={tab}>
                                    <HeroTab onClick={() => setTab(0)}>
                                        <img src={require("../../assets/images/icons/user.svg")}></img>
                                        General
                                    </HeroTab>
                                    <HeroTab onClick={() => setTab(1)}>
                                        <img src={require("../../assets/images/icons/privacy.svg")}></img>
                                        Security &amp; Privacy
                                    </HeroTab>
                                    <HeroTab onClick={() => setTab(2)}>
                                        <img src={require("../../assets/images/icons/synchronisation.svg")}></img>
                                        Synchronisation
                                    </HeroTab>
                                    <HeroTab onClick={() => setTab(3)}>
                                        <img src={require("../../assets/images/icons/devices.svg")}></img>
                                        Connected Devices
                                    </HeroTab>
                                    <HeroTab onClick={() => setTab(4)}>
                                        <img src={require("../../assets/images/icons/audit_logs.svg")}></img>
                                        Audit Log
                                    </HeroTab>
                                </HeroTabs>
                            </div>
                        </div>
                        <div style={{ maxWidth: "1300px", width: "100%", marginTop: "2rem", textAlign: "left" }}>
                            {tab == 0 && (
                                <>
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
                                </>
                            )}

                            {tab == 1 && (
                                <>
                                    <Box style={{ marginBottom: "28px" }}>
                                        <h3>Two-factor authentication</h3>
                                        <p style={{ textAlign: "left" }}>Secure your account with an extra layer of protection when signing into your Dot ID.</p>

                                        <h4>Download an authenticator app</h4>

                                        <List style={{ marginBottom: "18px" }}>
                                            <ListItem>
                                                <div style={{ display: "flex" }}>
                                                    <img width={24} src={require("../../assets/images/authenticators/authy.svg")} />
                                                    <Space s={6} />
                                                    Authy
                                                </div> 

                                                <div style={{ marginLeft: "auto", display: "flex" }}>
                                                    <a style={{ height: "24px", display: "flex" }} href={"https://authy.com/download/"} target={"_blank"}>
                                                        <img width={24} src={require("../../assets/images/os/android.svg")} />
                                                        <Space s={8} />
                                                        <img width={24} src={require("../../assets/images/os/ios.svg")} />
                                                        <Space s={8} />
                                                        <img width={24} src={require("../../assets/images/os/windows.png")} />
                                                        <Space s={8} />
                                                        <img width={24} src={require("../../assets/images/os/macos.png")} />
                                                        <Space s={8} />
                                                        <img width={24} src={require("../../assets/images/os/linux.png")} />
                                                    </a>
                                                </div>
                                            </ListItem>
                                            <ListItem>
                                                <div style={{ display: "flex" }}>
                                                    <img width={24} src={require("../../assets/images/authenticators/aegis.svg")} />
                                                    <Space s={6} />
                                                    Aegis
                                                </div> 

                                                <div style={{ marginLeft: "auto", display: "flex" }}>
                                                    <a style={{ height: "24px", display: "flex" }} href={"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"} target={"_blank"}>
                                                        <img width={24} src={require("../../assets/images/os/android.svg")} />
                                                    </a>
                                                </div>
                                            </ListItem>
                                            <ListItem>
                                                <div style={{ display: "flex" }}>
                                                    <img width={24} src={require("../../assets/images/authenticators/google.svg")} />
                                                    <Space s={6} />
                                                    Google Authenticator
                                                </div>

                                                <div style={{ marginLeft: "auto", display: "flex" }}>
                                                    <a style={{ height: "24px", display: "flex" }} href={"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"} target={"_blank"}>
                                                        <img width={24} src={require("../../assets/images/os/android.svg")} />
                                                    </a>
                                                    <Space s={8} />
                                                    <a style={{ height: "24px", display: "flex" }} href={"https://apps.apple.com/us/app/google-authenticator/id388497605"} target={"_blank"}>
                                                        <img width={24} src={require("../../assets/images/os/ios.svg")} />
                                                    </a>
                                                </div>
                                            </ListItem>
                                            <ListItem>
                                                <div style={{ display: "flex" }}>
                                                    <img width={24} src={require("../../assets/images/authenticators/microsoft.svg")} />
                                                    <Space s={6} />
                                                    Microsoft Authenticator
                                                </div>

                                                <div style={{ marginLeft: "auto", display: "flex" }}>
                                                    <a style={{ height: "24px", display: "flex" }} href={"https://play.google.com/store/apps/details?id=com.azure.authenticator"} target={"_blank"}>
                                                        <img width={24} src={require("../../assets/images/os/android.svg")} />
                                                    </a>
                                                    <Space s={8} />
                                                    <a style={{ height: "24px", display: "flex" }} href={"https://apps.apple.com/us/app/microsoft-authenticator/id983156458"} target={"_blank"}>
                                                        <img width={24} src={require("../../assets/images/os/ios.svg")} />
                                                    </a>
                                                </div>
                                            </ListItem>
                                        </List>  

                                        <h4>Scan the QR code below</h4>

                                        <QRCode value={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} renderAs={"svg"} style={{ margin: "14px 0" }} />

                                        <h4>Enter 6 digit code on your authenticator app</h4>

                                        <div style={{ display: "flex", alignItems: "flex-end", margin: "14px 0" }}>
                                            <Input compact value={""} placeholder={"000 000"} type={"2fa"} width={"100%"} inputmode={"numeric"} pattern={"^[0-9]{1,6}$"} />

                                            <Space s={10} />

                                            <ButtonV2 w={250} h={48} background={"#000000"} color={"#ffffff"} br={8} fs={18}>
                                                Activate 2FA
                                            </ButtonV2>
                                        </div>
                                    </Box>

                                    <Box style={{ marginBottom: "28px" }}>
                                        <h3>Recovery</h3>
                                        <p style={{ textAlign: "left" }}>Edit your recovery options.</p>

                                        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "14px" }}>
                                            <Input compact width={"100%"} type={"email"} />
                                        </div>

                                        <div style={{ display: "flex", alignItems: "flex-end", marginBottom: "14px" }}>
                                            <Input compact width={"100%"} type={"phone"} />
                                        </div>

                                        <ButtonV2 w={125} h={48} background={"#000000"} color={"#ffffff"} br={8} fs={18}>
                                            Save
                                        </ButtonV2>
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
                                </>
                            )}

                            {tab == 2 && (
                                <>
                                    synchronisation
                                </>
                            )}

                            {tab == 3 && (
                                <>
                                    connected devices
                                </>
                            )}

                            {tab == 4 && (
                                <>
                                    audit log
                                </>
                            )}
                        </div>
                    </>
                )}

                {!loaded && (
                    <div style={{ width: "100%", height: "calc(100vh - 250px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Thinker size={12} />
                    </div>
                )}
            </Content>
        </Layout>
    )
}

export default AccountSettingsPage
