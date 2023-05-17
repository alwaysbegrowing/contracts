import React, { useState } from "react";
import { Input, Button, Space, Divider } from "antd";
import styles from "../styles/SearchBar.module.css";
import { resolveAddress } from "ethers";
import { useEnsResolver } from "wagmi";

const SearchBar = ({ onSearch }: { onSearch: any }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    if (searchValue) {
      onSearch(searchValue);
    }
  };

  return (
    <Divider>
      <Space>
        <Input
          style={{ width: "460px" }}
          id="search-bar"
          placeholder="Enter ENS name or contract address"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
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
