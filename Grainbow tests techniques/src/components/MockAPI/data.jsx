const data = {
  farmer: {
    defaultFarmerList: [
      { id: 1, name: "Jean Dupont", address: "123 Rue de la Ferme" },
      { id: 2, name: "Marie Martin", address: "456 Avenue des Champs" },
    ],
    defaultFarmer: { name: "", address: "" },
  },
  cereal: {
    defaultCerealList: [
      { id: 1, designation: "Blé" },
      { id: 2, designation: "Maïs" },
      { id: 3, designation: "Riz" },
    ],
    defaultCereal: { designation: "" },
  },
  contribution: {
    defaultContributionList: [
      {
        farmer: "Jean Dupont",
        cereal: "Blé",
        weight: 10,
      },
      {
        farmer: "Jean Dupont",
        cereal: "Maïs",
        weight: 15,
      },
      {
        farmer: "Marie Martin",
        cereal: "Riz",
        weight: 20,
      },
      {
        farmer: "Marie Martin",
        cereal: "Blé",
        weight: 12,
      },
      {
        farmer: "Marie Martin",
        cereal: "Maïs",
        weight: 18,
      },
    ],
    defaultContribution: { farmer: "", cereal: "", weight: "" },
  },
};

export default data;
