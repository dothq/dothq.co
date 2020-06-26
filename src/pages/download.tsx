import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TextButton } from "../components/Button";
import Emoji from "react-emoji-render";
import { generateEmojiConfig } from "../tools/emoji";
import { getOS } from "../helpers/os";
import { parse } from 'search-params' 
import { isBrowser } from "../helpers/login"

const DownloadPage = ({ location }) => {
  const [os, setOS] = React.useState(getOS())

  React.useEffect(() => {
    if(location.search) {
        const search = parse(location.search);

        if(search.os) {
            setOS(search.os == "windows" ? "Windows" : search.os == "macos" ? "macOS" : search.os == "linux" ? "Linux" : "")
        }
    }
  }) 

  return (
    <Layout noEnding>
      <SEO title="Download" />
      <Emoji text={"👏"} options={generateEmojiConfig({ className: 'emoji' })} />
      <h1 style={{ fontSize: '80px' }}>Downloads</h1>
      <p>
          We don't have any stable builds of Dot Browser for {os} yet, however we have released some non-stable builds you can download over at 
          <Link to={"/builds"}>
            <TextButton isBasic style={{ fontSize: '24px', marginLeft: '6px' }}>our builds page</TextButton>
          </Link>.
      </p>
    </Layout>
)}

export default DownloadPage;