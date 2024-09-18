const {ethers, upgrades} = require("hardhat");

async function main(){
    const myContract = await ethers.getContractFactory("MyContract");
    console.log("Deploying MyContract !");
    const myContract1 = await upgrades.deployProxy(myContract, [20],{
        initializer: "setValue",
    });

    await myContract1.waitForDeployment();
    console.log("MyContract deployed address", await myContract1.getAddress());
    //0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
}

main();