const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const MariageModule = buildModule("MariageModule", (m) => {
  const Mariage = m.contract("Mariage", ["0x2ea018e72Fa373dD48DF581C0f6466fA79ddFde2" , "0x8cC38bD6E448fFA17458d5D32c6CAf530A09c998"]);

  return { Mariage };
});

module.exports = MariageModule;