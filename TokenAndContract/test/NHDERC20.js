const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("NHDERC20", function () {
  let NHDERC20;
  let nHDERC20;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    NHDERC20 = await ethers.getContractFactory("NHDERC20");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    nHDERC20 = await NHDERC20.deploy();
  });

  it("should have correct name, symbol, and total supply", async function () {
    expect(await nHDERC20.name()).to.equal("NHDERC20");
    expect(await nHDERC20.symbol()).to.equal("NHD");
    expect(await nHDERC20.totalSupply()).to.equal(1000000);
  });

  it("should transfer tokens between accounts", async function () {
    await nHDERC20.transfer(addr1.address, 1000);

    expect(await nHDERC20.balanceOf(addr1.address)).to.equal(1000);
    expect(await nHDERC20.balanceOf(owner.address)).to.equal(1000000 - 1000);
  });

  it("Should return the balance of the account", async function () {
    expect(await nHDERC20.balanceOf(owner.address)).to.equal(1000000);

    await nHDERC20.transfer(addr1.address, 1000);

    expect(await nHDERC20.balanceOf(addr1.address)).to.equal(1000);
  });
});