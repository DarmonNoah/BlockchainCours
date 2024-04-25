describe("On s'apprete a tester le deploiement du token", function () {
    it("Should send the total to the owner", async function () {

        const Mariage = await ethers.deployContract("Mariage", ["0x8cC38bD6E448fFA17458d5D32c6CAf530A09c998" , "0x76a40a3F729418dbCc8EFAAac969f2ad416880DC"]);

        const marie2 = await Mariage.getMarie2();
        const marie1 = await Mariage.getMarie1();

        expect(await Mariage.leConjoint(marie2)).to.equal(marie1);
    });
});