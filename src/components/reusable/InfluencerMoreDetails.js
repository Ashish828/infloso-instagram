import React from "react";

const InfluencerMoreDetails = ({ icon, label, value }) => {
  return (
    <div className="bg-white flex items-center rounded-md justify-center px-2 py-1 w-5/12 sm:w-2/7 mb-4">
      {icon}
      <div className="text-center">
        <p className="text-xs">{label}</p>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
};

export default InfluencerMoreDetails;
