import React from "react";

import trend1 from "/assets/trending/trend1.png";
import trend2 from "/assets/trending/trend2.png";
import trend3 from "/assets/trending/trend3.png";

const TrendingNft = () => {
  return (
    <div className="mt-10">
      <div className="min-md:flex min-md:items-center min-md:justify-between">
        <h2 className="text-[var(--blue-color)] text-2xl font-bold">
          Trending NFTs
        </h2>
        <ul className="flex items-center gap-7 *:text-[#4318FF] *:cursor-pointer">
          <li className="bg-white p-2 rounded-2xl">Art</li>
          <li>Music</li>
          <li>Collections</li>
          <li>Sports</li>
        </ul>
      </div>
      <div className="min-md:grid min-md:grid-cols-3 mt-3 gap-5 space-y-4 min-md:space-y-0 min-lg:space-y-0">
        <div className="bg-white rounded-2xl p-3">
          <div className="w-full">
            <img src={trend1} className="w-full rounded-2xl" alt="" />
          </div>
          <div className="mt-4">
            <h2 className="text-lg text-[var(--blue-color)] font-bold">
              Abstract Colors
            </h2>
            <span className="text-gray-400 font-light text-sm">
              By Esthera Jackson
            </span>
            <h2 className="text-sm mt-4 text-[#4318FF] font-bold">
              Current Bid : 0.91 ETH
            </h2>
            <button className="bg-[#11047A] text-white px-5 py-1 rounded-full mt-1">
              Place Bid
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-3">
          <div className="w-full">
            <img src={trend2} className="w-full rounded-2xl" alt="" />
          </div>
          <div className="mt-4">
            <h2 className="text-lg text-[var(--blue-color)] font-bold">
              ETH AI Brain
            </h2>
            <span className="text-gray-400 font-light text-sm">
              By Nick Wilson
            </span>
            <h2 className="text-sm mt-4 text-[#4318FF] font-bold">
              Current Bid : 2.82 ETH
            </h2>
            <button className="bg-[#11047A] text-white px-5 py-1 rounded-full mt-1">
              Place Bid
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-3">
          <div className="w-full">
            <img src={trend3} className="w-full rounded-2xl" alt="" />
          </div>
          <div className="mt-4">
            <h2 className="text-lg text-[var(--blue-color)] font-bold">
              Mesh Gradients
            </h2>
            <span className="text-gray-400 font-light text-sm">
              By Will Smith
            </span>
            <h2 className="text-sm mt-4 text-[#4318FF] font-bold">
              Current Bid : 0.56 ETH
            </h2>
            <button className="bg-[#11047A] text-white px-5 py-1 rounded-full mt-1">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNft;
