async function main() {
    const Mariage = await ethers.getContractFactory("Mariage");
    const mariage = await Mariage.deploy("0x8cC38bD6E448fFA17458d5D32c6CAf530A09c998", "0x76a40a3F729418dbCc8EFAAac969f2ad416880DC"); // Remplacer par de vraies adresses
    await mariage.deployed();
    console.log("ContratMariage déployé à l'adresse:", mariage.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });  