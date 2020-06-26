import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { Link, navigate } from "gatsby"
import { getUserToken, isBrowser } from "../../../helpers/login"

import { getOS } from "../../../helpers/os";

import Skeleton from 'react-loading-skeleton';
import { HeroButton, IconButton, TextButton } from '../../../components/Button'
import { Time } from "../../../components/BlogCard"
import FeatherIcon from 'feather-icons-react';

import axios from 'axios';

import { useGlobalState } from '../../../context'

import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';			   
import { Spinner } from "../../../components/style"

const BDPage = () => {
    const themeContext = React.useContext(ThemeManagerContext)

    const [user, setUser] = useGlobalState('user');
    const [builds, setBuilds] = useGlobalState('builds');

    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const token = getUserToken()
        if(!token) navigate("/id?to=admin/builds")
        if(!user) navigate("/id?to=admin/builds")

        if(user && user.hasOwnProperty("isEmployee") && !user.isEmployee) navigate("/403?reason=This%20page%20is%20for%20employees%20only.")
    })

    const onBuildClick = () => {
        navigate('/admin/builds/create')
    }

    const onDeleteClick = (id) => {
        const body = {
            id
        }

        axios.delete('https://dothq.co/api/builds/delete/' + id, { headers: { authorization: "Bearer " + getUserToken() } })
            .then(res => {
                if(res.data && res.data.ok && res.data.ok == true) {
                    axios.get('https://dothq.co/api/builds.all')
                        .then(res => res.data.results && setBuilds(res.data.results))
                }
            })
            .catch(error => {
                console.log(error.response)
                document.write(JSON.stringify(error.response.data))
            })
    }

    const onRefreshClick = () => {
        setLoading(true)

        axios.get('https://dothq.co/api/builds/all')
            .then(res => {
                res.data.results && setBuilds(res.data.results)
                setLoading(false)
            })
    }
    
    return (
        <Layout noEnding noHero>
            <SEO title={'Builds Dashboard'} />
            <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="hero-container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '32px', marginBottom: '0' }}>Builds</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'end' }}>
                        <HeroButton shade={"black"} style={{ height: '42px' }} onClick={() => onRefreshClick()}>{isLoading ? <Spinner style={{ borderWidth: '2px' }} /> : <FeatherIcon icon="rotate-cw" size={18} color="#fff" />}</HeroButton>
                        <HeroButton shade={"blue"} style={{ height: '42px' }} onClick={() => onBuildClick()}>Create build</HeroButton>
                    </div>
                </div>
            </div>
            <div style={{ margin: '0 auto', maxWidth: '1164px' }}>
                <table style={{ color: themeContext.isDark ? "white" : "" }}>
                    <tr>
                        <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}></th>
                        <th style={{ borderColor: themeContext.isDark ? "#222" : "" }}>Version</th>
                        <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Product</th>
                        <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Build release</th>
                        <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Supports</th>
                        <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Actions</th>
                    </tr>
                    {builds !== undefined && builds.map(build => (
                        <tr key={build.id} id={`release-${build.id}`}>
                            <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>{build.productName == "Dot Browser" ? ( <img style={{ verticalAlign: 'middle', lineHeight: '48px', margin: '0 auto' }} src={"https://cdn.dothq.co/assets/dotbrowser-logo.png"} width="48" /> ) : <img style={{ verticalAlign: 'middle', lineHeight: '48px', margin: '0 auto', borderRadius: '100%' }} src={"https://cdn.dothq.co/assets/defaultAvatar.png"} width="48" />}</td>
                            <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>{build.version}</td>
                            <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>{build.productName}</td>
                            <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>{build.unlocksAt !== 0 ? <Time date={build.unlocksAt} /> : 'Not confirmed'}</td>
                            <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>{build.supportedOs.join(", ")}</td>
                            <td>
                                <IconButton onClick={() => onDeleteClick(build.id)}><FeatherIcon icon="trash-2" size={18} color="#ff5d5d" /></IconButton>
                            </td>
                        </tr>
                    ))}
                </table>

                {user && user.isEmployee && <Link to={"/builds"}>
                    <TextButton isBasic>View builds</TextButton>
                </Link>}
            </div>
        </Layout>
    )
}

export default BDPage
