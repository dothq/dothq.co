import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AuthSide, AuthLogo, AuthTitle, AuthDesc, AuthLink, AuthField, AuthPlaceholder, AuthInput, Checkbox, CheckboxField } from "../../components/style"
import { Logo } from "../../components/Header/style"
import { Link } from "gatsby"

import { ButtonV2 } from '../../components/ButtonV2'

const SigninPage = ({ location }) => {
    const [done, sd] = React.useState(false);

    React.useEffect(() => sd(true))
    
    return (
        <Layout blank noEnding noHero>
            <SEO title="Sign in to your existing Dot ID" />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '870px', height: '100vh', minWidth: '870px', padding: '0 100px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ transform: done ? 'translateX(0px)' : 'translateX(-25px)', opacity: done ? 1 : 0, transition: '0.3s opacity, 0.3s transform' }}>
                        <div>
                            <AuthLogo />
                            <AuthTitle>Welcome back.</AuthTitle>
                            <AuthDesc>Sign in to your existing Dot ID. Don’t have a Dot ID yet? <Link to={"/sign-up"}><AuthLink>Create one here!</AuthLink></Link></AuthDesc>
                        </div>

                        <div style={{ marginTop: '92px' }}>
                            <AuthField style={{ width: '525px' }}>
                                <AuthInput placeholder={" "} />
                                <AuthPlaceholder>Email Address</AuthPlaceholder>
                            </AuthField>

                            <AuthField style={{ marginTop: '18px', width: '525px' }}>
                                <AuthInput placeholder={" "} type={"password"} />
                                <AuthPlaceholder>Password</AuthPlaceholder>
                            </AuthField>

                            <div style={{ display: 'flex', width: '525px', marginTop: '45px' }}>
                                <Checkbox style={{ flex: '1' }}>
                                    <CheckboxField type={"checkbox"} />
                                    <label>Remember my session</label>
                                </Checkbox>

                                <AuthLink style={{ display: 'flex', fontSize: '15px' }}>Forgot your password?</AuthLink>
                            </div>

                            <div style={{ marginTop: '45px', display: 'flex', flexDirection: 'column' }}>
                                <ButtonV2 w={525} h={58} background={"#4965FF"} br={8} fs={18}>Sign in</ButtonV2>
                                <span style={{ margin: '14px auto', fontSize: '15px', color: '#656565' }}>or</span>

                                <Link to={"/sso/github"}>
                                    <ButtonV2 w={525} h={58} background={"transparent"} color={"black"} br={8} fs={18} style={{ border: '2px solid #D2D2D2' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '32px' }}><img style={{ margin: 0, marginRight: '14px' }} src={require("../../images/github.svg")} />Sign in with GitHub</div>
                                    </ButtonV2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthSide />
            </div>
        </Layout>
    )
}

export default SigninPage
