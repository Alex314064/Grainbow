import { useState } from "react";
import data from "./data.jsx";

const CerealList = ({
  cereals,
  addCereal,
  updateCereal,
  deleteCereal,
  setCereals,
}) => {
  const defaultCereal = data.cereal.defaultCereal;
  const [newCereal, setNewCereal] = useState(defaultCereal);
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editCerealId, setEditCerealId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCereal.designation) {
      alert("Veuillez remplir le champ désignation");
      return;
    }
    setCereals([...cereals, { id: cereals.length + 1, ...newCereal }]);
    setNewCereal(defaultCereal);
    setShowForm(false);
    setShowEditForm(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setNewCereal({ ...newCereal, designation: value });
  };

  const handleDelete = (id) => {
    setCereals(cereals.filter((cereal) => cereal.id !== id));
  };

  const handleEdit = (id) => {
    const modifiedCereal = cereals.find((cereal) => cereal.id === id);
    console.log("modifiedCereal", modifiedCereal);
    setNewCereal({ ...modifiedCereal });
    setShowEditForm(true);
    setEditCerealId(id);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedCereals = cereals.map((cereal) =>
      cereal.id === editCerealId ? { ...cereal, ...newCereal } : cereal
    );
    setCereals(updatedCereals);
    setNewCereal(defaultCereal);
    setShowEditForm(false);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setNewCereal(defaultCereal);
  };

  return (
    <div>
      <h2>Liste des Céréales</h2>
      <ul>
        {cereals.map((cereal) => (
          <li key={cereal.id}>
            {cereal.designation}
            <button type="button" onClick={() => handleDelete(cereal.id)}>
              Supprimer
            </button>
            <button type="button" onClick={() => handleEdit(cereal.id)}>
              Modifier
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cacher le formulaire" : "Ajouter une Céréale"}
      </button>
      {showForm && (
        <>
          <h3>Ajouter une Céréale</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Désignation :
                <input
                  type="text"
                  value={newCereal.designation}
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
          <h3>Modifier une Céréale</h3>
          <form onSubmit={handleEditSubmit}>
            <div>
              <label>
                Désignation :
                <input
                  type="text"
                  value={newCereal.designation}
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

export default CerealList;
