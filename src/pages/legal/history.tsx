import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';		   

import '../../components/legal.css'

const PHPage = () => {
  const themeContext = React.useContext(ThemeManagerContext)

  return (
	<Layout>
	  <SEO title="Policy History" />
      <h1 style={{ fontSize: '40px' }}>Policy History</h1>
      <div className={"legal-content"}>
        <table style={{ color: themeContext.isDark ? "white" : "" }}>
            <tr>
                <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Type</th>
                <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Version</th>
                <th style={{ borderColor: themeContext.isDark ? "#222" : "" }}>Date before revision</th>
                <th style={{ borderColor: themeContext.isDark ? "#222" : ""}}>View</th>
            </tr>
            <tr>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Privacy Policy</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Latest</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Still in use</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}><Link to={"/legal/privacy"}>View file</Link></td>
            </tr>
            <tr>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Terms</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Latest</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Still in use</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}><Link to={"/legal/terms"}>View file</Link></td>
            </tr>
            <tr>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Cookie Policy</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Latest</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}>Still in use</td>
                <td style={{ borderColor: themeContext.isDark ? "#222" : ""}}><Link to={"/legal/cookies"}>View file</Link></td>
            </tr>
        </table>
      </div>
    </Layout>
)}

export default PHPage;