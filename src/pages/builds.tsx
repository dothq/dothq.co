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
	  window.location.href = `${build.downloadUrl}.${getOS().os == "Windows" ? "exe" : getOS().os == "macOS" ? "dmg" : "deb"}`
  }

  return (
	<Layout>
	  <SEO title="Builds" />
	  <Emoji text={"📦"} options={generateEmojiConfig({ className: 'emoji' })} />
      <h1 style={{ fontSize: '80px' }}>Builds</h1>
      <p>Available builds for download</p>
	  
	  <p>No builds available at this time, Dot Browser is still in development and you can expect to see some builds in the next few months.</p>

	  {user && user.isEmployee && <Link to={"/admin/builds"}>
        <TextButton isBasic style={{ marginBottom: '1.5rem' }}>Manage builds</TextButton>
      </Link>}
    </Layout>
)}

export default BuildsPage;