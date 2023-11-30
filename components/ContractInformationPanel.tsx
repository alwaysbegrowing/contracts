import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useRecoilState } from "recoil";
import { contractState } from "./Atoms";
import { chainIds } from "./chainIds";
import { explorers } from "./explorers";

const ContractInformationPanel = () => {
  const [contract] = useRecoilState(contractState);
  const [contractTransactionCount, setContractTransactionCount] = useState();
  useEffect(() => {
    if (contract?.name === "") return;
    const fetchContract = async () => {
      const response = await fetch("/api/ethereum", {
        method: "POST",
        body: JSON.stringify({
          method: "eth_getTransactionCount",
          params: [contract, "latest"],
        }),
      });
      if(!response.ok) return console.log(response);
      const json = await response.json();
      setContractTransactionCount(json?.result);
    };
    fetchContract();
  }, [contract]);
  if (contract?.name === "") return null;
  const explorer = explorers.find(
    ({ chainId }) => chainId === parseInt(contract.chain)
  );
  return (
    <Card title="Contract Information" id="contract-information-panel">
      <p>
        <strong>Contract Address:</strong> {contract?.name}
      </p>
      {contractTransactionCount && (
        <p>
          <strong>{parseInt(contractTransactionCount).toLocaleString()}</strong>{" "}
          transactions sent from this contract
        </p>
      )}
      <p>
        <strong>{chainIds[contract.chain]}</strong>
      </p>

      <p>
        <strong>
          <a href={`https://${explorer?.baseUrl}/address/${contract?.name}`}>
            View on {explorer?.explorerName}
          </a>
        </strong>
      </p>
    </Card>
  );
};

export default ContractInformationPanel;
