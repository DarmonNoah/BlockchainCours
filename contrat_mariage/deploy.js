async function main() {
    const Mariage = await ethers.getContractFactory("Mariage");
    const mariage = await Mariage.deploy("0x....", "0x...."); // Remplacer par de vraies adresses
    await mariage.deployed();
    console.log("ContratMariage déployé à l'adresse:", mariage.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });  