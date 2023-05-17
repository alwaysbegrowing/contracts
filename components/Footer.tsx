import React from 'react';
import { Layout } from 'antd';
import styles from '../styles/Footer.module.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.links}>
        <a href="/documentation" target="_blank" rel="noopener noreferrer">
          Documentation
        </a>
        <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
      <div className={styles.social}>
        <a href="https://twitter.com/dappling" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/dappling" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://discord.gg/dappling" target="_blank" rel="noopener noreferrer">
          Discord
        </a>
      </div>
    </Footer>
  );
};

export default AppFooter;