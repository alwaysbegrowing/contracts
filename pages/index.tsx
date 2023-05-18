import React, { useEffect, useState } from "react";
import Head from "next/head";

import SearchBar from "../components/SearchBar";
import ContractsPanel from "../components/ContractsPanel";
import ContractInformationPanel from "../components/ContractInformationPanel";
import ContractInteractionPanel from "../components/ContractInteractionPanel";
import AnalyticsAndInsightsPanel from "../components/AnalyticsAndInsightsPanel";
import { namehash } from "viem";
import { useRecoilState } from "recoil";
import { searchTermState } from "../components/Atoms";
import { Alert, Col, Row, Space, Typography } from "antd";
import Script from "next/script";

const { Title, Paragraph, Text } = Typography;

const HomePage = () => {
  const [texts, setTexts] = useState();
  const [error, setError] = useState<string>();
  const [searchValue, setSearchValue] = useRecoilState(searchTermState);
  useEffect(() => {
    if (!searchValue) return;
    const fetchEnsText = async () => {
      const nameHash = namehash(searchValue);
      const response = await fetch(`/api/ens`, {
        method: "POST",
        body: JSON.stringify({ address: nameHash }),
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
  }, [searchValue]);

  const handleSearch = async (searchValue: any) => {
    setSearchValue(searchValue);
  };
  return (
    <>
      <Head>
        <title>dAppling Tools</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="https://platform.twitter.com/widgets.js" />
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
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              👀{" "}
              <a href="https://twitter.com/Uniswap?ref_src=twsrc%5Etfw">
                @Uniswap
              </a>{" "}
              is using immutable on-chain records of their{" "}
              <a href="https://twitter.com/hashtag/ENS?src=hash&amp;ref_src=twsrc%5Etfw">
                #ENS
              </a>{" "}
              name/subname to point to their official deployment contracts. 💪{" "}
              <a href="https://t.co/yaDpHCukLK">pic.twitter.com/yaDpHCukLK</a>
            </p>
            &mdash; ens.eth (@ensdomains){" "}
            <a href="https://twitter.com/ensdomains/status/1657095674587131904?ref_src=twsrc%5Etfw">
              May 12, 2023
            </a>
          </blockquote>{" "}
          <Paragraph>
            Because of the nature of this being very opinionated, and there not
            a standard yet, if you want to have your contracts show up here, you
            will have to follow the format uniswap used:
            <Space direction="vertical">
              <Text code>key: chainId</Text>
              <Text code>text: comma separated list of contracts</Text>
            </Space>
          </Paragraph>
          <Paragraph>
            Though, if you want to have your contracts show up here, just
            contact us{" "}
            <a href="https://twitter.com/dApplingNetwork">@dApplingNetwork</a>{" "}
            on Twitter.
          </Paragraph>
          <Title level={3}>
            Anyway, here it is. We have already entered in the Uniswap subdomain
            for you 🤗
          </Title>
        </Col>
      </Row>
      <SearchBar onSearch={handleSearch} />
      <div style={{ minHeight: 500 }}>
        {texts && (
          <Row>
            <Col xs={12} md={24} lg={8}>
              <ContractInformationPanel />
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Alert
                message={
                  <a href={`https://app.ens.domains/${searchValue}`}>
                    View {searchValue} on ENS
                  </a>
                }
                type="info"
                showIcon
              />
              <ContractsPanel chains={texts} />
            </Col>
            <Col xs={12} md={24} lg={8}>
              <ContractInteractionPanel />
              <AnalyticsAndInsightsPanel />
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
    </>
  );
};

export default HomePage;
