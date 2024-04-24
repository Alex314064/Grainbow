import { useState } from "react";
import data from "./data";

const FarmerList = ({
  farmers,
  addFarmer,
  updateFarmer,
  deleteFarmer,
  setFarmers,
}) => {
  const defaultFarmer = data.farmer.defaultFarmer;
  const [newFarmer, setNewFarmer] = useState(defaultFarmer);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editFarmerId, setEditFarmerId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newFarmer.name || !newFarmer.address) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    setFarmers([...farmers, { id: farmers.length + 1, ...newFarmer }]);
    setNewFarmer(defaultFarmer);
    setShowForm(false);
    setShowEditForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFarmer({ ...newFarmer, [name]: value });
  };

  const handleDelete = (id) => {
    setFarmers(farmers.filter((farmer) => farmer.id !== id));
  };

  const handleEdit = (id) => {
    const modifiedFarmer = farmers.find((farmer) => farmer.id === id);
    console.log("modifiedFarmer", modifiedFarmer);
    setNewFarmer({
      name: modifiedFarmer.name,
      address: modifiedFarmer.address,
    });
    setShowEditForm(true);
    setEditFarmerId(id);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedFarmers = farmers.map((farmer) =>
      farmer.id === editFarmerId ? { ...farmer, ...newFarmer } : farmer
    );
    setFarmers(updatedFarmers);
    setNewFarmer(defaultFarmer);
    setShowEditForm(false);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setNewFarmer(defaultFarmer);
  };

  return (
    <div>
      <h2>Liste des Agriculteurs</h2>
      <ul>
        {farmers.map((farmer) => (
          <li key={farmer.id}>
            {farmer.name} - {farmer.address}
            <button type="button" onClick={() => handleDelete(farmer.id)}>
              Supprimer
            </button>
            <button type="button" onClick={() => handleEdit(farmer.id)}>
              Modifier
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cacher le formulaire" : "Ajouter un Agriculteur"}
      </button>
      {showForm && (
        <>
          <h3>Ajouter un Agriculteur</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Nom :
                <input
                  type="text"
                  name="name"
                  value={newFarmer.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Adresse :
                <input
                  type="text"
                  name="address"
                  value={newFarmer.address}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </>
      )}
      {showEditForm && (
        <>
          <h3>Modifier un Agriculteur</h3>
          <form onSubmit={handleEditSubmit}>
            <div>
              <label>
                Nom :
                <input
                  type="text"
                  name="name"
                  value={newFarmer.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Adresse :
                <input
                  type="text"
                  name="address"
                  value={newFarmer.address}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Modifier</button>
            <button type="button" onClick={handleCancelEdit}>
              Annuler
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default FarmerList;
