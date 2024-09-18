const {ethers, upgrades} = require("hardhat");

async function main() {
    const myContractV2 = await ethers.getContractFactory("MyContractV2");
    console.log("Contract is upgrading...");
    await upgrades.upgradeProxy("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9", myContractV2);
    console.log("MyContract upgraded to MyContractV2");
    
}

main();