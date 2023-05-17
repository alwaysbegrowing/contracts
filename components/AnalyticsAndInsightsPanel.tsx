import React from "react";
import { Card, Typography } from "antd";
import styles from "../styles/AnalyticsAndInsightsPanel.module.css";
import { contractState } from "./Atoms";
import { useRecoilState } from "recoil";

const { Title } = Typography;

const AnalyticsAndInsightsPanel = () => {
  const [contract] = useRecoilState(contractState);
  if (!contract) return null;
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
      {/* Add more analytics and insights data as needed */}
    </Card>
  );
};

export default AnalyticsAndInsightsPanel;
