import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { createPublicClient, http } from "viem";
import CustomLayout from "../components/Layout";
import React from "react";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import Meta from "../components/Meta";
import { Analytics } from "dappling-analytics/react";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <RecoilRoot>
      <WagmiConfig config={config}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>dAppling Tools</title>
        </Head>
        <Meta />
        <Analytics />
        <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout>
      </WagmiConfig>
    </RecoilRoot>
  );
}

export default MyApp;
