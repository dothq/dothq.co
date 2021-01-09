import React from 'react';

import { Link, navigate } from "gatsby"

import { HeroTabs, HeroTab } from '../style';

export const ASTabs = ({ tab }: { tab: number }) => (
    <HeroTabs selected={tab}>
        <Link to={"/account-settings/general"}>
            <HeroTab>
                <img src={require("../../assets/images/icons/user.svg")}></img>
                General
            </HeroTab>
        </Link>

        <Link to={"/account-settings/security-and-privacy"}>
            <HeroTab>
                <img src={require("../../assets/images/icons/privacy.svg")}></img>
                Security &amp; Privacy
            </HeroTab>
        </Link>

        <Link to={"/account-settings/synchronisation"}>
            <HeroTab>
                <img src={require("../../assets/images/icons/synchronisation.svg")}></img>
                Synchronisation
            </HeroTab>
        </Link>

        <Link to={"/account-settings/devices"}>
            <HeroTab>
                <img src={require("../../assets/images/icons/devices.svg")}></img>
                Connected Devices
            </HeroTab>
        </Link>

        <Link to={"/account-settings/audit-log"}>
            <HeroTab>
                <img src={require("../../assets/images/icons/audit_logs.svg")}></img>
                Audit Log
            </HeroTab>
        </Link>
    </HeroTabs>
)

export const ASHero = ({ user, tab }: { user: any; tab: number }) => {
    return (
        <div className={"hero-container"} style={{ paddingBottom: 0, marginBottom: 0, boxShadow: "none", borderBottom: "1px solid var(--gray-4)" }}>
            <div className={"hero-content"}>
                <h1 style={{ marginBottom: '8px', textAlign: "left" }}>Welcome, {user.name}</h1>
                <p style={{ textAlign: "left" }}>Manage your account information, privacy, and security settings all in one place.</p>
            </div>

            <div style={{ maxWidth: "1300px", margin: "0 auto", marginTop: "-1px" }}>
                <ASTabs tab={tab} />
            </div>
        </div>
    )
}