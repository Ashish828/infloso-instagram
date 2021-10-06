import React from "react";

const InfluencerMoreDetails = ({ icon, label, value }) => {
  return (
    <div className="bg-white flex items-center rounded-md px-2 py-1 w-32">
      {icon}
      <div className="text-center">
        <p className="text-xs">{label}</p>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
};

export default InfluencerMoreDetails;
