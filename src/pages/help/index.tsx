import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { HelpHeroSheet, HelpHeroSheetStyle, HelpHero, HelpTitle, HelpIcon, HelpContainer, HelpAlert, HelpSearch, SearchInput, HelpExtras, HelpSubtitle, FlexGrid, ExtraItem, ExtraItemText } from "../../components/style";
import { createGlobalStyle } from "styled-components";

import FeatherIcon from 'feather-icons-react'
import { Link } from "gatsby";
import { HelpDeskHero } from "../../components/HelpHero";

const HHSS = createGlobalStyle`${HelpHeroSheetStyle}`;

const HelpPage = ({ location }) => {
    return (
        <Layout noEnding>
            <SEO title="Help Desk" />
            <HelpDeskHero title={"How can we help you?"} icon={"https://cdn.dothq.co/assets/dot.svg"} />

            <HelpExtras>
                <HelpSubtitle style={{ marginBottom: '32px' }}>Explore our range of products</HelpSubtitle>
                <FlexGrid>
                    <Link to={"/help/browser"}>
                        <ExtraItem>
                            <HelpIcon src={"https://cdn.dothq.co/assets/dot.svg"} size={44} />
                            <ExtraItemText>Dot Browser</ExtraItemText>
                        </ExtraItem>
                    </Link>
                    <Link to={"/help/id"}>
                        <ExtraItem>
                            <HelpIcon src={"https://cdn.dothq.co/assets/id.svg"} size={44} />
                            <ExtraItemText>Dot ID</ExtraItemText>
                        </ExtraItem>
                    </Link>
                    <Link to={"/help/dothq"}>
                        <ExtraItem>
                            <HelpIcon src={"https://cdn.dothq.co/assets/cube.svg"} size={44} />
                            <ExtraItemText>Dot HQ Site</ExtraItemText>
                        </ExtraItem>
                    </Link>
                    <Link to={"/help/search"}>
                        <ExtraItem>
                            <HelpIcon src={"https://cdn.dothq.co/assets/dsearch.svg"} size={44} />
                            <ExtraItemText>Dot Search</ExtraItemText>
                        </ExtraItem>
                    </Link>
                    <Link to={"/help/drop"}>
                        <ExtraItem>
                            <HelpIcon src={"https://cdn.dothq.co/assets/drop.svg"} size={44} />
                            <ExtraItemText>Dot Drop</ExtraItemText>
                        </ExtraItem>
                    </Link>
                </FlexGrid>
                <HelpSubtitle style={{ marginBottom: '32px' }}>Other actions and services</HelpSubtitle>
                <FlexGrid>
                    <Link to={"/help/tickets/new"}>
                        <ExtraItem style={{ padding: '14px 12px' }}>
                            <HelpIcon src={"https://cdn.dothq.co/assets/support_ticket.svg"} size={44} />
                            <ExtraItemText>Open a support ticket</ExtraItemText>
                        </ExtraItem>
                    </Link>
                    <a href={"https://invite.gg/dot"} target={"_blank"} >
                        <ExtraItem style={{ padding: '14px 12px' }}>
                            <HelpIcon src={"https://cdn.dothq.co/assets/discord_icon.svg"} size={44} />
                            <ExtraItemText>Join our Discord</ExtraItemText>
                        </ExtraItem>
                    </a>
                    <a href={"https://status.dothq.co"} target={"_blank"} >
                        <ExtraItem style={{ padding: '14px 12px' }}>
                            <HelpIcon src={"https://cdn.dothq.co/assets/status.svg"} size={44} />
                            <ExtraItemText>Check the status page</ExtraItemText>
                        </ExtraItem>
                    </a>
                    <a href={"https://twitter.com/DotBrowser"} target={"_blank"}>
                        <ExtraItem>
                            <HelpIcon src={"https://cdn.dothq.co/assets/twitter_logo.svg"} size={44} />
                            <ExtraItemText>Our Twitter</ExtraItemText>
                        </ExtraItem>
                    </a>
                </FlexGrid>
            </HelpExtras>

            <HelpHeroSheet>
                <HHSS />
            </HelpHeroSheet>
        </Layout>
    )
}

export default HelpPage
