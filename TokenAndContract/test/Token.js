const { expect } = require("chai");

// ethers.js provides a handy function to get the current time

describe("On s'apprete a tester le deploiement du token", function () {
    it("should send the total to the owner", async function () {
    const [owner] = await ethers.getSigners();
    
    const Token = await ethers. deployContract("Token");
    
    const ownerBalance = await Token.balanceOf(owner.address);
    
    expect(await Token.totalSupply()).to.equal(ownerBalance);
    
    });
});