# Arc Testnet ERC-20 Example

Simple and clean example of deploying an ERC-20 token on **Arc Testnet** by Circle.

Arc is an EVM-compatible L1 blockchain focused on stablecoins (USDC as gas), tokenized real-world assets (RWA), and institutional finance.

## ✨ Features

- ERC-20 token with OpenZeppelin standards
- Ready for Arc Testnet deployment
- Clean Hardhat project structure
- USDC-native gas payments

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/arc-testnet-erc20-example.git
cd arc-testnet-erc20-example

# Install dependencies
npm install

# Setup environment
cp .env.example .env


##Tech Stack 

Blockchain: Arc Testnet (Circle) — EVM L1, Chain ID: 5042002
Language: Solidity ^0.8.20
Framework: Hardhat
Libraries: OpenZeppelin Contracts v5
Gas Token: USDC (native)
JavaScript Runtime: Node.js + ethers.js
Environment: dotenv

##Contract
MyToken.sol — Standard ERC-20 token with mint functionality (owner-only).Useful LinksOfficial Website: arc.network

Testnet Explorer: testnet.arcscan.app
RPC Endpoint: https://rpc.testnet.arc.network
USDC Faucet: faucet.circle.com

License MIT

