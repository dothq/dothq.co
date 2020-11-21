import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { HelpHeroSheet, HelpHeroSheetStyle, HelpHero, HelpTitle, HelpIcon, HelpContainer, HelpAlert, HelpSearch, SearchInput, HelpExtras, HelpSubtitle, FlexGrid, ExtraItem, ExtraItemText } from "../../components/style";
import { createGlobalStyle } from "styled-components";

import FeatherIcon from 'feather-icons-react'
import { Link } from "gatsby";
import { HelpDeskHero } from "../../components/HelpHero";

const HHSS = createGlobalStyle`${HelpHeroSheetStyle}`;

const BrowserHelpPage = ({ location }) => {
    return (
        <Layout noEnding>
            <SEO title="Help Desk" />
            <HelpDeskHero title={"How can we help you with Dot Browser?"} icon={"https://cdn.dothq.co/assets/dot.svg"} />

            <HelpHeroSheet>
                <HHSS />
            </HelpHeroSheet>
        </Layout>
    )
}

export default BrowserHelpPage
