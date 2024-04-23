import FarmerList from "./components/FarmerList.jsx";
import CerealList from "./components/CerealList.jsx";
import ContributionForm from "./components/ContributionForm.jsx";
import ContributionList from "./components/ContributionList.jsx";
import data from "./components/data";
import SideBar from "./components/SideBar.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const {
    contribution: { defaultContributionList },
    farmer: { defaultFarmerList },
    cereal: { defaultCerealList },
  } = data;
  const [farmers, setFarmers] = useState(defaultFarmerList);
  const [cereals, setCereals] = useState(defaultCerealList);
  const [contributions, setContributions] = useState(defaultContributionList);
  return (
    <div>
      <div className="sidebar_container">
        <SideBar />
      </div>
      <div className="infos_container">
        <h1>Grainbow</h1>
        <FarmerList farmers={farmers} setFarmers={setFarmers} />
        <CerealList cereals={cereals} setCereals={setCereals} />
        <ContributionList
          contributions={contributions}
          setContributions={setContributions}
        />
        <ContributionForm
          contributions={contributions}
          setContributions={setContributions}
          farmers={farmers}
          cereals={cereals}
        />
      </div>
    </div>
  );
}

export default App;
