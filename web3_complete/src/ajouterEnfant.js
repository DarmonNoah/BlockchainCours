import React, { useState } from "react";
import "./ajouterEnfant.css";
export function ajouterEnfant({ contractAddress, contract, signer }) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    nationality: "",
    birthdate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await setajouterEnfant(); 
  };

  const setajouterEnfant = async () => {
    try {
        await contract.addChild(0,formData.name,formData.birthdate,formData.gender,formData.nationality);
    } catch (error) {
      console.error("Error fetching marry:", error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="containerForm">
      <label>
        Nom:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="containerInput"
        />
      </label>
      <br />
      <label>
        Genre:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="containerInput"
        />
      </label>
      <br />
      <label>
        Nationalité:
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="containerInput"
        />
      </label>
      <br />
      <label>
        birthdate:
        <input
          type="text"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          className="containerInput"
        />
      </label>
      <br />
      <button type="submit" className="buttonSend">Soumettre</button>
    </form>
  );
}
