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
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { useGlobalState } from '../context'				   
import Skeleton from "react-loading-skeleton";

const BuildsPage = () => {
  const themeContext = React.useContext(ThemeManagerContext)

  const [user] = useGlobalState('user');
  const [builds] = useGlobalState('builds');

  const download = (id) => {
	  const build = builds.find(build => build.id == id);

	  if(build.downloadUrl == "") return
	  window.location.href = `${build.downloadUrl}.${getOS() == "Windows" ? "exe" : getOS() == "macOS" ? "dmg" : "deb"}`
  }

  return (
	<Layout>
	  <SEO title="Builds" />
	  <Emoji text={"📦"} options={generateEmojiConfig({ className: 'emoji' })} />
      <h1 style={{ fontSize: '80px' }}>Builds</h1>
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
		{builds !== undefined && builds.sort((a, b) => new Date(b.unlocksAt) - new Date(a.unlocksAt)).map(build => (
			<tr key={build.id}>
				<td>{build.productName == "Dot Browser" ? ( <img style={{ verticalAlign: 'middle', lineHeight: '48px', margin: '0 auto' }} src={"https://cdn.dothq.co/assets/dotbrowser-logo.png"} width="48" /> ) : <img style={{ verticalAlign: 'middle', lineHeight: '48px', margin: '0 auto', borderRadius: '100%' }} src={"https://cdn.dothq.co/assets/defaultAvatar.png"} width="48" />}</td>
				<td>{build.version}</td>
				<td>{build.productName}</td>
				<td>{build.unlocksAt !== 0 ? <Time date={build.unlocksAt} /> : 'Not confirmed'}</td>
				<td>{build.supportedOs.join(", ")}</td>
		<td><HeroButton onClick={() => download(build.id)} disabled={getOS() == "iOS" || getOS() == "Android"} shade={"black"} style={{ width: 'max-content', height: '42px', opacity: build.downloadUrl !== "" ? 1 : "0.5", userSelect: build.downloadUrl !== "" ? "all" : "none", pointerEvents: build.downloadUrl !== "" ? "all": "none" }}><FeatherIcon icon="download" size={18} style={{ marginRight: '8px' }} /> Download for {getOS()}</HeroButton></td>
			</tr>
		))}
		{builds == undefined && Array.from(Array(Math.floor(Math.random() * 5))).map(i => (
			<tr key={i}>
				<td ><Skeleton width={48} height={48} circle={true} /></td>
				<td ><Skeleton /></td>
				<td ><Skeleton /></td>
				<td ><Skeleton /></td>
				<td ><Skeleton /></td>
				<td><Skeleton /></td>
			</tr>
		))}
	  </table>

	  {user && user.isEmployee && <Link to={"/admin/builds"}>
        <TextButton isBasic style={{ marginBottom: '1.5rem' }}>Manage builds</TextButton>
      </Link>}
    </Layout>
)}

export default BuildsPage;