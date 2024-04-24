const FarmerForm = ({
  action,
  farmers,
  setFarmers,
  setSelectedFarmer,
  selectedFarmer,
  setShowForm,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "Ajouter") {
      setFarmers([...farmers, { id: farmers.length + 1, ...selectedFarmer }]);
    } else {
      const updatedFarmers = farmers.map((farmer) =>
        farmer.id === selectedFarmer.id
          ? { ...farmer, ...selectedFarmer }
          : farmer
      );
      setFarmers(updatedFarmers);
    }
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setSelectedFarmer({ ...selectedFarmer, [name]: value });
  };
  return (
    <div className="form-container">
      <h3>{action} un Agriculteur</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={selectedFarmer.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="address"
              placeholder="Adresse"
              value={selectedFarmer.address}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button className="validate-btn" type="submit">
            {action}
          </button>
          {action === "Modifier" && (
            <button className="delete-btn" type="cancel">
              Annuler
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default FarmerForm;
