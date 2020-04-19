import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link, navigate } from "gatsby"
import { getUserToken } from "../helpers/login"
import { getMe } from "../helpers/me"

const MePage = () => {

    window.addEventListener('load', (event) => {
        const isLoggedIn = getUserToken()

        if(!isLoggedIn) navigate('/id')
    })

    const [user, setUser] = React.useState({ username: '' })
    React.useEffect(() => {
      getMe().then(me => {
        setUser(me)
      })
    }, [])

    return (
        <Layout center={true}>
            <SEO title={user.username ? user.username : 'User'} />
            <div style={{ paddingTop: '12vh' }}>
                <img src="https://cdn.dothq.co/assets/unknown.png" width="64" />
                <h1 style={{ fontSize: '3rem' }}>{user.username}</h1>
            </div>
        </Layout>
    )
}

export default MePage
