import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import type { NextPage } from "next";
import Head from "next/head";
const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://app-framework.s3-ap-southeast-1.amazonaws.com/widget-css/61f126c860e11e0015600682.css"
        />
        <script src="https://cdn.jsdelivr.net/gh/RFL-NFTPlatform/widget-maker/js/index.js" />
      </Head>
      <Container>
        <div
          id="61f126c860e11e0015600682"
          data-address="0xe84dd712c13bafa5f2c98ee24d93a58fd84352d5"
          data-title="Ducati"
          data-title-disconnected="NFT SALE123"
          data-title-finished="NFT SALE"
          data-button="MINT"
          data-button-disconnected="connect wallet"
          data-button-finished="MARKETPLACE"
          data-image="https://app-framework.s3-ap-southeast-1.amazonaws.com/widget-featured-image/Test-KTM-1.jpg"
          data-image-disconnected="https://app-framework.s3-ap-southeast-1.amazonaws.com/widget-featured-image/Test-KTM-1.jpg"
          data-image-finished="blob:https://bluechip-maker-admin.vercel.app/28460ced-63db-4d6e-89d5-10ed31c75d57"
          data-text-finished="Sale finished. Thank you for your interest."
          data-hyperlink=""
          data-font-required="TrasandinaW03-BoldItalic,Roboto,Roboto Condensed"
          className="rfox-nft-widget"
        ></div>
      </Container>
    </div>
  );
};

export default Index;
