import React, { useEffect, useState } from "react";
import { List, Card, Button, Space } from "antd";
import styles from "../styles/ContractsPanel.module.css";
import { usePublicClient } from "wagmi";
import { normalize } from "viem/ens";
import { useRecoilState } from "recoil";
import { contractState, searchTermState } from "./Atoms";

const SplitContract = ({ textKey }: { textKey: string }) => {
  const { getEnsText } = usePublicClient();
  const [contracts, setContracts] = useState<string[]>();
  const [searchTerm] = useRecoilState(searchTermState);
  useEffect(() => {
    const fetchEnsText = async () => {
      const contractAddress = await getEnsText({
        name: normalize(searchTerm),
        key: textKey,
      });
      if (!contractAddress) return;
      setContracts(contractAddress?.split(", "));
    };
    fetchEnsText();
  }, [getEnsText, searchTerm, textKey]);

  if (!contracts) return null;
  return (
    <List.Item>
      <Card title={textKey}>
        <Space direction="vertical">
          {contracts?.map((contract) => (
            <Contract key={contract} address={contract} />
          ))}
        </Space>
      </Card>
    </List.Item>
  );
};

const Contract = ({ address }: { address: string }) => {
  const [, setContract] = useRecoilState(contractState);

  return <Button onClick={() => setContract(address)}>{address}</Button>;
};

const ContractsPanel = ({ texts }: { texts: any }) => {
  return (
    <div id="contracts-panel" className={styles.contractsPanel}>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={texts}
        renderItem={(text: string) => <SplitContract textKey={text} />}
      />
    </div>
  );
};

export default ContractsPanel;
