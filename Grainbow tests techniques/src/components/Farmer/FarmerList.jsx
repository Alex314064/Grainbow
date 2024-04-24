import { useState } from "react";
import data from "../MockAPI/data";
import FarmerForm from "./FarmerForm";

const FarmerList = ({ farmers, setFarmers }) => {
  const defaultFarmer = data.farmer.defaultFarmer;
  const [showForm, setShowForm] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [action, setAction] = useState("");
  const handleDelete = (id) => {
    setFarmers(farmers.filter((farmer) => farmer.id !== id));
  };
  const handleShow = (id) => {
    if (id) {
      setAction("Modifier");
      const modifiedFarmer = farmers.find((farmer) => farmer.id === id);
      setSelectedFarmer(modifiedFarmer);
      setShowForm(true);
    } else {
      setAction("Ajouter");
      setSelectedFarmer(defaultFarmer);
      setShowForm(!showForm);
    }
  };

  return (
    <div className="composant-container">
      <h2>Liste des Agriculteurs</h2>
      <ul>
        {farmers.map((farmer) => (
          <div className="list-item" key={farmer.id}>
            <li>
              {farmer.name} - {farmer.address}
            </li>

            <button
              className="delete-btn"
              type="button"
              onClick={() => handleDelete(farmer.id)}
            >
              Supprimer
            </button>
            <button
              className="modify-btn"
              type="button"
              onClick={() => handleShow(farmer.id)}
            >
              Modifier
            </button>
          </div>
        ))}
      </ul>
      <button className="validate-btn" onClick={() => handleShow()}>
        {showForm ? "Cacher le formulaire" : "Ajouter un Agriculteur"}
      </button>
      {showForm && (
        <FarmerForm
          action={action}
          farmers={farmers}
          setFarmers={setFarmers}
          setSelectedFarmer={setSelectedFarmer}
          selectedFarmer={selectedFarmer}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default FarmerList;
