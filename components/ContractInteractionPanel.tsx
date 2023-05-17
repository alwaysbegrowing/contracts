import React, { useState } from "react";
import { Button, Input, Form, Card, Typography } from "antd";
import { useRecoilState } from "recoil";
import { contractState } from "./Atoms";

const { Text } = Typography;

const ContractInteractionPanel = () => {
  const [contract] = useRecoilState(contractState);
  if(!contract) return null;
  return (
    <Card
      title="Contract Interaction Panel"
      className="contract-interaction-panel"
    >
      <Button type="ghost" href={`https://abi.ninja/${contract}/mainnet`}>
        <Text>Interact with this contract on ABI.Ninja</Text>
      </Button>
    </Card>
  );
};

export default ContractInteractionPanel;
