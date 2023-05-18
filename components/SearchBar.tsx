import React, { useState } from "react";
import { Input, Button, Space, Divider } from "antd";
import { useRecoilState, useResetRecoilState } from "recoil";
import { contractState, searchTermState } from "./Atoms";

const SearchBar = () => {
  const [localSearchValue, setLocalSearchValue] = useState(
    "v3deployments.uniswap.eth"
  );
  const [, setSearchValue] = useRecoilState(searchTermState);
  const resetContract = useResetRecoilState(contractState);
  const handleSearch = async () => {
    setSearchValue(localSearchValue);
    resetContract()
  };

  return (
    <Divider>
      <Space>
        <Input
          style={{ width: "460px" }}
          id="search-bar"
          placeholder="Enter ENS name"
          value={localSearchValue}
          onChange={(e) => setLocalSearchValue(e.target.value)}
          onPressEnter={handleSearch}
        />
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Space>
    </Divider>
  );
};

export default SearchBar;
