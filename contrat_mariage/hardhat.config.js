require("@nomicfoundation/hardhat-toolbox");

// Assurez-vous que vos variables de configuration sont définies avant d'exécuter le script
const { vars } = require("hardhat/config");

const INFURA_API_KEY = vars.get("infuraApiKey");
const SEPOLIA_PRIVATE_KEY = vars.get("sepoliaPrivateKey");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};