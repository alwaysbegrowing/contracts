import React, { useEffect, useState } from "react";
import { Card, Button, Space, Select } from "antd";
import styles from "../styles/ContractsPanel.module.css";
import { usePublicClient } from "wagmi";
import { normalize } from "viem/ens";
import { useRecoilState } from "recoil";
import { contractState, searchTermState } from "./Atoms";
import { chainIds } from "./chainIds";

const { Option } = Select;

const SplitContract = ({ chainKey }: { chainKey: string }) => {
  const { getEnsText } = usePublicClient();
  const [contracts, setContracts] = useState<string[]>();
  const [searchTerm] = useRecoilState(searchTermState);
  useEffect(() => {
    const fetchEnsText = async () => {
      if (!searchTerm) return;
      try {
        const contractAddress = await getEnsText({
          name: normalize(searchTerm),
          key: chainKey,
        });
        if (!contractAddress) return;
        setContracts(contractAddress?.split(", "));
      } catch (e) {
        console.log(e);
      }
    };
    fetchEnsText();
  }, [getEnsText, searchTerm, chainKey]);

  if (!contracts) return null;
  return (
    <Space direction="vertical">
      {contracts?.map((contract) => (
        <Contract key={contract} address={contract} />
      ))}
    </Space>
  );
};

const Contract = ({ address }: { address: string }) => {
  const [, setContract] = useRecoilState(contractState);

  return <Button onClick={() => setContract(address)}>{address}</Button>;
};

const ContractsPanel = ({ chains }: { chains: any }) => {
  const [selectedChain, setSelectedChain] = useState<string>(chains?.[0]);

  const handleChainChange = (value: string) => {
    setSelectedChain(value);
  };

  return (
    <div id="contracts-panel" className={styles.contractsPanel}>
      <Space direction="vertical">
        <Select
          defaultValue={selectedChain}
          onChange={handleChainChange}
          style={{ width: "100%" }}
        >
          {chains?.map((chain: string) => (
            <Option key={chain} value={chain}>
              <Space>
                <img
                  width={16}
                  alt="chain"
                  src={`https://icons.llamao.fi/icons/chains/rsz_${chainIds[chain]}.jpg`}
                />
                {chainIds[chain]}
              </Space>
            </Option>
          ))}
        </Select>
        <Card title={chainIds[selectedChain]}>
          <SplitContract chainKey={selectedChain} />
        </Card>
      </Space>
    </div>
  );
};

export default ContractsPanel;
