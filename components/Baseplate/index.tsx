import Head from "next/head";
import { TitleBar, MobileTitleBar, DarkTitleBar } from "../TitleBar/TitleBar";
import { StyledApp } from "../../pages/styles";
import { useState } from "react";
import React from "react";

class Baseplate extends React.Component {
  public title: string = "The privacy-centric browser";
  public route: string = "";
  public props = {
    darkMode: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.route = window.location.pathname.split("/")[1];

    if (this.route == "download") {
      this.title = "Download";
    }
  }

  render() {
    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="static/icon.png" />
          <title>Dot Browser — {this.title}</title>
          <meta
            name="title"
            content="Dot Browser — The privacy-centric browser"
          ></meta>
          <meta
            name="description"
            content="Dot is a privacy-centric browser with an intuitive interface and a robust ad-blocker with a slick interface, which is easy on the eyes."
          ></meta>
          <meta property="og:site_name" content="Dot Browser"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://metatags.io/"></meta>
          <meta
            property="og:title"
            content="Dot Browser — The privacy-centric browser"
          ></meta>
          <meta
            property="og:description"
            content="Dot is a privacy-centric browser with an intuitive interface and a robust ad-blocker with a slick interface, which is easy on the eyes."
          ></meta>
          <meta
            property="og:image"
            content="https://dotbrowser.me/static/dot-meta.png"
          ></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content="https://metatags.io/"></meta>
          <meta
            property="twitter:title"
            content="Dot Browser — The privacy-centric browser"
          ></meta>
          <meta
            property="twitter:description"
            content="Dot is a privacy-centric browser with an intuitive interface and a robust ad-blocker with a slick interface, which is easy on the eyes."
          ></meta>
          <meta
            property="twitter:image"
            content="https://dotbrowser.me/static/dot-meta.png"
          ></meta>
          <meta name="theme-color" content="#171717"></meta>
        </Head>
        {this.props.darkMode == false ? <TitleBar /> : <DarkTitleBar />}
        <MobileTitleBar />
      </div>
    );
  }
}

export default Baseplate;
