import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"
import { Heading, PolicySectionTitle, Avatar } from "../components/style"

import ReactMarkdown from 'react-markdown';

import '../components/legal.css'
import { Line } from "../components/Footer/style"

export default ({ pageContext: { legal } }) => (
  <Layout noHero>
      <SEO title={legal.title} />
      <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="hero-container">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginLeft: '38px' }}>
                      <h1 style={{ fontSize: '32px', marginBottom: '0' }}>{legal.title}</h1>
                      <Heading style={{ textTransform: 'uppercase', fontSize: '14px', color: 'gray', margin: 0 }}>Last updated</Heading>
                      <p className={"legal-content"} style={{ fontSize: '14px', margin: 0, textAlign: 'left' }}>{legal.lastUpdated} <Link to={legal.historyLink}>View history</Link></p>
                  </div>
              </div>
          </div>
      </div>
      <div className={"legal-content"}>
          <main style={{ fontSize: '15px', margin: '0 auto', maxWidth: '1000px', marginBottom: '90px' }}>
            <ReactMarkdown source={legal.content} escapeHtml={false} />

            <Line />

            <div style={{ margin: '24px 0' }}>
              <Heading style={{ textTransform: 'uppercase', fontSize: '14px', color: 'gray', margin: 0 }}>Last edited by</Heading>
              
              <div style={{ display: 'flex' }}>
                <Avatar src={legal.author.avatar} width={32} />
                <p className={"legal-content"} style={{ fontSize: '14px', margin: 0, textAlign: 'left', paddingLeft: '12px', display: 'flex', fontWeight: 500, alignItems: 'center' }}>{legal.author.name}</p>
                <p className={"legal-content"} style={{ fontSize: '14px', margin: 0, textAlign: 'left', paddingLeft: '12px', display: 'flex', fontWeight: 400, alignItems: 'center', opacity: 0.5 }}>{legal.lastUpdated}</p>
              </div>
            </div>
          </main>
      </div>
  </Layout>
)