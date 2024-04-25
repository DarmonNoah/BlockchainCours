// import React, { useState, useEffect } from 'react';
// import MariageABI from '../../build/contracts/Mariage.json';
// import { ethers } from 'ethers';

// function Divorcer() {
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

//   async function divorcer() {
//     await contract.divorcer("NOUVELLE_ADRESSE_CONJOINT");
//   }

//   return (
//     <div>
//       <h2>Divorcer</h2>
//       {account && <p>Adresse du compte connecté : {account}</p>}
//       <button onClick={divorcer}>Divorcer</button>
//     </div>
//   );
// }

// export default Divorcer;