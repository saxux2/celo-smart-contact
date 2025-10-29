const { ethers, network } = require('hardhat');
(async () => {
  const provider = ethers.provider;
  const addr = '0x95C2d203F18C90A8e451641c159e9BCB4c6b5aAc';
  const [deployer] = await ethers.getSigners();
  const chainId = (await provider.getNetwork()).chainId;
  const code = await provider.getCode(addr);
  const bal = await provider.getBalance(addr);
  console.log('Network name:', network.name);
  console.log('ChainId:', chainId.toString());
  console.log('Deployer:', deployer.address);
  console.log('Code length:', code.length, code === '0x' ? '(empty)' : '(present)');
  console.log('Contract balance (wei):', bal.toString());
})();
