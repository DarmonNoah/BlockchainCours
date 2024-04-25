// import React, { useState, useEffect } from 'react';
// import MariageABI from '../../build/contracts/Mariage.json';
// import { ethers } from 'ethers';

// function InscrireEnfant() {
//   const [contract, setContract] = useState(null);
//   const [account, setAccount] = useState(null);

//   useEffect(() => {
//     async function init() {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const accounts = await provider.listAccounts();
//       setAccount(accounts[0]);

//       const contratMariage = new ethers.Contract(
//         "CONTRAT_MARIAGE_ADDRESS", // Remplacer par l'adresse du contrat déployé
//         MariageABI.abi,
//         signer
//       );
//       setContract(contratMariage);
//     }

//     init();
//   }, []);

//   async function inscrireEnfant() {
//     await contract.inscrireEnfant();
//   }

//   return (
//     <div>
//       <h2>Inscrire un Enfant</h2>
//       {account && <p>Adresse du compte connecté : {account}</p>}
//       <button onClick={inscrireEnfant}>Inscrire un enfant</button>
//     </div>
//   );
// }

// export default InscrireEnfant;