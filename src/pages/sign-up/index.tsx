import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AuthSide, AuthLogo, AuthTitle, AuthDesc, AuthLink, AuthField, AuthPlaceholder, AuthInput, Checkbox, CheckboxField } from "../../components/style"
import { Logo } from "../../components/Header/style"
import { Link, navigate } from "gatsby"

import { ButtonV2 } from '../../components/ButtonV2'

import UserController from "../../controllers/User"
import { isBrowser } from "../../helpers/login"
import { validEmail, validPassword, validUsername } from "../../tools/validation"

const SignupPage = ({ location }) => {
    const emailRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();
    const usernameRef = React.createRef<HTMLInputElement>();
    const rememberMeRef = React.createRef<HTMLInputElement>();

    const [done, sd] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    React.useEffect(() => sd(true))

    const [passwordStrength, setPasswordStrength] = React.useState(-1);
    const [emailOK, setEmailOK] = React.useState(-1);
    const [usernameOK, setUsernameOK] = React.useState(-1);

    const user = new UserController();

    const renderButtonDisabled = () => {
        if(!emailRef || !passwordRef || !rememberMeRef || !emailRef.current || !passwordRef.current || !rememberMeRef.current) return;

        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const emailValid = validEmail(email);
        const passwordValid = password.length == 0 ? false : validPassword(password);

        if(email.length == 0 || password.length == 0 || username.length == 0 || !emailValid || !passwordValid) return setDisabled(true);
        else return setDisabled(false);
    }

    React.useEffect(() => {
        renderButtonDisabled();
        isBrowser() && window.addEventListener("keyup", renderButtonDisabled)
    })

    const onPasswordKeyUp = () => {
        if(!passwordRef || !passwordRef.current) return;

        const password = passwordRef.current.value;

        user.getPasswordStrength(password).then((strength: number) => setPasswordStrength(strength))
    }

    const onEmailKeyUp = () => {
        if(!emailRef || !emailRef.current) return;

        const email = emailRef.current.value;

        setEmailOK(validEmail(email) == false ? -1 : 2);
    }

    const onUsernameKeyUp = () => {
        if(!usernameRef || !usernameRef.current) return;

        const username = usernameRef.current.value;

        setUsernameOK(validUsername(username) == false ? -1 : 2);
    }

    const onSignUpClick = () => {
        if(!emailRef || !passwordRef || !rememberMeRef || !emailRef.current || !passwordRef.current || !rememberMeRef.current) return;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email.length == 0 || password.length == 0) return;

        setLoading(!loading);
    }

    const onGitHubSignUpClick = () => {
        setTimeout(() => {
            navigate("/sso/github");
        }, 1000);
    }

    return (
        <Layout blank noEnding noHero>
            <SEO title="Sign up for a Dot ID" />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '870px', height: '100vh', minWidth: '870px', padding: '0 100px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ transform: done ? 'translateX(0px)' : 'translateX(-25px)', opacity: done ? 1 : 0, transition: '0.3s opacity, 0.3s transform' }}>
                        <div>
                            <AuthLogo />
                            <AuthTitle>One account for everything Dot.</AuthTitle>
                            <AuthDesc>You can either create a Dot ID using your email address or using GitHub. <Link to={"/sign-in"}><AuthLink>Already have an ID?</AuthLink></Link></AuthDesc>
                        </div>

                        <div style={{ marginTop: '92px', opacity: loading ? 0.5 : 1, transition: "0.3s opacity", pointerEvents: loading ? "none" : "all" }}>
                            <AuthField style={{ width: '525px' }} passwordStrength={usernameOK}>
                                <AuthInput placeholder={" "} ref={usernameRef} onKeyUp={() => onUsernameKeyUp()} />
                                <AuthPlaceholder>Username</AuthPlaceholder>
                            </AuthField>

                            <AuthField style={{ marginTop: '18px', width: '525px' }} passwordStrength={emailOK}>
                                <AuthInput placeholder={" "} ref={emailRef} onKeyUp={() => onEmailKeyUp()} />
                                <AuthPlaceholder>Email Address</AuthPlaceholder>
                            </AuthField>

                            <AuthField style={{ marginTop: '18px', width: '525px' }} passwordStrength={passwordStrength}>
                                <AuthInput placeholder={" "} type={"password"} ref={passwordRef} onKeyUp={() => onPasswordKeyUp()} />
                                <AuthPlaceholder>Password</AuthPlaceholder>
                            </AuthField>

                            <div style={{ display: 'flex', width: '525px', marginTop: '45px' }}>
                                <Checkbox style={{ flex: '1' }}>
                                    <CheckboxField type={"checkbox"} ref={rememberMeRef} />
                                    <label>Remember my session</label>
                                </Checkbox>
                            </div>

                            <div style={{ marginTop: '45px', display: 'flex', flexDirection: 'column' }}>
                                <ButtonV2 
                                    w={525} 
                                    h={58} 
                                    background={"#4965FF"} 
                                    br={8} 
                                    fs={18} 
                                    onClick={() => onSignUpClick()}
                                    loading={loading}
                                    disabled={disabled}
                                >
                                    Sign up with email
                                </ButtonV2>
                                <span style={{ margin: '14px auto', fontSize: '15px', color: '#656565' }}>or</span>

                                <ButtonV2 loadOnClick={true} onClick={() => onGitHubSignUpClick()} w={525} h={58} background={"transparent"} color={"black"} br={8} fs={18} style={{ border: '2px solid #D2D2D2' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '32px' }}><img style={{ margin: 0, marginRight: '14px' }} src={require("../../images/github.svg")} />Sign up with GitHub</div>
                                </ButtonV2>
                            </div>
                        </div>
                    </div>
                </div>
                <AuthSide />
            </div>
        </Layout>
    )
}

export default SignupPage
