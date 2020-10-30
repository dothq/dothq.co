import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Input, InputContainer, InputIconContainer, Buttons, Form, Process, ProcessChild } from "../components/style"

import FeatherIcon from 'feather-icons-react'
import { HeroButton, TextButton } from "../components/Button"
import Emoji from "react-emoji-render"
import { getRandomEmoji } from "../../lib/helpers/emoji"
import { Link, navigate } from "gatsby"
import { generateEmojiConfig } from "../../lib/tools/emoji"
import { loginWithCredentials, setToken, isBrowser, registerWithCredentials } from "../../lib/helpers/login"

import { parse } from 'search-params' 

import { useGlobalState } from '../../lib/context'

const SignupPage = ({ location }) => {
    React.useEffect(() => {
        navigate("/sign-up")
    })

    return (
        <Layout>
        </Layout>
    )
}

export default SignupPage
