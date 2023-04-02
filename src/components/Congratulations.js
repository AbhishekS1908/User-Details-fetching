import React from "react";
import GreenCheck from "../assets/big-green-check.png";

const Congratulations = () => {
  return (
    <div className="flex flex-col items-center mt-48">
      <img className="w-36 h-36" src={GreenCheck} alt="" />
      <h1 className="font-bold text-4xl text-gray-700 mt-4 mb-8">Application Submitted</h1>
      <p className="text-xl text-gray-500 font-medium mb-2">Thank you for your interest</p>
      <p className="text-xl font-medium text-gray-500">
        Our review team will review your application and call you for interview
      </p>
    </div>
  );
};

export default Congratulations;
