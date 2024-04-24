import ContributionForm from "./ContributionForm";
import { useState } from "react";

const ContributionList = ({
  contributions,
  setContributions,
  farmers,
  cereals,
}) => {
  const [showForm, setShowForm] = useState(false);
  const handleDelete = (index) => {
    const newContributions = [...contributions];
    newContributions.splice(index, 1);
    setContributions(newContributions);
  };
  return (
    <div>
      <h2>Apports</h2>
      <table>
        <thead>
          <tr>
            <th>Agriculteur</th>
            <th>Céréale</th>
            <th>Poids</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((contribution, index) => (
            <tr key={index}>
              <td>{contribution.farmer}</td>
              <td>{contribution.cereal}</td>
              <td>{contribution.weight} t</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="validate-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cacher le formulaire" : "Ajouter un apport"}
      </button>
      {showForm && (
        <ContributionForm
          contributions={contributions}
          setContributions={setContributions}
          farmers={farmers}
          cereals={cereals}
        />
      )}
    </div>
  );
};

export default ContributionList;
