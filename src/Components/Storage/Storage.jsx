import React from "react";

import cloud from "/assets/cloud.png";
import LinearProgess from "../LinearProgess";

const Storage = () => {
  return (
    <div className="bg-white p-2 rounded-2xl mt-3 min-md:mt-0">
      <img src={cloud} alt="" className="m-auto" />
      <div className="text-center mt-3">
        <h2 className="text-2xl font-bold">Your Storage</h2>
        <p className="w-[201px] m-auto mt-2 text-gray-400 text-sm">
          Supervise your drive space in the easiest way
        </p>
      </div>
      <div className="mt-8 min-md:mt-13 min-lg:mt-23">
        <div className="flex justify-between mb-2">
          <h2 className="font-bold text-[var(--blue-color)]">25Gb</h2>
          <h2 className="font-bold text-[var(--blue-color)]">50Gb</h2>
        </div>
        <LinearProgess completed={60} />
      </div>
    </div>
  );
};

export default Storage;
