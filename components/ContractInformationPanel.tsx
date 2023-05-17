import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useRecoilState } from "recoil";
import { contractState } from "./Atoms";

type ContractInformationPanelProps = {
  contract: {
    address?: string;
    ABI?: string;
    network?: string;
    ownershipHistory?: string[];
    verificationStatus?: boolean;
  };
};
const ContractInformationPanel = () => {
  const [contract] = useRecoilState(contractState);
  const [contractTransactionCount, setContractTransactionCount] = useState();
  useEffect(() => {
    if (!contract) return;
    const fetchContract = async () => {
      const response = await fetch("/api/ethereum", {
        method: "POST",
        body: JSON.stringify({
          method: "eth_getTransactionCount",
          params: [contract, "latest"],
        }),
      });
      const json = await response.json();
      setContractTransactionCount(json?.result);
    };
    fetchContract();
  }, [contract]);
  if (!contract) return null;
  return (
    <Card title="Contract Information" id="contract-information-panel">
      <p>
        <strong>Contract Address:</strong> {contract}
      </p>
      {contractTransactionCount && (
        <p>
          <strong>{parseInt(contractTransactionCount).toLocaleString()}</strong>{" "}
          transactions sent from this contract
        </p>
      )}
      <p>
        <strong>Mainnet</strong>
      </p>
    </Card>
  );
};

export default ContractInformationPanel;
