import React from "react"

import useSWR from 'swr';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AuthSide, AuthLogo, AuthTitle, AuthDesc, AuthLink, AuthField, AuthPlaceholder, AuthInput, Checkbox, CheckboxField, ButtonTicker, TickerItem } from "../../components/style"
import { Link, navigate } from "gatsby"

import { ButtonV2 } from '../../components/ButtonV2'

import { validEmail, validPassword } from "../../../lib/tools/validation"

import { parse } from "search-params"

import apiFetch from "../../../lib/tools/fetcher";
import config from "../../../dot.config";
import { isLoggedIn, login } from "../../services/authenticate";
import { useGlobalState } from "../../../lib/context";
import * as store from "../../store"
import { isBrowser } from "../../../lib/helpers/login";

const SigninPage = ({ location }) => {
    const [state, dispatch] = store.useGlobalState();
    const [user, setUser] = useGlobalState('user');

    const [open, setOpen] = React.useState(false);
    const [to, setTo] = React.useState(config.auth.redirectAfterLogin);

    const params = parse(location.search)

    const [formState, setFormState] = React.useState({
        callInProgress: false,
        error: {
            visible: false,
            message: ""
        },
        email: { 
            value: "", 
            colour: "" 
        }, 
        password: { 
            value: "", 
            colour: ""
        }
    })

    const onFormBlur = (form: "email" | "password") => {
        const { value } = formState[form]

        let formColour = "";

        if(form == "email") formColour = validEmail(value) ? "green" : "red"
        if(form == "password") formColour = validPassword(value) == 2 ? "green" : validPassword(value) == 1 ? "orange" : "red"

        setFormState({ ...formState, [form]: { ...formState[form], colour: formColour }, error: { ...formState.error, visible: false }})
    }

    const onSignInClick = async () => {
        const email = formState.email.value;
        const password = formState.password.value;

        setFormState({ ...formState, callInProgress: true })

        login({ email, password })
            .then((data: any) => {
                setFormState({ ...formState, callInProgress: false })

                if(data.data && isBrowser()) window.location.href = ((params.next ? params.next : "/") as string);
            })
            .catch(err => {
                setFormState({ ...formState, error: { visible: true, message: err.message }})
            })
    }

    React.useEffect(() => { 
        dispatch({ loaded: true })
        setTimeout(setOpen(true), 500) 
    }, []);

    // if(isLoggedIn) navigate(to);

    return (
        <Layout blank noEnding noHero>
            <SEO title="Sign in to your existing Dot ID" />
            <div style={{ display: 'flex' }}>
                <div style={{ width: '870px', height: '100vh', minWidth: '870px', padding: '0 100px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ transform: open ? "" : "translateX(-35px)", opacity: open ? 1 : 0, transition: '0.3s opacity, 0.3s transform' }}>
                        <div>
                            <Link to={"/"}>
                                <AuthLogo />
                            </Link>
                            <AuthTitle>Welcome back.</AuthTitle>
                            <AuthDesc>Sign in to your existing Dot ID. Don’t have a Dot ID yet? <Link to={"/sign-up"}><AuthLink>Create one today!</AuthLink></Link></AuthDesc>
                        </div>

                        <div style={{ marginTop: '92px', transition: "0.3s opacity" }}>
                            <AuthField style={{ marginTop: '18px', width: '525px' }}>
                                <AuthInput 
                                    placeholder={" "} 
                                    value={formState.email.value} 
                                    onChange={(e) => setFormState({ ...formState, email: { ...formState.email, value: e.target.value } })}
                                    onBlur={() => onFormBlur("email")}
                                />
                                <AuthPlaceholder>Email Address</AuthPlaceholder>
                            </AuthField>

                            <AuthField style={{ marginTop: '18px', width: '525px' }}>
                                <AuthInput 
                                    placeholder={" "} 
                                    type={"password"} 
                                    value={formState.password.value} 
                                    onChange={(e) => setFormState({ ...formState, password: { ...formState.password, value: e.target.value } })}
                                    onBlur={() => onFormBlur("password")}
                                />
                                <AuthPlaceholder>Password</AuthPlaceholder>
                            </AuthField>

                            <div style={{ display: 'flex', width: '525px', marginTop: '45px' }}>
                                <Checkbox style={{ flex: '1', alignItems: 'center' }}>
                                    <CheckboxField type={"checkbox"} />
                                    <label style={{ height: '22px' }}>Remember my session</label>
                                </Checkbox>
                            </div>

                            <div style={{ marginTop: '45px', display: 'flex', flexDirection: 'column' }}>
                                <ButtonV2 
                                    w={525} 
                                    h={58} 
                                    background={"#4965FF"} 
                                    br={8} 
                                    fs={18}
                                    onClick={() => onSignInClick()}
                                    loading={formState.callInProgress}
                                    disabled={
                                        formState.email.value.length == 0 || 
                                        formState.password.value.length == 0 ||
                                        formState.email.colour !== "green" ||
                                        formState.password.colour !== "green" ||
                                        formState.error.visible
                                    }
                                >
                                    <ButtonTicker>
                                        <TickerItem bg={"#4965FF"} visible={!formState.error.visible}>Sign in with email</TickerItem>
                                        <TickerItem bg={"#4965FF"} visible={formState.error.visible}>{formState.error.message}</TickerItem>
                                    </ButtonTicker>
                                </ButtonV2>
                                <span style={{ margin: '14px auto', fontSize: '15px', color: '#656565' }}>or</span>

                                <ButtonV2 loadOnClick={true} w={525} h={58} background={"transparent"} color={"black"} br={8} fs={18} bc={"#D2D2D2"}>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '32px' }}><img style={{ margin: 0, marginRight: '14px' }} src={require("../../assets/images/github.svg")} />Sign in with GitHub</div>
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
