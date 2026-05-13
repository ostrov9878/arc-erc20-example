const hre = require("hardhat");

async function main() {
  console.log("🚀 Деплоим MyToken на Arc Testnet...");

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  
  const name = "Arc Family Token";
  const symbol = "AFT";
  const initialSupply = 1_000_000; // 1 миллион токенов

  const token = await MyToken.deploy(name, symbol, initialSupply);
  await token.waitForDeployment();

  const address = await token.getAddress();
  
  console.log("✅ MyToken успешно задеплоен!");
  console.log(`📍 Адрес контракта: ${address}`);
  console.log(`🔗 Explorer: https://testnet.arcscan.app/address/${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});