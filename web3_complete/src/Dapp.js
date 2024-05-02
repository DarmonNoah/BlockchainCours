import React from "react";
import { ethers } from "ethers";
import TokenArtifact from "./ContractDetails.json";
import contractAddress from "./contract-address.json";
import { NoWalletDetected } from "./NoWalletDetected";
import { Home } from "./Home";

export class Dapp extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      Data: undefined, 
      selectedAddress: undefined,
    };

    this.state = this.initialState;
  }
  
  render() 
  {
    let signer = null;
    let provider;
    if (window.ethereum === undefined) { 
      return <NoWalletDetected />;
    } else {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      const accountAddress = signer.getAddress().then((address) => {
        console.log("Address:", address);
      }).catch((error) => {
        console.error("Error getting address:", error);
      });

      const ContractAddress = contractAddress["MariageModule#Mariage"];
      const abi = TokenArtifact.abi;
      const contract = new ethers.Contract(ContractAddress, abi, signer);
      console.log(contract);
      this.ownerOf(contract);
      if (signer){
      return (<Home contract={contract} signer={signer}/>)}
      else {  
      return <NoWalletDetected />;}
    }
  }
  ownerOf = async (contract) => {
    const ownerOf = await contract.ownerOf(0);
    console.log('ownerOf', ownerOf);
  }
  
}
export default Dapp;
