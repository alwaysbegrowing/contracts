import React, { useEffect, useState } from "react";
import Head from "next/head";

import SearchBar from "../components/SearchBar";
import ContractsPanel from "../components/ContractsPanel";
import ContractInformationPanel from "../components/ContractInformationPanel";
import ContractInteractionPanel from "../components/ContractInteractionPanel";
import AnalyticsAndInsightsPanel from "../components/AnalyticsAndInsightsPanel";
import SettingsPanel from "../components/SettingsPanel";
import { namehash } from "viem";
import { useRecoilState } from "recoil";
import { searchTermState } from "../components/Atoms";

const HomePage = () => {
  const [texts, setTexts] = useState();
  const [searchValue, setSearchValue] = useRecoilState(searchTermState);
  useEffect(() => {
    if (!searchValue) return;
    const fetchEnsText = async () => {
      const nameHash = namehash(searchValue);
      const response = await fetch(`/api/ens?${nameHash}`, { method: "POST" });
      if (response.ok) {
        setTexts((await response.json())?.texts);
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
      <SearchBar onSearch={handleSearch} />
      <ContractsPanel texts={texts} />
      <ContractInformationPanel />
      <ContractInteractionPanel />
      <AnalyticsAndInsightsPanel />
    </>
  );
};

export default HomePage;
