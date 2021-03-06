import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { navigate } from 'gatsby';

import { Content } from "../components/Hero/style"
import { Heading, Description, FeatureIcon, Feature, FeatureDisplay, IconsGrid, IconItem, Checkbox, CheckboxField, Tag } from "../components/style"

import identity from '../assets/images/icons/identity.svg'
import fonts from '../assets/images/icons/fonts.svg'
import colours from '../assets/images/icons/colours.png'
import kit from '../assets/images/icons/kit.svg'
import { ButtonV2 } from "../components/ButtonV2"
import { isBrowser } from "../../lib/helpers/login";

export default ({ pageContext: { icons } }) => {
    icons.sort((a: any, b: any) => ((a.name as number) > ((b.name as number))*2-1))

    const downloadIcon = (icon) => {
        if(isBrowser()) {
            const blob = new Blob([icon.data], { type: "image/svg" })
            const url = window.URL.createObjectURL(blob);

            const btn = (document.getElementById("icon-blob-btn") as any);

            btn.href = url;
            btn.download = icon.name + ".svg";
            btn.click();

            window.URL.revokeObjectURL(url);
            btn.href = "";
        }
    }

    return (
        <Layout noEnding>
            <SEO title="Design Specifications - Icons" />
            <Content hasHero>
                <div className={"hero-container"}>
                    <div className={"hero-content"}>
                        <h1 style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Doticons <Tag>v0.0.2</Tag></h1>
                        <p>Open source icons used in Dot products.</p>
                        <a style={{ margin: "0 auto", marginTop: "28px" }} href={"https://www.figma.com/file/FejBYzufw2F8xsGcThdmA8/Doticons?node-id=0%3A1"} target={"_blank"}>
                            <ButtonV2 w={150}>Download</ButtonV2>
                        </a>
                        <a id={"icon-blob-btn"} style={{ display: "none" }} download={""} href={""}></a>
                    </div>
                </div>
                <div className={"legal-content"}>
                    <div style={{ width: "900px", display: "flex", flexDirection: "column", marginBottom: "2.5rem" }}>
                        <div style={{ marginBottom: "2.5rem" }}>
                            <span style={{ fontSize: "16px", fontWeight: 500 }}>Icon settings</span>
                            <Checkbox style={{ flex: '1', alignItems: 'center' }}>
                                <CheckboxField type={"checkbox"} />
                                <label style={{ fontSize: "14px" }}>Show coloured lines</label>
                            </Checkbox>
                        </div>
                        <IconsGrid>
                            {icons.map(icon => (
                                <IconItem key={icon.name} onClick={() => downloadIcon(icon)}>
                                    {icon.data.startsWith("<svg") && <img src={require(`../assets/images/doticons/${icon.name}.svg`)} />}
                                    <span>{icon.name}</span>
                                </IconItem>
                            ))}
                        </IconsGrid>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}