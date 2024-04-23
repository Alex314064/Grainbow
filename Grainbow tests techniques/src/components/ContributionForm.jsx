import { useState } from "react";
import data from "./data";

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
    console.log(contributions);
    console.log(formData);
    setContributions([...contributions, { ...formData }]);
    setFormData(data.contribution.defaultContribution);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div>
      <h2>Ajouter un Contribution</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Agriculteur :
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
            Céréale :
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
            Poids (en kg) :
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ContributionForm;
