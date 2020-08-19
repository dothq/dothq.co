import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AuthSide, AuthLogo, AuthTitle, AuthDesc, AuthLink, AuthField, AuthPlaceholder, AuthInput, Checkbox, CheckboxField, Avatar } from "../../components/style"
import { Logo } from "../../components/Header/style"
import { Link } from "gatsby"

import { ButtonV2 } from '../../components/ButtonV2'

import axios from 'axios';
import { parse } from 'search-params';

import FeatherIcon from 'feather-icons-react';
import { isBrowser } from "../../helpers/login"

import { ghSSO } from './github';

var loaded = false;

const SSOGHPage = ({ location }) => {
    const [user, setUser] = React.useState({ username: "", email: "", avatar: "" })

    const search = parse(location.search)

    if(loaded == false) {
        loaded = true;
        axios.post("https://dothq.co/api/sso/github", { 
            code: search.code
        }).then(res => {
            if(res.data.error && res.data.error == "bad_verification_code") return isBrowser() && window.location.replace(ghSSO);

            if(typeof(res.data.ok) == "boolean" && res.data.ok == false) {
                document.write("Error.", res.data.error ? " " + res.data.error : "")
            }
            setUser(res.data.data)
        })
    }

    return (
        <Layout blank noEnding noHero>
            <SEO title="One last thing..." />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '870px', height: '100vh', minWidth: '870px', padding: '0 100px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ transform: user && user.username ? 'translateX(0px)' : 'translateX(-25px)', opacity: user && user.username ? 1 : 0, transition: '0.3s opacity, 0.3s transform' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <AuthLogo />
                                <FeatherIcon icon={"arrow-left"} size={30} style={{ margin: '0 16px' }} />
                                <Avatar width={50} src={user.avatar} />
                            </div>
                            <AuthTitle>One last thing...</AuthTitle>
                            <AuthDesc>Could you double check the fields below and make sure everything is correct? If everything looks a-ok, just click the big blue button!</AuthDesc>
                        </div>

                        <div style={{ marginTop: '92px' }}>
                            <AuthField style={{ width: '525px' }}>
                                <AuthInput defaultValue={user.username} placeholder={" "} />
                                <AuthPlaceholder>Username</AuthPlaceholder>
                            </AuthField>

                            <AuthField style={{ marginTop: '18px', width: '525px' }}>
                                <AuthInput defaultValue={user.email} placeholder={" "} />
                                <AuthPlaceholder>Email Address</AuthPlaceholder>
                            </AuthField>

                            <div style={{ display: 'flex', width: '525px', marginTop: '45px' }}>
                                <Checkbox style={{ flex: '1' }}>
                                    <CheckboxField type={"checkbox"} />
                                    <label>Remember my session</label>
                                </Checkbox>
                            </div>

                            <div style={{ marginTop: '45px', display: 'flex', flexDirection: 'column' }}>
                                <ButtonV2 w={525} h={58} background={"#4965FF"} br={8} fs={18}>Sign in</ButtonV2>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthSide />
            </div>
        </Layout>
    )
}

export default SSOGHPage
