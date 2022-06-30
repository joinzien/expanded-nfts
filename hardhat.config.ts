import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig } from "hardhat/config";
import networks from "./networks";
import dotenv from "dotenv";
import "solidity-coverage";

dotenv.config();

const rinkebyBaseUrl = process.env.RINKEBY_URL || "";
const goerliBaseUrl = process.env.GOERLI_URL || "";
const mainnetBaseUrl = process.env.MAINNET_URL || "";

const apiKey = process.env.INFURA_API_KEY || "";

const rinkebyUrl = rinkebyBaseUrl.concat(apiKey);
const goerliUrl = goerliBaseUrl.concat(apiKey);
const mainnetUrl = mainnetBaseUrl.concat(apiKey);

/**
 * Go to https://hardhat.org/config/ to learn more
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 60,
  },
  networks,
  namedAccounts: {
    deployer: 0,
    purchaser: 0,
  },
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
};

export default config;
