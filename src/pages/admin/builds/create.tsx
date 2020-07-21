import React from "react"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

import { Link, navigate } from "gatsby"
import { getUserToken, isBrowser } from "../../../helpers/login"
import { HeroButton, IconButton } from '../../../components/Button'
import FeatherIcon from 'feather-icons-react'

import { useGlobalState } from '../../../context'
import { Form, InputContainer, InputIconContainer, Input, Buttons, DateTimePicker, Spinner } from "../../../components/style"
import axios from "axios"

const semanticVersioningRegex = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+)?$/;
const osesRegex = /[^,\s][^\,]*[^,\s]*/gm;

const BDCreatePage = () => {
    const [user, setUser] = useGlobalState('user');
    const [builds, setBuilds] = useGlobalState('builds');

    const [errorVisible, setErrorVisibility] = React.useState(false);
    const [errorContent, setErrorContent] = React.useState("");

    const [fileName, setFileName] = React.useState("");
    const [extensions, setExtensions] = React.useState("");

    const [loading, setLoading] = React.useState(false);

    const productRef = React.createRef<HTMLInputElement>();
    const versionRef = React.createRef<HTMLInputElement>();
    const osRef = React.createRef<HTMLInputElement>();
    const unlockRef = React.createRef<HTMLInputElement>();
    const assetsRef = React.createRef<HTMLInputElement>();

    const showMissing = (value) => {
        setErrorVisibility(true)
        setErrorContent(`"${value}" must be set`)
    }

    isBrowser() && window.addEventListener('keyup', () => {
        if(!productRef.current || !versionRef.current || !osRef.current) return;

        const product = productRef.current.value || '';
        const version = versionRef.current.value || '';
        const oses = osRef.current.value || '';

        let extns = new Set();

        if(osRef.current.value.toLowerCase().includes("w")) extns.add(".exe")
        if(osRef.current.value.toLowerCase().includes("m")) extns.add(".dmg")
        if(osRef.current.value.toLowerCase().includes("l")) extns.add(".deb")

        if(osRef.current.value.toLowerCase().includes("win")) extns.add(".exe")
        if(osRef.current.value.toLowerCase().includes("mac")) extns.add(".dmg")
        if(osRef.current.value.toLowerCase().includes("lin")) extns.add(".deb")

        if(osRef.current.value.toLowerCase().includes("windows")) extns.add(".exe")
        if(osRef.current.value.toLowerCase().includes("macos")) extns.add(".dmg")
        if(osRef.current.value.toLowerCase().includes("linux")) extns.add(".deb")

        setExtensions(Array.from(extns).join(", "))

        if(product.length !== 0 && semanticVersioningRegex.test(version)) {
            setFileName(`Install ${product} ${version}`)
        } else {
            setFileName(``)
        }
    })

    const onCreateClick = () => {
        const product = productRef.current.value;
        const version = versionRef.current.value;
        const oses = osRef.current.value;
        const unlock = unlockRef.current.value;
        const assets = assetsRef.current.checked;

        if(!product) showMissing("product")
        if(!version) showMissing("version")
        if(!oses) showMissing("os")
        if(!unlock) showMissing("unlock")

        if(oses.length == 0) {
            setErrorVisibility(true)
            setErrorContent("You must specify some supported operating systems (for example: win, mac, lin or wlm)")
            return
        }

        if(!semanticVersioningRegex.test(version)) {
            setErrorVisibility(true)
            setErrorContent("Version must be in the semantic versioning scheme (for example: 1.2.3 or 4.2.0-alpha)")
            return
        }

        if(!assets) {
            setErrorVisibility(true)
            setErrorContent("You must upload the assets to the CDN before continuing.")
            return
        }

        if(unlock.length == 0) {
            setErrorVisibility(true)
            setErrorContent("You must set a date for the build to be unlocked at.")
            return
        }

        const cleanOS = []

        if(extensions.includes(".exe")) cleanOS.push("Windows")
        if(extensions.includes(".dmg")) cleanOS.push("macOS")
        if(extensions.includes(".deb")) cleanOS.push("Linux")

        setErrorVisibility(false)

        console.log(product, version, cleanOS.join(", "), unlock)
        setLoading(true)

        const body = {
            productName: product,
            version: version,
            supportedOs: cleanOS,
            unlocksAt: new Date(unlock).toISOString()
        }
        
        axios.post('https://dothq.co/api/builds/create', body, { method: 'POST', headers: { authorization: "Bearer " + getUserToken() } })
            .then(res => {
                setLoading(false)
                if(res.data && res.data.ok && res.data.ok == true && res.data.id) {
                    setBuilds(undefined)
                    window.location.href = "/admin/builds"
                } else {
                    setErrorVisibility(true)
                    setErrorContent(res.data.status)
                }
            })
            .catch(error => {
                setLoading(false)
                setErrorVisibility(true)
                setErrorContent(error.response.data.status)
            })
    }

    if(isBrowser()) {
        const token = getUserToken()
        if(!token) navigate("/id?to=builds/create")
        if(!user) navigate("/id?to=builds/create")
    
        if(user && user.hasOwnProperty("isEmployee") && !user.isEmployee) navigate("/403?reason=This%20page%20is%20for%20employees%20only.")
    }

    const onBackClick = () => {
        navigate('/admin/builds')
    }
    
    return (
        <Layout noEnding noHero>
            <SEO title={'Builds Dashboard'} />
            <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="hero-container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => onBackClick()}><FeatherIcon icon="arrow-left" size={24} /></IconButton>
                        <h1 style={{ fontSize: '32px', marginBottom: '0' }}>Create Build</h1>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'end' }}>
                        {/* <HeroButton shade={"blue"} style={{ height: '42px' }} onClick={() => onBuildClick()}>Create build</HeroButton> */}
                    </div>
                </div>
            </div>
            <div>
                <div style={{ margin: '0 auto', display: 'grid', justifyContent: 'left', maxWidth: '1064px' }}>
                    {errorVisible && <p className={"error-text"} style={{ textAlign: 'left', margin: 0 }}>{errorContent}</p>}
                    <Form>
                        <InputContainer style={{ width: '275px', marginTop: '28px' }}>
                            <InputIconContainer>
                                <FeatherIcon icon={"box"} size={16} />
                            </InputIconContainer>
                            <Input placeholder="Product Name" type="name" ref={productRef} />
                        </InputContainer>
            
                        <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                            <InputIconContainer>
                                <FeatherIcon icon={"tag"} size={16} />
                            </InputIconContainer>
                            <Input placeholder="Version" ref={versionRef} />
                        </InputContainer>

                        <p style={{ fontSize: '12px', margin: 0, textAlign: 'left' }}>The install file should be called <code style={{ fontSize: '12px', textAlign: 'left' }}>{fileName}</code></p>

                        <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                            <InputIconContainer>
                                <FeatherIcon icon={"monitor"} size={16} />
                            </InputIconContainer>
                            <Input placeholder="Supported OS (split by comma)" ref={osRef} />
                        </InputContainer>

                        <p style={{ fontSize: '12px', margin: 0, textAlign: 'left' }}>Supported file extensions: <code style={{ fontSize: '12px' }}>{extensions}</code><br/>Shortcuts work as well like <code style={{ fontSize: '12px' }}>wlm</code> would give you <code style={{ fontSize: '12px' }}>Windows, Linux, macOS</code></p>

                        <InputContainer style={{ width: '275px', marginTop: '10px' }}>
                            <InputIconContainer>
                                <FeatherIcon icon={"unlock"} size={16} />
                            </InputIconContainer>
                            <DateTimePicker placeholder={"Build unlocks at"} ref={unlockRef} />
                        </InputContainer>

                        <div style={{ marginTop: '12px', fontSize: '12px' }}>
                            <label style={{ display: 'flex' }}>
                                <input type="checkbox" style={{ display: 'flex', alignSelf: 'center', marginRight: '8px' }} ref={assetsRef} />
                                I have uploaded the assets for this build
                            </label>
                        </div>
                    </Form>
            
                    <Buttons style={{ margin: '28px 0', display: 'flex', justifyContent: 'left' }}>
                        <HeroButton shade={"black"} style={{ boxShadow: 'none', height: '42px', width: '118px', justifyContent: 'center', marginRight: '28px' }} onClick={onCreateClick}>
                            {!loading ? 'Create' : <Spinner />}
                        </HeroButton>
                    </Buttons> 
                </div>
            </div>
        </Layout>
    )
}

export default BDCreatePage
