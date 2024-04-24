const CerealForm = ({
  action,
  cereals,
  setCereals,
  setSelectedCereal,
  selectedCereal,
  setShowForm,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "Ajouter") {
      setCereals([...cereals, { id: cereals.length + 1, ...selectedCereal }]);
    } else {
      const updatedCereals = cereals.map((cereal) =>
        cereal.id === selectedCereal.id
          ? { ...cereal, ...selectedCereal }
          : cereal
      );
      setCereals(updatedCereals);
    }
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedCereal({ ...selectedCereal, designation: value });
  };
  return (
    <div className="form-container">
      <h3>{action} une Céréale</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              placeholder="Désignation"
              value={selectedCereal.designation}
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
export default CerealForm;
