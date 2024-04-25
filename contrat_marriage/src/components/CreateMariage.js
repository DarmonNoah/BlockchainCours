import React, { useState } from 'react';
import Web3 from 'web3';
import MariageContract from './contrat/Mariage.json';

function CreateMariage() {
  const [Marie1, setMarie1Address] = useState('');
  const [Marie2, setMarie2Address] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const mariageContract = new web3.eth.Contract(MariageContract.abi, MariageContract.address);
      await mariageContract.methods.createMariage(Marie1, Marie2).send({ from: accounts[0] });
      setMarie1Address('');
      setMarie2Address('');
      setErrorMessage('');
      console.log('Le mariage a été créé avec succès !');
    } catch (error) {
      setErrorMessage('Une erreur est survenue lors de la création du mariage.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Créer un mariage</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Adresse marié(e) 1 :</label>
          <input
            type="text"
            value={Marie1}
            onChange={(e) => setMarie1Address(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Adresse marié(e) 2 :</label>
          <input
            type="text"
            value={Marie2}
            onChange={(e) => setMarie2Address(e.target.value)}
            required
          />
        </div>
        <button type="submit">Créer le mariage</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default CreateMariage;