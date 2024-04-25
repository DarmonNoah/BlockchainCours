import React from "react";

// We'll use ethers to interact with the Ethereum network and our contract
import { ethers } from "ethers";

// We import the contract's artifacts and address here, as we are going to be
// using them with ethers
import TokenArtifact from "../contracts/Token.json";
import contractAddress from "../contracts/contract-address.json";

// All the logic of this dapp is contained in the Dapp component.
// These other components are just presentational ones: they don't have any
// logic. They just render HTML.
import { NoWalletDetected } from "./NoWalletDetected";
import { ConnectWallet } from "./ConnectWallet";
import { Loading } from "./Loading";
import { Transfer } from "./Transfer";
import { TransactionErrorMessage } from "./TransactionErrorMessage";
import { WaitingForTransactionMessage } from "./WaitingForTransactionMessage";
import { NoTokensMessage } from "./NoTokensMessage";
import LireContrat from "./LireContrat";

export class Dapp extends React.Component {
  constructor(props) {
    super(props);

    // We store multiple things in Dapp's state.
    // You don't need to follow this pattern, but it's an useful example.
    this.initialState = {
      // The info of the token (i.e. It's Name and symbol)
      
      // The user's address and balance
      selectedAddress: undefined,
    };

    this.state = this.initialState;
  }

  render() {
    
    // Ethereum wallets inject the window.ethereum object. If it hasn't been
    // injected, we instruct the user to install a wallet.
    if (window.ethereum === undefined) {
      return <NoWalletDetected />;
    }
    let signer = null;
    let provider;
    provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    signer = provider.getSigner();
    console.log(signer);
    const accountAddress = signer.getAddress().then((address) => {
      console.log("Address:", address);
    }).catch((error) => {
      console.error("Error getting address:", error);
    });
    const adressC = contractAddress["MariageModule#Mariage"];
    const contract = new ethers.Contract(adressC, TokenArtifact.abi, signer);
      console.log(contract);
    this.test(contract);
    return(<LireContrat/>)
    
  }
  
  test = async (contract) => {
    const test = await contract.getMarie1();
    console.log('marie1', test);
  }

}