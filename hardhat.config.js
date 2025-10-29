require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: { version: '0.8.20', settings: { optimizer: { enabled: true, runs: 200 } } },
  networks: {
    celo_sepolia: {
      url: process.env.CELO_SEPOLIA_RPC_URL || '',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
