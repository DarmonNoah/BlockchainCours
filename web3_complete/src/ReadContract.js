import React, { useState, useEffect } from "react";
import "./ReadContract.css";
import {ajouterEnfant} from "./ajouterEnfant.js";

export function ReadContract({ contractAddress, contract ,signer}) {
  const [children, setChildren] = useState([]);
  const [marry,setMarry] = useState([]);
  const [login,setLogin] = useState();
  const [goTo, setGoTo] = useState(false); 
  const [goTo2, setGoTo2] = useState(false); 

  const getChildren = async () => {
    try {
      const childrenData = await contract.getChildren(0);
      setChildren(childrenData);
    } catch (error) {
      console.error("Error fetching children:", error);
    }
  };

  const getMarry = async () => {
    try {
      const marryData = await contract.getMarry(0);
      setMarry(marryData);
    } catch (error) {
      console.error("Error fetching marry:", error);
    }
  };

  const getLogin = async () => {
    try {
      const loginData = await signer.getAddress();
      setLogin(loginData);
    } catch (error) {
      console.error("Error fetching marry:", error);
    }
  }
  useEffect(() => {
    getChildren();
    getMarry();
    getLogin();
  }, []); 

  
  const handleajouterEnfantClick = () => {
    setGoTo(true);
  };

  const handledeclarerDivorceClick = () => {
    setGoTo2(true);
  };
  
  if (goTo) {
    return <ajouterEnfant contractAddress={contractAddress} contract={contract} signer={signer} />;
  }

  return (
    <div className="container-CM">
      <div className="title-CM"> 
        <div className="connnection-title-CM"> 
          <p>
            Vous êtes connecté au contrat {contractAddress} avec l'adresse de compte {login}
          </p>
        </div>
        <h1>Contrat de Mariage</h1>
      </div>
      <div className="section-CM">
        <div className="container-children-CM">
          <h2>Enfants</h2>
          <ul>
            {children.map((child, index) => (
              <div key={index}>
                <h6>Nom: {child.name}</h6>
                <h6>Nationalité: {child.nationality}</h6>
                <h6>Sexe: {child.gender}</h6>
              </div>
            ))}
          </ul>
        </div>
        <div className="container-marry-CM">
          <h2>Mariés</h2>
          <ul>
            {marry.map((mariage, index) => (
              <div key={index}>
                <h6>Nom: {mariage.name}</h6>
                <h6>Nationalité: {mariage.nationality}</h6>
                <h6>Sexe: {mariage.gender}</h6>
                <h6>Nom: {mariage.name2}</h6>
                <h6>Nationalité: {mariage.nationality2}</h6>
                <h6>Sexe: {mariage.gender2}</h6>
              </div>
            ))}
          </ul>
        </div>
        <div className="container-information-CM">
          <h2>Informations</h2>
          <h6>Nombre d'enfants : {children.length}</h6>
          <h6>Nombre de mariages : {marry.length}</h6>
        </div>
      </div>
      <div className="section2-CM">
      <div className="container-contrat-CM">
        <h2>Ce contrat fait office de justificatif de mariages entre  {marry.length > 0 &&  marry.length < 2? marry[0].name2 : "..."} de nationalité {marry.length > 0 &&  marry.length < 2? marry[0].nationality2 : "..."}</h2>
        <h2>et {marry.length > 0 &&  marry.length < 2? marry[0].name : "..."} de nationalité {marry.length > 0 &&  marry.length < 2? marry[0].nationality : "..."}</h2>
      </div>
      <button className="ajouter-enfant-CM" onClick={handleajouterEnfantClick}>
        Ajouter un enfant
      </button>
      <button className="declarerDivorce-CM" onClick={handledeclarerDivorceClick}>
        declarerDivorcer
      </button>
      </div>
    </div>
  );
}