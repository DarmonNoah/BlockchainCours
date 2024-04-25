import React from 'react';
import './App.css';
import Dapp from './components/Dapp'; // Importez Dapp depuis le bon chemin

function App() {
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
