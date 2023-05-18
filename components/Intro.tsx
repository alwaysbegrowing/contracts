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
          This is a tool that allows a lookup of <Text italic>verified</Text>{" "}
          contracts on ENS. This came about because a{" "}
          <a href="https://gov.uniswap.org/t/rfc-post-bsl-cross-chain-deployment-process-new-uniswap-eth-subdomain/20878">
            Uniswap governance proposal
          </a>{" "}
          aimed to identify <Text italic>official</Text> deployments of the
          protocol across chains.
        </Paragraph>
        <ENSTweet />
        <Space direction="vertical">
          <Paragraph>
            Because of the nature of this being very opinionated, and there not
            a standard yet, if you want to have your contracts show up here, you
            will have to follow the format uniswap used:
          </Paragraph>
          <Text code>key: chainId</Text>
          <Text code>text: comma separated list of contracts</Text>
          <Paragraph>
            Though, if you want to have your contracts show up here, just
            contact us{" "}
            <a href="https://twitter.com/dApplingNetwork">@dApplingNetwork</a>{" "}
            on Twitter.
          </Paragraph>
        </Space>
        <Title level={3}>
          Anyway, here it is. We have already entered in the Uniswap subdomain
          for you 🤗
        </Title>
        <Collapse>
          <Panel key="huh" header="I don't believe you...">
            <Space direction="vertical">
              <Text>
                Good on ya. Find the subdomain yourself by going to the ENS app
                and searching for Uniswap.eth (their domain). You&apos;ll know
                if you found the correct address if it has almost two billion in
                UNI token.
              </Text>
              <Text>
                Go visit <Text strong>https://app.ens.domains/ </Text>
                and come back with their deployments subdomain. Hint: it is
                called v3deployments.
              </Text>
              <Text>
                Or, click this convenient{" "}
                <a href="https://app.ens.domains/">link</a>...
              </Text>
            </Space>
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
}
