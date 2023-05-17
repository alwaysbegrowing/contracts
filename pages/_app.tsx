import "../styles/globals.css";
import { Layout } from "antd";
import Footer from "../components/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { createPublicClient, http } from "viem";
import Header from "../components/Header";
import React from "react";
import { RecoilRoot } from "recoil";

const { Content } = Layout;
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
        <Layout>
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </Layout>
      </WagmiConfig>
    </RecoilRoot>
  );
}

export default MyApp;
