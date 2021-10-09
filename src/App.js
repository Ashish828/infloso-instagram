import React from "react";
import InfluencerDetails from "./components/InfluencerDetails";
import InstaCalculator from "./components/InstaCalculator";

function App() {
  return (
    <div className="bg-blue-600 flex justify-center pb-4">
      <div className="mt-6 bg-white w-11/12 rounded-lg shadow-xl max-w-4xl">
        <InstaCalculator />
        <InfluencerDetails />
      </div>
    </div>
  );
}

export default App;
