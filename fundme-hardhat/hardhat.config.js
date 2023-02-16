require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-etherscan");

require("hardhat-gas-reporter");
require("dotenv").config();
const Geroli_Private_key = process.env.Geroli_Private_key;
const Geroli_Rpc_Url = process.env.Geroli_Rpc_Url;
const etherscan_apikey = process.env.etherscan_apikey;
const coincapapikey = process.env.coincapapikey;

module.exports = {
  networks: {
    Goerli: {
      url: Geroli_Rpc_Url,
      accounts: [Geroli_Private_key],
      chainId: 5,
      blockconfirmations: 6,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      blockconfirmations: 6,
    },
  },

  etherscan: {
    apiKey: etherscan_apikey,
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
    users: {
      default: 1,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gasreporter.txt",
    nocolor: true,
    currency: "USD",
    tokken: "Matic",
    coinmarketcap: coincapapikey,
  },
  solidity: "0.8.10",
};
