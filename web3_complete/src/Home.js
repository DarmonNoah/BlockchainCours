import React, { useState } from "react";
import "./Home.css";
import { ReadContract } from "./ReadContract";

export function Home({ contractAddress, contract, signer }) {
  const [goTo, setGoTo] = useState(false); 

  const handleSend = () => {
    setGoTo(true);
  };

  if (goTo) {
    return <ReadContract contractAddress={contractAddress} contract={contract} signer={signer} />;
  }

  return (
    <div>
      <header className="header">
        <p>Contrat Mariage</p>
      </header>
      <div className="sectionHome">
        <div className="containerPresentation">
          <h1>Les contrats de mariages sur la blockchain sont plus sécurisés !</h1>
        </div>
        <div className="containerChoix">
          <button className="buttonChoix" onClick={handleSend}>Voir mon contrat</button>
          <button className="buttonChoix">Créer un nouveau contrat</button>
        </div>
      </div>
      <footer className="footer">
        <p>TP sur la Blockchain</p>
      </footer>
    </div>
  );
}
