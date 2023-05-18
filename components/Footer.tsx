import React from 'react';
import { Layout } from 'antd';
import styles from '../styles/Footer.module.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#F7F9FF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bottom: 0,
        width: "100%",
      }}
    >
      <span>
        Hosted on <a href="https://dappling.network">dAppling</a>
      </span>
    </Footer>
  );
};

export default AppFooter;