import React, { useState } from "react";
import { Select, Button, Space } from "antd";

const { Option } = Select;

const SettingsPanel = () => {
  const [network, setNetwork] = useState("mainnet");

  const handleNetworkChange = (value: any) => {
    setNetwork(value);
    switchNetwork(value);
  };

  const switchNetwork = (network: any) => {
    // Implement logic to switch between networks
  };

  const manageCustomResolvers = () => {
    // Implement logic to manage custom ENS resolvers
  };

  const configurePreferences = () => {
    // Implement logic to configure user preferences
  };

  return (
    <div id="settings-panel">
      <Space direction="vertical">
        <Select value={network} onChange={handleNetworkChange}>
          <Option value="mainnet">Mainnet</Option>
          <Option value="ropsten">Ropsten</Option>
          <Option value="rinkeby">Rinkeby</Option>
          <Option value="goerli">Goerli</Option>
          <Option value="kovan">Kovan</Option>
          <Option value="optimism">Optimism</Option>
          <Option value="arbitrum">Arbitrum</Option>
        </Select>
        <Button onClick={manageCustomResolvers}>Manage Custom Resolvers</Button>
        <Button onClick={configurePreferences}>Configure Preferences</Button>
      </Space>
    </div>
  );
};

export default SettingsPanel;
