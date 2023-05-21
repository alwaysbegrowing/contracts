import React, { useContext } from "react";
import { Card, Typography } from "antd";
import styles from "../styles/AnalyticsAndInsightsPanel.module.css";
import { GlobalContext } from "../pages/_app";

const { Title } = Typography;

const AnalyticsAndInsightsPanel = () => {
  const { contractState } = useContext(GlobalContext);
  if (!contractState.name) return null;
  const transactionVolume = "-";
  const tokenHoldings = "-";

  return (
    <Card className={styles.analyticsInsightsPanel}>
      <Title level={3}>Analytics & Insights</Title>
      <div className={styles.analyticsItem}>
        <span>Transaction Volume:</span>
        <span>{transactionVolume}</span>
      </div>
      <div className={styles.analyticsItem}>
        <span>Token Holdings:</span>
        <span>{tokenHoldings}</span>
      </div>
    </Card>
  );
};

export default AnalyticsAndInsightsPanel;
