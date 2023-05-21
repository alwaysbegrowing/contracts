import React, { useContext, useState } from "react";
import { Input, Button, Space, Divider } from "antd";
import { GlobalContext } from "../pages/_app";

const SearchBar = () => {
  const [localSearchValue, setLocalSearchValue] = useState(
    "v3deployments.uniswap.eth"
  );
  const { setContractState, setSearchTermState } = useContext(GlobalContext);

  const handleSearch = async () => {
    setSearchTermState(localSearchValue);
    setContractState({ name: "", chain: "" });
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
