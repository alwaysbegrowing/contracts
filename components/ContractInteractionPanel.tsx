import React, { useContext } from "react";
import { Button, Card, Typography } from "antd";

import { GlobalContext } from "../pages/_app";

const { Text } = Typography;

const ContractInteractionPanel = () => {
  const { contractState } = useContext(GlobalContext);
  if (contractState?.name === "") return null;
  if (!["100", "137", "10", "42161"].includes(contractState?.chain))
    return null;
  const chainMapping: { [key: string]: string } = {
    "100": "gnosisChain",
    "137": "polygon",
    "10": "optimism",
    "42161": "arbitrum",
  };
  return (
    <Card
      title="Contract Interaction Panel"
      className="contract-interaction-panel"
    >
      <Button
        type="ghost"
        href={`https://abi.ninja/${contractState.name}/${
          chainMapping[contractState.chain]
        }`}
      >
        <Text>Interact with this contract on ABI.Ninja</Text>
      </Button>
    </Card>
  );
};

export default ContractInteractionPanel;
