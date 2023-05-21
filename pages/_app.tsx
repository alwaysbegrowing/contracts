import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { createPublicClient, http } from "viem";
import CustomLayout from "../components/Layout";
import React from "react";
import Head from "next/head";
import Meta from "../components/Meta";
import { createContext, useContext } from "react";

interface GlobalContextProps {
  contractState: any;
  setContractState: any;
  searchTerm: any;
  setSearchTermState: any;
}

export const GlobalContext = createContext({} as GlobalContextProps);

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});
function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const [contractState, setContractState] = React.useState(null);
  const [searchTerm, setSearchTermState] = React.useState(null);

  return (
    <GlobalContext.Provider
      value={{
        contractState,
        setContractState,
        searchTerm,
        setSearchTermState,
      }}
    >
      <WagmiConfig config={config}>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>dAppling Tools</title>
        </Head>
        <Meta />

        <CustomLayout>
          <Component {...pageProps} />
        </CustomLayout>
      </WagmiConfig>
    </GlobalContext.Provider>
  );
}

export default MyApp;
