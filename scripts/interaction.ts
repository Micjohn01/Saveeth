import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xB7B5569dDac97A7b862E7bf7c3e7D4fAbBF36a47";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x051338974089709e3bDDCD53867Bb76196153814";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction

    const withdrawAmt = ethers.parseUnits("100", 18);
    const balanceBefore = await saveERC20.getContractBalance();
    const withdrawTx = await saveERC20.withdraw(withdrawAmt);
    const balanceAfter = await saveERC20.getContractBalance();

    console.log("balance before withdrawal:::", balanceBefore);

    console.log(withdrawTx);

    await withdrawTx.wait();

    console.log("Balance After withdrawal:::", balanceAfter);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


// Verifying contract "contracts/Web3CXI.sol:Web3CXI" for network lisk-sepolia...
// Successfully verified contract "contracts/Web3CXI.sol:Web3CXI" for network lisk-sepolia:
//   - https://sepolia-blockscout.lisk.com//address/0xB7B5569dDac97A7b862E7bf7c3e7D4fAbBF36a47#code

// Verifying contract "contracts/SaveERC20.sol:SaveERC20" for network lisk-sepolia...
// Successfully verified contract "contracts/SaveERC20.sol:SaveERC20" for network lisk-sepolia:
//   - https://sepolia-blockscout.lisk.com//address/0x051338974089709e3bDDCD53867Bb76196153814#code