import React from "react";
import { Button, Card, Typography } from "antd";
import { useRecoilState } from "recoil";
import { contractState } from "./Atoms";

const { Text } = Typography;

const ContractInteractionPanel = () => {
  const [contract] = useRecoilState(contractState);
  if (contract?.name === "") return null;
  if (!["100", "137", "10", "42161"].includes(contract?.chain)) return null;
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
        href={`https://abi.ninja/${contract.name}/${
          chainMapping[contract.chain]
        }`}
      >
        <Text>Interact with this contract on ABI.Ninja</Text>
      </Button>
    </Card>
  );
};

export default ContractInteractionPanel;
