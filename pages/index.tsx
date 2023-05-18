import React from "react";

import SearchBar from "../components/SearchBar";
import Intro from "../components/Intro";
import ContractsDisplay from "../components/ContractsDisplay";
import { Space } from "antd";

const HomePage = () => {
  return (
    <>
      <Space direction="vertical">
        <Intro />
        <SearchBar />
        <ContractsDisplay />
      </Space>
    </>
  );
};

export default HomePage;
