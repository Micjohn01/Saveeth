import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xB7B5569dDac97A7b862E7bf7c3e7D4fAbBF36a47";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// 0xB7B5569dDac97A7b862E7bf7c3e7D4fAbBF36a47
