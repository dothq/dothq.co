import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AuthSide, AuthLogo, AuthTitle, AuthDesc, AuthField, AuthPlaceholder, AuthInput, Checkbox, AuthLink } from "../../components/style"

import { ButtonV2 } from '../../components/ButtonV2'

import { parse } from "search-params";
import { validEmail } from "../../../lib/tools/validation"
import { isBrowser } from "../../../lib/helpers/login"
import { Link } from "gatsby"

const ForgotPasswordPage = ({ location }) => {
    const emailRef = React.createRef<HTMLInputElement>();

    const [done, sd] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    React.useEffect(() => sd(true))

    const renderButtonDisabled = () => {
        if(!emailRef || !emailRef.current) return;

        const email = emailRef.current.value;

        const emailValid = validEmail(email);

        if(email.length == 0 || !emailValid) return setDisabled(true);
        else return setDisabled(false);
    }

    React.useEffect(() => {
        renderButtonDisabled();
        isBrowser() && window.addEventListener("keyup", renderButtonDisabled)
    })

    const onRPClick = () => {
        if(!emailRef || !emailRef.current) return;

        setLoading(true);

        const email = emailRef.current.value;

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }
    
    return (
        <Layout blank noEnding noHero>
            <SEO title="Forgot Password" />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '870px', height: '100vh', minWidth: '870px', padding: '0 100px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ transform: done ? 'translateX(0px)' : 'translateX(-25px)', opacity: done ? 1 : 0, transition: '0.3s opacity, 0.3s transform' }}>
                        <div>
                            <Link to={"/"}>
                                <AuthLogo />
                            </Link>
                            <AuthTitle>Reset your password</AuthTitle>
                            <AuthDesc>Enter your email address below and we'll send you a link to reset your password.</AuthDesc>
                        </div>

                        <div style={{ marginTop: '92px', opacity: loading ? 0.5 : 1, transition: "0.3s opacity", pointerEvents: loading ? "none" : "all" }}>
                            <AuthField style={{ width: '525px' }}>
                                <AuthInput placeholder={" "} ref={emailRef} />
                                <AuthPlaceholder>Email Address</AuthPlaceholder>
                            </AuthField>

                            <div style={{ marginTop: '45px', display: 'flex', flexDirection: 'column' }}>
                                <ButtonV2 
                                    w={525} 
                                    h={58} 
                                    background={"#4965FF"} 
                                    br={8} 
                                    fs={18} 
                                    onClick={() => onRPClick()}
                                    loading={loading}
                                    disabled={disabled}
                                >
                                    Send reset password link
                                </ButtonV2>

                                <Link to={"/sign-in"} style={{ margin: '0 auto', marginTop: '18px', width: 'max-content' }}>
                                    <AuthLink style={{ fontSize: '15px' }}>Go back to sign in</AuthLink>
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

export default ForgotPasswordPage
