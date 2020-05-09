import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroButton, TextButton } from "../components/Button";
import { Buttons } from "../components/style";
import FeatherIcon from 'feather-icons-react'
import { Time } from "../components/BlogCard";
import { getOS } from "../helpers/os";
import { isBrowser } from "../helpers/login";
import Emoji from "react-emoji-render";
import { generateEmojiConfig } from "../tools/emoji";

//1589108400000
const launchDate = -1;
				   
const BetaPage = () => {
  const builds = [
	{
		id: 0,
		version: "3.0.0-alpha",
		product: "Dot Browser",
		releasesAt: 1589108400000,
		released: ((1589108400000 - new Date().getTime()) / 1000) < 1,
		download: "https://dothq.co/api/api.beta?folder=3.0.0-alpha&file=Install%20Dot%20Browser-0.0.1-alpha.exe",
		supports: "Windows, macOS, Linux (tbc)"
	},
	{
		id: 1,
		version: "3.0.1-alpha",
		product: "Dot Browser",
		releasesAt: 0,
		released: false,
		download: "",
		supports: "Windows, macOS, Linux"
	}
  ]

  const download = (id) => {
	  const build = builds.find(build => build.id == id);

	  fetch(build.download)
		  .then(res => res.json())
		  .then(res => {
			  if(res.ok == true) {
				const url = decodeURIComponent(Buffer.from(res.download, "base64").toString('utf-8'))
				isBrowser() ? window.location.href = url : ''
			  }
		  })
  }

  return (
	<Layout>
	  <SEO title="Beta" />
	  <Emoji text={"📦"} options={generateEmojiConfig({ className: 'emoji' })} />
      <h1 style={{ fontSize: '80px' }}>Beta Builds</h1>
      <p>Available builds for download</p>
      <table>
		<tr>
			<th></th>
			<th>Version</th>
			<th>Product</th>
			<th>Build release</th>
			<th>Supports</th>
			<th>Download</th>
		</tr>
		{builds.map(build => (
			<tr key={build.id}>
				<td>{build.product == "Dot Browser" ? ( <img style={{ verticalAlign: 'middle', lineHeight: '48px', margin: '0 auto' }} src={"https://i.imgur.com/MWQI80g.png"} width="48" /> ) : ''}</td>
				<td>{build.version}</td>
				<td>{build.product}</td>
				<td>{build.releasesAt !== 0 ? <Time date={build.releasesAt} /> : 'Not confirmed'}</td>
				<td>{build.supports}</td>
		<td>{getOS() !== "Linux" ? <HeroButton onClick={() => download(build.id)} shade={"blue"} style={{ width: 'max-content', height: '42px', opacity: build.released ? 1 : "0.5", userSelect: build.released ? "all" : "none", pointerEvents: build.released ? "all": "none" }}><FeatherIcon icon="download" size={18} style={{ marginRight: '8px' }} /> Download for {getOS()}</HeroButton> : 'There aren\'t currently any builds for Linux'}</td>
			</tr>
		))}
	  </table>
    </Layout>
)}

export default BetaPage;