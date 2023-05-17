import React from 'react';
import { Layout } from 'antd';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'

const { Header } = Layout;

const AppHeader = () => {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <Header className={styles.headerContainer}>
      <Image height={64} width={64} src="/logo.png" alt="dAppling Tools" className={styles.logo} />
      <h1 className={styles.title}>dAppling Tools</h1>
      <div className={styles.tagline}>
        <p>Explore and interact with ENS domains and contracts</p>
      </div>
      <div>
        {/* {isConnected ? (
          <div>
            Connected to {address}
            <div onClick={() => disconnect()}>Disconnect</div>
          </div>) : (
          <div onClick={() => connect()}>Connect Wallet</div>
        )} */}
      </div>
    </Header>
  );
};

export default AppHeader;