import React, { useEffect, useState } from "react";
import ContractsPanel, { SplitContract } from "../components/ContractsPanel";
import ContractInformationPanel from "../components/ContractInformationPanel";
import ContractInteractionPanel from "../components/ContractInteractionPanel";
import AnalyticsAndInsightsPanel from "../components/AnalyticsAndInsightsPanel";
import { namehash } from "viem";
import { useRecoilState } from "recoil";
import { searchTermState } from "../components/Atoms";
import { Alert, Col, Collapse, Row, Space, Typography } from "antd";
import { chainIds } from "./chainIds";
import ErinTweet from "./ErinTweet";
import { usePublicClient } from "wagmi";

const { Panel } = Collapse;
const { Text, Paragraph } = Typography;

export default function ContractsDisplay() {
  const [texts, setTexts] = useState<string[]>();
  const [error, setError] = useState<string>();
  const [resolver, setResolver] = useState<string>();
  const [searchValue] = useRecoilState(searchTermState);
  const [nameHash, setNameHash] = useState<string>();
  const { getEnsResolver } = usePublicClient();

  useEffect(() => {
    if (!searchValue) return;
    const fetchEnsText = async () => {
      const address = namehash(searchValue);
      setResolver(await getEnsResolver({ name: searchValue }));
      setNameHash(address);
      const response = await fetch(`/api/ens`, {
        method: "POST",
        body: JSON.stringify({ address }),
      });
      if (response.ok) {
        const texts = (await response.json())?.texts;
        if (texts) {
          setTexts(texts);
          setError(undefined);
        }
      } else {
        setTexts(undefined);
        setError("No records found for this ENS name.");
      }
    };
    fetchEnsText();
  }, [searchValue, getEnsResolver]);
  return (
    <div style={{ minHeight: 500 }}>
      {texts && (
        <Row gutter={[16, 16]} align="bottom"> 
          <Col xs={12} md={24} lg={24} xl={7}>
            <ContractInformationPanel />
          </Col>
          <Col xs={24} md={24} lg={24} xl={10}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Collapse>
                <Panel key="wah" header="First, get the address to lookup">
                  <Space direction="vertical">
                    <Text>
                      This takes the ENS domain {searchValue} and converts it to
                      an address.
                    </Text>
                    <Text code>{nameHash}</Text>
                  </Space>
                </Panel>
                <Panel key="wah2" header="Next, get the records">
                  <Space direction="vertical">
                    <Text>
                      Find ENS&apos;s{" "}
                      <a href="https://api.thegraph.com/subgraphs/name/ensdomains/ens/graphql">
                        Subgraph
                      </a>{" "}
                      (searching ENS on thegraph.com)
                    </Text>
                    <Text>
                      This takes the address and looks up the records.{" "}
                      <a href="https://api.thegraph.com/subgraphs/name/ensdomains/ens/graphql?query=query+getRecords%28%24id%3A+String%21%29+%7B%0A++domain%28id%3A+%24id%29+%7B%0A++++resolver+%7B%0A++++++texts%0A++++++%7D%0A++++%7D%0A%7D">
                        Here&apos;s a link with the query filled out.
                      </a>
                    </Text>
                    <Paragraph>
                      <pre>
                        {`query getRecords($id: String!) {
  domain(id: $id) {
    resolver {
      texts
    }
  }
}`}
                      </pre>
                    </Paragraph>
                    <Alert description="Note, you will need to input this for query variables at the bottom left" />
                    <Paragraph>
                      <pre>
                        {`{
  "id": "${namehash(searchValue)}"
}`}
                      </pre>
                    </Paragraph>
                    <Text>The result is the text record keys</Text>
                    <Text code>{JSON.stringify(texts, null, 2)}</Text>
                    <Text>Which Uniswap made to be chain IDs.</Text>
                    <Space>
                      {texts?.map((text: string) => (
                        <Space key={text}>
                          <img
                            width={16}
                            alt="chain"
                            src={`https://icons.llamao.fi/icons/chains/rsz_${chainIds[text]}.jpg`}
                          />
                          {chainIds[text].slice(0, 4)}
                        </Space>
                      ))}
                    </Space>
                  </Space>
                </Panel>
                <Panel key="wah3" header="Finally, resolve all records.">
                  <Space direction="vertical">
                    <Text>
                      Each record contains two contracts separated by a comma.
                      The bridge sender, and factory.
                    </Text>
                    <ErinTweet />
                    <Text>
                      For the first record, {texts[0]}, we can look up the text
                      with the ENS resolver contract for Uniswap{" "}
                      <Text code>{resolver}</Text>.{" "}
                      <a href={`https://etherscan.io/address/${resolver}`}>
                        View on Etherscan.
                      </a>
                    </Text>
                    <Paragraph>
                      <pre>
                        {`Calldata
                        0xa1cbcbaf0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001b0d76336465706c6f796d656e747307756e697377617003657468000000000000`}
                      </pre>
                    </Paragraph>
                    Which gives us the two addresses. 
                    <SplitContract chainKey={texts[0]} />
                    And finally, the result:
                  </Space>
                </Panel>
              </Collapse>
              <ContractsPanel chains={texts} />
            </Space>
          </Col>
          <Col xs={12} md={24} lg={24} xl={7}>
            <Space direction="vertical">
              <ContractInteractionPanel />
              <AnalyticsAndInsightsPanel />
            </Space>
          </Col>
        </Row>
      )}
      {error && (
        <Row justify={"center"}>
          <Col>
            <Alert
              message="Error"
              description={
                <Space direction="vertical">
                  {error}
                  <a href={`https://app.ens.domains/${searchValue}`}>
                    View {searchValue} on ENS
                  </a>
                </Space>
              }
              type="error"
              showIcon
            />
          </Col>
        </Row>
      )}
    </div>
  );
}
