import React, { useContext, useEffect, useState } from "react";
import { Card } from "antd";
import { chainIds } from "./chainIds";
import { explorers } from "./explorers";
import { GlobalContext } from "../pages/_app";

const ContractInformationPanel = () => {
  const { contractState } = useContext(GlobalContext);
  const [contractTransactionCount, setContractTransactionCount] = useState();
  useEffect(() => {
    if (contractState?.name === "") return;
    const fetchContract = async () => {
      const response = await fetch("/api/ethereum", {
        method: "POST",
        body: JSON.stringify({
          method: "eth_getTransactionCount",
          params: [contractState, "latest"],
        }),
      });
      const json = await response.json();
      setContractTransactionCount(json?.result);
    };
    fetchContract();
  }, [contractState]);
  if (contractState?.name === "") return null;
  const explorer = explorers.find(
    ({ chainId }) => chainId === parseInt(contractState.chain)
  );
  return (
    <Card title="Contract Information" id="contract-information-panel">
      <p>
        <strong>Contract Address:</strong> {contractState?.name}
      </p>
      {contractTransactionCount && (
        <p>
          <strong>{parseInt(contractTransactionCount).toLocaleString()}</strong>{" "}
          transactions sent from this contract
        </p>
      )}
      <p>
        <strong>{chainIds[contractState.chain]}</strong>
      </p>

      <p>
        <strong>
          <a href={`${explorer?.baseUrl}/address/${contractState?.name}`}>
            View on {explorer?.explorerName}
          </a>
        </strong>
      </p>
    </Card>
  );
};

export default ContractInformationPanel;
