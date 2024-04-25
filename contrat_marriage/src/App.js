import React from 'react';
import './App.css';
import Dapp from './components/Dapp'; // Importez Dapp depuis le bon chemin
import { ethers } from "ethers";

function App() {
  let signer = null;
  let provider;
  provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log(provider);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion des Mariages</h1>
        <Dapp />
      </header>
    </div>
  );
}

export default App;
