import React from "react";

const NeverMissADeal = () => {
  return (
    <div className="flex flex-col gap-4 py-20">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="font-medium text-4xl text-grey700">Never Miss a Deal!</p>
        <p className="text-lg text-gray-500/80">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
      </div>
      <div className="flex items-center w-2xl self-center h-13 ">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500"
          placeholder="Enter your email id"
          type="text"
        />
        <button className="px-12  h-full text-white bg-primary rounded-md rounded-l-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NeverMissADeal;
