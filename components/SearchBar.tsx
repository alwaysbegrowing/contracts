import React, { useState } from "react";
import { Input, Button, Space, Divider } from "antd";

const SearchBar = ({ onSearch }: { onSearch: any }) => {
  const [searchValue, setSearchValue] = useState("v3deployments.uniswap.eth");
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
          placeholder="Enter ENS name"
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
