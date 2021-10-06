import React from "react";
import { FaSearch } from "react-icons/fa";

const InstaCalculator = () => {
  return (
    <div className="mx-auto text-center">
      <p className="text-indigo-900 text-2xl font-bold mt-5 mb-5">
        Instagram Influencer Earnings Calculator
      </p>
      <div className="flex border-indigo-900 border-2 p-1 w-4/5 rounded mx-auto mb-5">
        <input className="flex-1" type="text" />
        <FaSearch className="text-xl self-baseline" />
      </div>
    </div>
  );
};

export default InstaCalculator;
