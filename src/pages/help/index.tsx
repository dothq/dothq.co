import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { HelpHeroSheet, HelpHeroSheetStyle, HelpHero, HelpTitle, HelpIcon, HelpContainer, HelpAlert, HelpSearch, SearchInput, HelpExtras, HelpSubtitle, FlexGrid, ExtraItem, ExtraItemText } from "../../components/style";
import { createGlobalStyle } from "styled-components";

import FeatherIcon from 'feather-icons-react'
import { Link } from "gatsby";

import useSWR from 'swr'

const HHSS = createGlobalStyle`${HelpHeroSheetStyle}`;

const fetcher = url => fetch(url).then(r => r.json())

const HelpPage = ({ location }) => {
    const { data, error } = useSWR('https://dothq.co/api/status/monitors', fetcher)

    const currentlyProblems = "%s is currently having problems"
    const manyProblems = "1 or more services are having problems"
    const noProblems = "Everything working smoothly"

    return (
        <Layout noEnding>
            <SEO title="Help Desk" />
            <HelpHero>
                <HelpContainer>
                    <HelpIcon src={"https://cdn.dothq.co/assets/dot.svg"} size={48} />
                    <HelpTitle style={{ margin: '15px 0' }}>How can we help you?</HelpTitle>
                    <HelpAlert href={"https://status.dothq.co"}>
                        {data !== undefined ? data.result.filter((v) => (v !== "Working")).length == 1 ? currentlyProblems.replace(/%s/, data.result.filter((v) => (v !== "Working")).service.name) : data.result.filter((v) => (v !== "Working")).length <= 2 ? manyProblems : noProblems : ''}
                    </HelpAlert>
                    <HelpSearch style={{ margin: '24px 0px 42px 0px' }}>
                        <SearchInput placeholder={"Find help and services"} />
                        <FeatherIcon icon={"search"} size={22} color={"#383838"} />
                    </HelpSearch>
                </HelpContainer>
            </HelpHero>

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
                    <ExtraItem href={"https://invite.gg/dot"} target={"_blank"} style={{ padding: '14px 12px' }}>
                        <HelpIcon src={"https://cdn.dothq.co/assets/discord_icon.svg"} size={44} />
                        <ExtraItemText>Join our Discord</ExtraItemText>
                    </ExtraItem>
                    <ExtraItem href={"https://status.dothq.co"} target={"_blank"} style={{ padding: '14px 12px' }}>
                        <HelpIcon src={"https://cdn.dothq.co/assets/status.svg"} size={44} />
                        <ExtraItemText>Check the status page</ExtraItemText>
                    </ExtraItem>
                    <ExtraItem href={"https://twitter.com/DotBrowser"} target={"_blank"}>
                        <HelpIcon src={"https://cdn.dothq.co/assets/twitter_logo.svg"} size={44} />
                        <ExtraItemText>Our Twitter</ExtraItemText>
                    </ExtraItem>
                </FlexGrid>
            </HelpExtras>

            <HelpHeroSheet>
                <HHSS />
            </HelpHeroSheet>
        </Layout>
    )
}

export default HelpPage
