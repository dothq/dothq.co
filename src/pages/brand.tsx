import React from "react"
import image from '../images/icon.png';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TextButton } from "../components/Button";
import Emoji from "react-emoji-render";
import { generateEmojiConfig } from "../tools/emoji";
import { getOS } from "../helpers/os";
import { parse } from 'search-params' 
import { isBrowser } from "../helpers/login"

const Brand = ({ location }) => {

  return (
    <Layout noEnding>
      <SEO title="Download" />
      <Emoji text={"😎"} options={generateEmojiConfig({ className: 'emoji' })} />
      <h1 style={{ fontSize: '80px' }}>Brand</h1>
      <p>
         Dot HQ is a small company creating browsers and other awesome software helping people being productive and accessing the internet with no effort.
      </p>
      <br />
      <br />
      <div id="kit">
      <SEO title="Download" />
      <Emoji text={"✨"} options={generateEmojiConfig({ className: 'emoji' })} />
      <h1 style={{ fontSize: '80px' }}>Press kit</h1>
      <img src={image} height="246px" width="256px" />
      </div>
    </Layout>
)}

export default Brand;