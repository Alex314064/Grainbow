import { useState } from "react";
import data from "../MockAPI/data.jsx";
import CerealForm from "./CerealForm.jsx";

const CerealList = ({ cereals, setCereals }) => {
  const defaultCereal = data.cereal.defaultCereal;
  const [selectedCereal, setSelectedCereal] = useState(defaultCereal);
  const [showForm, setShowForm] = useState(false);

  const [action, setAction] = useState("");

  const handleDelete = (id) => {
    setCereals(cereals.filter((cereal) => cereal.id !== id));
  };

  const handleShow = (id) => {
    if (id) {
      setAction("Modifier");
      const modifiedCereal = cereals.find((cereal) => cereal.id === id);
      setSelectedCereal(modifiedCereal);
      setShowForm(true);
    } else {
      setAction("Ajouter");
      setSelectedCereal(defaultCereal);
      setShowForm(!showForm);
    }
  };

  return (
    <div className="composant-container">
      <h2>Liste des Céréales</h2>
      <ul>
        {cereals.map((cereal) => (
          <div className="list-item" key={cereal.id}>
            <li>{cereal.designation}</li>
            <button
              className="delete-btn"
              type="button"
              onClick={() => handleDelete(cereal.id)}
            >
              Supprimer
            </button>
            <button
              className="modify-btn"
              type="button"
              onClick={() => handleShow(cereal.id)}
            >
              Modifier
            </button>
          </div>
        ))}
      </ul>
      <button className="validate-btn" onClick={() => handleShow()}>
        {showForm ? "Cacher le formulaire" : "Ajouter une Céréale"}
      </button>
      {showForm && (
        <CerealForm
          action={action}
          cereals={cereals}
          setCereals={setCereals}
          setSelectedCereal={setSelectedCereal}
          selectedCereal={selectedCereal}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default CerealList;
