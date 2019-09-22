import Head from "next/head";
import { TitleBar, MobileTitleBar } from "../TitleBar/TitleBar";
import { StyledApp } from "../../pages/styles";
import { useState } from "react";

export const Baseplate = () => {
  return (
    <div>
      <Head>
        <title>Dot Browser</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="static/icon.png" />
      </Head>
      <TitleBar />
      <MobileTitleBar />
    </div>
  );
};
