export interface Explorer {
  chainName: string;
  explorerName: string;
  baseUrl: string;
  chainId: number;
  currency: string;
  iconUri: string;
  testNet?: boolean;
  imageUrl?: string;
}
export const explorers: Explorer[] = [
  {
    explorerName: "Etherscan",
    imageUrl: "https://etherscan.io/images/logo-ether.svg",
    chainName: "Ethereum",
    baseUrl: "etherscan.io",
    chainId: 1,
    currency: "ETH",
    iconUri: "../assets/etherscan.svg",
  },
  {
    explorerName: "GnosisScan",
    chainName: "Gnosis Chain",
    baseUrl: "gnosisscan.io",
    chainId: 100,
    currency: "GNO",
    iconUri: "../assets/gnosis.svg",
  },
  {
    explorerName: "Etherscan",
    imageUrl: "https://etherscan.io/images/logo-ether.svg",
    chainName: "Ethereum Ropsten",
    baseUrl: "ropsten.etherscan.io",
    chainId: 3,
    testNet: true,
    currency: "ETH",
    iconUri: "../assets/etherscan.svg",
  },
  {
    explorerName: "Etherscan",
    imageUrl: "https://etherscan.io/images/logo-ether.svg",
    chainName: "Ethereum Rinkeby",
    baseUrl: "rinkeby.etherscan.io",
    chainId: 4,
    testNet: true,
    currency: "ETH",
    iconUri: "../assets/etherscan.svg",
  },
  {
    explorerName: "Etherscan",
    imageUrl: "https://etherscan.io/images/logo-ether.svg",
    chainName: "Ethereum Goerli",
    baseUrl: "goerli.etherscan.io",
    chainId: 5,
    testNet: true,
    currency: "ETH",
    iconUri: "../assets/etherscan.svg",
  },
  {
    explorerName: "Etherscan",
    imageUrl: "https://etherscan.io/images/logo-ether.svg",
    chainName: "Ethereum Sepolia",
    baseUrl: "sepolia.etherscan.io",
    chainId: 11155111,
    testNet: true,
    currency: "ETH",
    iconUri: "../assets/etherscan.svg",
  },
  {
    explorerName: "Etherscan",
    imageUrl: "https://etherscan.io/images/logo-ether.svg",
    chainName: "Ethereum Kovan",
    baseUrl: "kovan.etherscan.io",
    chainId: 42,
    testNet: true,
    currency: "ETH",
    iconUri: "../assets/etherscan.svg",
  },
  {
    explorerName: "Optimistic",
    imageUrl: "https://etherscan.io/images/services/logo-Optimism.svg",
    chainName: "Optimism",
    baseUrl: "optimistic.etherscan.io",
    iconUri: "../assets/Optimism.svg",
    chainId: 10,
    currency: "ETH",
  },
  {
    explorerName: "Optimistic",
    imageUrl: "https://etherscan.io/images/services/logo-Optimism.svg",
    chainName: "Optimism Kovan",
    testNet: true,
    baseUrl: "kovan-optimistic.etherscan.io",
    iconUri: "../assets/Optimism.svg",
    chainId: 69,
    currency: "ETH",
  },
  {
    explorerName: "BscScan",
    imageUrl: "https://etherscan.io/images/services/logo-bscscan.svg",
    chainName: "BNB Smart Chain",
    baseUrl: "bscscan.com",
    chainId: 56,
    iconUri: "../assets/bscscan.svg",
    currency: "BNB",
  },
  {
    explorerName: "BscScan",
    imageUrl: "https://etherscan.io/images/services/logo-bscscan.svg",
    chainName: "BNB Smart Chain Testnet",
    testNet: true,
    baseUrl: "testnet.bscscan.com",
    iconUri: "../assets/bscscan.svg",
    chainId: 97,
    currency: "BNB",
  },
  {
    explorerName: "Hooscan",
    imageUrl: "https://etherscan.io/images/services/logo-hoo.svg",
    chainName: "Hoo Smart Chain",
    baseUrl: "hooscan.com",
    iconUri: "../assets/hooscan.svg",
    chainId: 70,
    currency: "HOO",
  },
  {
    explorerName: "polygonscan",
    imageUrl: "https://etherscan.io/images/services/logo-polygonscan.svg",
    chainName: "Polygon",
    baseUrl: "polygonscan.com",
    iconUri: "../assets/polygonscan.svg",
    chainId: 137,
    currency: "MATIC",
  },
  {
    explorerName: "FTMScan",
    imageUrl: "https://etherscan.io/images/services/logo-ftmscan-new.svg",
    chainName: "Fantom",
    baseUrl: "ftmscan.com",
    chainId: 250,
    iconUri: "../assets/ftmscan.svg",
    currency: "FTM",
  },
  {
    explorerName: "FTMScan",
    imageUrl: "https://etherscan.io/images/services/logo-ftmscan-new.svg",
    chainName: "Fantom Testnet",
    testNet: true,
    baseUrl: "testnet.ftmscan.com",
    iconUri: "../assets/ftmscan.svg",
    currency: "FTM",
    chainId: 4002,
  },
  {
    explorerName: "polygonscan",
    imageUrl: "https://etherscan.io/images/services/logo-polygonscan.svg",
    chainName: "Polygon Mumbai",
    testNet: true,
    baseUrl: "polygonscan.com",
    iconUri: "../assets/polygonscan.svg",
    currency: "MATIC",
    chainId: 80001,
  },
  {
    explorerName: "snowtrace",
    imageUrl: "https://etherscan.io/images/services/logo-snowtrace.svg",
    chainName: "Avalanche C-Chain",
    baseUrl: "snowtrace.io",
    iconUri: "../assets/snowtrace.svg",
    chainId: 43114,
    currency: "AVAX",
  },
  {
    explorerName: "snowtrace",
    imageUrl: "https://etherscan.io/images/services/logo-snowtrace.svg",
    chainName: "Avalanche C-Chain Fuji",
    testNet: true,
    baseUrl: "testnet.snowtrace.io",
    iconUri: "../assets/snowtrace.svg",
    currency: "AVAX",
    chainId: 43113,
  },
  {
    explorerName: "BTTCSCAN",
    imageUrl: "https://etherscan.io/images/services/logo-bttcscan.svg",
    chainName: "BitTorrent Chain Donau",
    testNet: true,
    baseUrl: "testnet.bttcscan.com",
    currency: "BTT",
    iconUri: "../assets/bttcscan.svg",
    chainId: 1028,
  },
  {
    explorerName: "BTTCSCAN",
    imageUrl: "https://etherscan.io/images/services/logo-bttcscan.svg",
    chainName: "BitTorrent Chain",
    baseUrl: "bttcscan.com",
    currency: "BTT",
    iconUri: "../assets/bttcscan.svg",
    chainId: 199,
  },
  {
    explorerName: "Aurorascan",
    imageUrl: "https://etherscan.io/images/services/logo-aurora.svg",
    chainName: "Aurora",
    baseUrl: "aurorascan.dev",
    currency: "ETH",
    iconUri: "../assets/aurora.svg",
    chainId: 1313161554,
  },
  {
    explorerName: "Aurorascan",
    imageUrl: "https://etherscan.io/images/services/logo-aurora.svg",
    chainName: "Aurora Testnet",
    testNet: true,
    baseUrl: "testnet.aurorascan.dev",
    iconUri: "../assets/aurora.svg",
    currency: "ETH",
    chainId: 1313161555,
  },
  {
    explorerName: "Celoscan",
    imageUrl: "https://etherscan.io/images/services/logo-celo.svg",
    chainName: "Celo Chain",
    baseUrl: "celoscan.xyz",
    chainId: 42220,
    currency: "CELO",
    iconUri: "../assets/celo.svg",
  },
  {
    explorerName: "Celoscan",
    imageUrl: "https://etherscan.io/images/services/logo-celo.svg",
    chainName: "Celo Alfajores",
    testNet: true,
    baseUrl: "alfajores.celoscan.xyz",
    chainId: 44787,
    iconUri: "../assets/celo.svg",
    currency: "CELO",
  },
  {
    explorerName: "CLVscan",
    imageUrl: "https://etherscan.io/images/services/logo-clvscan.svg",
    chainName: "CLV Chain",
    baseUrl: "clvscan.com",
    iconUri: "../assets/CLVscan.svg",
    chainId: 1024,
    currency: "CLV",
  },
  {
    explorerName: "HecoInfo",
    imageUrl: "https://etherscan.io/images/services/logo-hecochain.svg",
    chainName: "Huobi ECO Chain",
    baseUrl: "hecoinfo.com",
    iconUri: "../assets/hecoinfo.svg",
    currency: "HT",
    chainId: 128,
  },
  {
    explorerName: "HecoInfo",
    imageUrl: "https://etherscan.io/images/services/logo-hecochain.svg",
    chainName: "Huobi ECO Chain Testnet",
    testNet: true,
    baseUrl: "testnet.hecoinfo.com",
    iconUri: "../assets/hecoinfo.svg",
    currency: "htt",
    chainId: 256,
  },
  {
    explorerName: "Arbiscan",
    imageUrl: "https://etherscan.io/images/services/logo-arbitrum.svg",
    chainName: "Arbitrum",
    baseUrl: "arbiscan.io",
    currency: "ETH",
    chainId: 42161,
    iconUri: "../assets/arbitrum.svg",
  },
  {
    explorerName: "Arbiscan",
    imageUrl: "https://etherscan.io/images/services/logo-arbitrum.svg",
    chainName: "Arbitrum Rinkeby",
    testNet: true,
    baseUrl: "testnet.arbiscan.io",
    chainId: 421611,
    iconUri: "../assets/arbitrum.svg",
    currency: "ETH",
  },
  {
    explorerName: "Moonscan",
    imageUrl: "https://etherscan.io/images/services/logo-moonbeam.svg",
    chainName: "Moonbeam",
    baseUrl: "moonbeam.moonscan.io",
    iconUri: "../assets/moonbeam.svg",
    currency: "GLMR",
    chainId: 1284,
  },
  {
    explorerName: "Moonscan",
    imageUrl: "https://moonbase.moonscan.io/images/logo.svg",
    chainName: "Moonbeam Moonbase Alpha",
    testNet: true,
    baseUrl: "moonbase.moonscan.io",
    iconUri: "../assets/moonbase.svg",
    currency: "DEV",
    chainId: 1287,
  },
  {
    explorerName: "Moonscan",
    imageUrl: "https://etherscan.io/images/services/logo-moonriver.svg",
    chainName: "Moonriver",
    baseUrl: "moonriver.moonscan.io",
    iconUri: "../assets/moonriver.svg",
    currency: "MOVR",
    chainId: 1285,
  },
  {
    explorerName: "cronoscan",
    imageUrl: "https://etherscan.io/images/services/logo-cronos.svg",
    chainName: "Cronos",
    baseUrl: "cronoscan.com",
    chainId: 25,
    currency: "TCRO",
    iconUri: "../assets/cronos.svg",
  },
];

export const defaultExplorer = explorers[0];
