const ContributionList = ({ contributions, setContributions }) => {
  const handleDelete = (index) => {
    const newContributions = [...contributions];
    newContributions.splice(index, 1);
    setContributions(newContributions);
  };
  return (
    <div>
      <h2>Résultats des Contributions</h2>
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
              <td>{contribution.weight} kg</td>
              <td>
                <button onClick={() => handleDelete(index)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContributionList;
