import { useState } from "react";
import data from "../MockAPI/data";

const ContributionForm = ({
  contributions,
  setContributions,
  farmers,
  cereals,
}) => {
  const [formData, setFormData] = useState(
    data.contribution.defaultContribution
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setContributions([...contributions, { ...formData }]);
    setFormData(data.contribution.defaultContribution);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Ajouter un apport</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <select
              name="farmer"
              value={formData.farmer}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner un agriculteur</option>
              {farmers.map((farmer) => (
                <option key={farmer.id} value={farmer.name}>
                  {farmer.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <select
              name="cereal"
              value={formData.cereal}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner une céréale</option>
              {cereals.map((cereal) => (
                <option key={cereal.id} value={cereal.designation}>
                  {cereal.designation}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              type="number"
              name="weight"
              placeholder=" Poids en tonnes"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button className="validate-btn" type="submit">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContributionForm;
