import React from "react"

import { useCookies } from 'react-cookie';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AuthSide, AuthLogo, AuthTitle, AuthDesc, AuthLink, AuthField, AuthPlaceholder, AuthInput, Checkbox, CheckboxField, ButtonTicker, TickerItem } from "../../components/style"
import { Link, navigate } from "gatsby"

import { ButtonV2 } from '../../components/ButtonV2'

import UserController from "../../controllers/User"

import { ErrorJSON } from "../../types"

import { parse } from "search-params";
import { Thinker } from "../../components/Thinker"
import { validEmail, validPassword } from "../../tools/validation"
import { isBrowser } from "../../helpers/login"
import { ID_REDIRECT_AFTER_LOGIN } from "../../config"
import { useGlobalState } from "../../context"

const SigninPage = ({ location }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    let params = parse(location.search)

    const [userGlobal, setUser] = useGlobalState('user');

    const emailRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();
    const rememberMeRef = React.createRef<HTMLInputElement>();

    const [isCaps, setCaps] = React.useState(false);

    const [done, sd] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    const [error, setError] = React.useState("");
    const [status, setStatus] = React.useState("idle");

    const user = UserController;

    const renderButtonDisabled = () => {
        if(!emailRef || !passwordRef || !rememberMeRef || !emailRef.current || !passwordRef.current) return;

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const emailValid = validEmail(email);
        const passwordValid = password.length >= 4;

        if(email.length == 0 || password.length == 0 || !emailValid || !passwordValid) return setDisabled(true);
        else return setDisabled(false);
    }

    React.useEffect(() => {
        sd(true)

        renderButtonDisabled();
        isBrowser() && window.addEventListener("keyup", renderButtonDisabled)

        if(isBrowser() && !params.next && window.history.replaceState) {
            window.history.replaceState({}, null, `${window.location.pathname}?next=${ID_REDIRECT_AFTER_LOGIN}`);
        }
        if(isBrowser() && history.state && location.state && location.state.email) {
            if(!emailRef || !passwordRef || !rememberMeRef || !emailRef.current || !passwordRef.current) return;

            const emailValid = validEmail((location.state.email as string));

            emailRef.current.value = emailValid ? (location.state.email as string) : "";
        }
        if(isBrowser() && history.state && location.state && location.state.password) {
            if(!emailRef || !passwordRef || !rememberMeRef || !emailRef.current || !passwordRef.current) return;

            const passwordValid = (location.state.password as string).length == 0 ? false : validPassword((location.state.password as string));

            passwordRef.current.value = passwordValid ? (location.state.password as string) : "";
        }

        if(
            isBrowser() && 
            history &&
            history.state && 
            window.history.replaceState &&
            location.state.email && 
            location.state.password && 
            validEmail((location.state.email as string)) && 
            ((location.state.password as string).length == 0 ? false : validPassword((location.state.password as string)))
        ) {
            onSignInClick();
            window.history.replaceState({}, null, `${window.location.pathname}?next=${ID_REDIRECT_AFTER_LOGIN}`);
        }
    })

    const onSignInClick = () => {
        if(!emailRef || !passwordRef || !rememberMeRef || !emailRef.current || !passwordRef.current || !rememberMeRef.current) return;

        if(disabled) return;

        setLoading(true);

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const rememberMe = rememberMeRef.current.checked;

        user.login({ email, password }).then(async (r: ErrorJSON) => {
            setLoading(false);

            if(r.ok) {
                const token = (r as any).data.result.token;

                const { data }: any = await user.getSelf(token);
                data.ok && setUser(data.result);

                const d = new Date()
                
                if(rememberMe) d.setDate(d.getDate() + 2)

                setCookie("token", token, { expires: rememberMe ? d : null, sameSite: "strict", secure: true })

                params = parse(location.search)

                const next = ((params.next as string).startsWith("/") && !(params.next as string).includes(".") ? params.next : "/" as string);
                navigate(params.next ? (next as string) : "/");
            }
        }).catch(e => {
            setLoading(false);

            setError(e.response.data.message)
            setStatus("error");

            setTimeout(() => {
                setStatus("idle");
            }, 2000);
        });
    }

    const onGitHubSignInClick = () => {
        setTimeout(() => {
            navigate("/sso/github");
        }, 1000);
    }
    
    return (
        <Layout blank noEnding noHero>
            <SEO title="Sign in to your existing Dot ID" />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '870px', height: '100vh', minWidth: '870px', padding: '0 100px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ transform: done ? 'translateX(0px)' : 'translateX(-25px)', opacity: done ? 1 : 0, transition: '0.3s opacity, 0.3s transform' }}>
                        <div>
                            <Link to={"/"}>
                                <AuthLogo />
                            </Link>
                            <AuthTitle>Welcome back.</AuthTitle>
                            <AuthDesc>Sign in to your existing Dot ID. Don’t have a Dot ID yet? <Link to={"/sign-up"}><AuthLink>Create one here!</AuthLink></Link></AuthDesc>
                        </div>

                        <div style={{ marginTop: '92px', opacity: loading ? 0.5 : 1, transition: "0.3s opacity", pointerEvents: loading ? "none" : "all" }}>
                            <AuthField style={{ width: '525px' }}>
                                <AuthInput placeholder={" "} ref={emailRef} />
                                <AuthPlaceholder>Email Address</AuthPlaceholder>
                            </AuthField>

                            <AuthField style={{ marginTop: '18px', width: '525px' }}>
                                <AuthInput placeholder={" "} type={"password"} ref={passwordRef} style={{ paddingRight: 0 }} />
                                <div style={{ margin: '18px 18px 18px 0' }}>
                                    {isCaps && <img style={{ maxWidth: '24px', height: '24px' }} src={require("../../images/caps.svg")}></img>}
                                </div>
                                <AuthPlaceholder>Password</AuthPlaceholder>
                            </AuthField>

                            <div style={{ display: 'flex', width: '525px', marginTop: '45px' }}>
                                <Checkbox style={{ flex: '1', alignItems: 'center' }}>
                                    <CheckboxField type={"checkbox"} ref={rememberMeRef} />
                                    <label onClick={() => rememberMeRef.current.checked = !rememberMeRef.current.checked} style={{ height: '22px' }}>Remember my session</label>
                                </Checkbox>

                                <Link to={"/sign-in/forgot-password"}>
                                    <AuthLink style={{ display: 'flex', fontSize: '15px' }}>Forgot your password?</AuthLink>
                                </Link>
                            </div>

                            <div style={{ marginTop: '45px', display: 'flex', flexDirection: 'column' }}>
                                <ButtonV2 
                                    w={525} 
                                    h={58} 
                                    background={"#4965FF"} 
                                    br={8} 
                                    fs={18} 
                                    onClick={() => onSignInClick()}
                                    loading={loading}
                                    disabled={disabled}
                                >
                                    <ButtonTicker>
                                        <TickerItem bg={"#4965FF"} visible={status == "idle"}>Sign in</TickerItem>
                                        <TickerItem bg={"#4965FF"} visible={status == "error"}>{error}</TickerItem>
                                    </ButtonTicker>
                                </ButtonV2>

                                <span style={{ margin: '14px auto', fontSize: '15px', color: '#656565' }}>or</span>

                                <ButtonV2 loadOnClick={true} onClick={() => onGitHubSignInClick()} w={525} h={58} background={"transparent"} color={"black"} br={8} fs={18} bc={"#D2D2D2"}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '32px' }}><img style={{ margin: 0, marginRight: '14px' }} src={require("../../images/github.svg")} />Sign in with GitHub</div>
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

export default SigninPage
