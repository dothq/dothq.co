import React from 'react'

const clientId = "8e8c007e4bd6166e8944"

export const ghSSO = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user:email&redirect_uri=https://dothq.co/sso/github-onboard`

const GHPage = () => {
    if (typeof window !== `undefined`) window.location.href = ghSSO;
    return <></>
}

export default GHPage

