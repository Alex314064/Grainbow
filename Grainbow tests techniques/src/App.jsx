import React, { useState } from "react";
import FarmerList from "./components/Farmer/FarmerList.jsx";
import CerealList from "./components/Cereals/CerealList.jsx";
import ContributionList from "./components/Contribution/ContributionList.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import "./App.css";
import data from "./components/MockAPI/data.jsx";

function App() {
  const {
    farmer: { defaultFarmerList },
    cereal: { defaultCerealList },
    contribution: { defaultContributionList },
  } = data;

  const [farmers, setFarmers] = useState(defaultFarmerList);
  const [cereals, setCereals] = useState(defaultCerealList);
  const [contributions, setContributions] = useState(defaultContributionList);
  const [selectedComponent, setSelectedComponent] = useState("farmers");

  return (
    <div>
      <div className="sidebar_container">
        <SideBar setSelectedComponent={setSelectedComponent} />
      </div>
      <div className="infos_container">
        <h1>Grainbow tests techniques</h1>
        {selectedComponent === "farmers" && (
          <FarmerList
            farmers={farmers}
            setFarmers={setFarmers}
            defaultFarmerList={defaultFarmerList}
          />
        )}
        {selectedComponent === "cereals" && (
          <CerealList
            cereals={cereals}
            setCereals={setCereals}
            defaultCerealList={defaultCerealList}
          />
        )}
        {selectedComponent === "contributions" && (
          <div className="composant-container">
            <ContributionList
              contributions={contributions}
              setContributions={setContributions}
              defaultContributionList={defaultContributionList}
              farmers={farmers}
              cereals={cereals}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
