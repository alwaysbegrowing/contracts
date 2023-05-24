import { Col, Row, Space, Typography, Collapse } from "antd";
import ENSTweet from "./ENSTweet";

const { Panel } = Collapse;
const { Title, Paragraph, Text } = Typography;
export default function Intro() {
  return (
    <Row justify={"center"}>
      <Col lg={10}>
        <Title level={3}>ENS Contract Check</Title>
        <Paragraph>
          This is a proof-of-concept tool that allows a lookup of <Text italic>verified</Text>{" "}
          contracts on ENS by checking <Text strong>text</Text> records for
          smart contract addresses. We think this is cool because it can help
          users confirm the smart contract addresses they interact with are
          attested by the protocol iteslf.
        </Paragraph>
        <Paragraph>
          This came about because a{" "}
          <a href="https://gov.uniswap.org/t/rfc-post-bsl-cross-chain-deployment-process-new-uniswap-eth-subdomain/20878">
            Uniswap governance proposal
          </a>{" "}
          aimed to identify <Text italic>official</Text> deployments of the
          protocol across chains.
        </Paragraph>
        <ENSTweet />
        <Paragraph>
          Because there is no standard for this yet, this tool assumes the
          format that Uniswap uses:
        </Paragraph>
        <pre>
          {`
            key:   chain ID
            value: comma separated list of contracts
            `}
        </pre>
        <Paragraph italic>
          Though, there should probably be a standard for this. If you have a
          different format and want to have your contracts show up here or want
          to collaborate on a standard shoot us a DM{" "}
          <a href="https://twitter.com/dApplingNetwork">@dApplingNetwork</a> on
          Twitter.
        </Paragraph>
        <Title level={3}>
          Anyway, here it is. We have already entered in the Uniswap ENS name
          for you 🤗
        </Title>
        <Collapse>
          <Panel key="huh" header="I don't believe you...">
            <Space direction="vertical">
              <Text>
                Good on ya. Find the subdomain yourself by going to the ENS app
                and searching for Uniswap.eth (their domain).
              </Text>
              <Text>
                Go visit <Text strong>https://app.ens.domains/ </Text>
                and come back with their deployments subdomain. Hint: it is
                called v3deployments. You&apos;ll know if you found the correct
                address if it has almost two billion in UNI token.
              </Text>
              <Text>
                I also have this very convenient{" "}
                <a href="https://app.ens.domains/">link</a> to the ENS app, if
                you dare...
              </Text>
            </Space>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
}
