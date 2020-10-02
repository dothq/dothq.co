import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"
import { Heading, PolicySectionTitle, Avatar } from "../components/style"

import ReactMarkdown from 'react-markdown';

import '../components/legal.css'
import { Line } from "../components/Footer/style"
import { Content } from "../components/Hero/style"

export default ({ pageContext: { legal } }) => (
  <Layout noEnding>
      <SEO title={legal.title} />
      <Content hasHero>
        <div className={"hero-container"}>
          <div className={"hero-content"}>
            <h1>{legal.title}</h1>
            <h6>Last updated</h6>
            <p>{legal.lastUpdated} <Link to={legal.historyLink}>View history</Link></p>
          </div>
        </div>
        <div className={"legal-content"}>
            <main>
              <ReactMarkdown source={legal.content} escapeHtml={false} />

              <Line />

              <div style={{ margin: '24px 0' }}>
                <Heading style={{ textTransform: 'uppercase', fontSize: '14px', color: 'gray', margin: 0 }}>Last edited by</Heading>
                
                <div style={{ display: 'flex' }}>
                  <Avatar src={legal.author.avatar} width={32} />
                  <p style={{ fontSize: '14px', margin: 0, textAlign: 'left', paddingLeft: '12px', display: 'flex', fontWeight: 500, alignItems: 'center' }}>{legal.author.name}</p>
                  <p className={"legal-content"} style={{ fontSize: '14px', margin: 0, textAlign: 'left', paddingLeft: '12px', display: 'flex', fontWeight: 400, alignItems: 'center', opacity: 0.5 }}>{legal.lastUpdated}</p>
                </div>
              </div>
            </main>
        </div>
      </Content>
  </Layout>
)