import React from "react";
import { FaSearch } from "react-icons/fa";

const InstaCalculator = () => {
  return (
    <div className="mx-auto text-center flex justify-evenly">
      <div>
        <img
          className="hidden md:block md:max-w-sm lg:max-w-lg"
          src="/Insta-calc-image.png"
          alt="Guy using mobile"
        />
      </div>
      <div className="mx-auto my-auto">
        <p className="text-indigo-900 text-2xl font-bold mt-5 mb-5 max-w-md lg:text-3xl">
          Instagram Influencer Earnings Calculator
        </p>
        <div className="flex border-indigo-900 border-2 p-1 w-4/5 rounded mx-auto mb-5 max-w-xs">
          <input className="flex-1" type="text" />
          <FaSearch className="text-xl self-baseline" />
        </div>
      </div>
    </div>
  );
};

export default InstaCalculator;
