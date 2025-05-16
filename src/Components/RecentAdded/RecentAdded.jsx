import React from 'react'

import added1 from "/assets/added/added1.png";
import added2 from "/assets/added/added2.png";
import added3 from "/assets/added/added3.png";

const RecentAdded = () => {
  return (
    <div className="mt-10">
          <div>
            <h2 className="text-[var(--blue-color)] text-2xl font-bold">
              Trending NFTs
            </h2>
          </div>
          <div className="grid min-md:grid-cols-3 mt-3 gap-5">
            <div className="bg-white rounded-2xl p-3">
              <div className="w-full">
                <img src={added1} className="w-full rounded-2xl" alt="" />
              </div>
              <div className="mt-4">
                <h2 className="text-lg text-[var(--blue-color)] font-bold">
                Swipe Circles
                </h2>
                <span className="text-gray-400 font-light text-sm">
                By Peter Will
                </span>
                <h2 className="text-sm mt-4 text-[#4318FF] font-bold">
                  Current Bid : 2.30 ETH
                </h2>
                <button className="bg-[#11047A] text-white px-5 py-1 rounded-full mt-1">
                  Place Bid
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-3">
              <div className="w-full">
                <img src={added2} className="w-full rounded-2xl" alt="" />
              </div>
              <div className="mt-4">
                <h2 className="text-lg text-[var(--blue-color)] font-bold">
                Colorful Heaven
                </h2>
                <span className="text-gray-400 font-light text-sm">
                By Mark Benjamin
                </span>
                <h2 className="text-sm mt-4 text-[#4318FF] font-bold">
                  Current Bid : 1.30 ETH
                </h2>
                <button className="bg-[#11047A] text-white px-5 py-1 rounded-full mt-1">
                  Place Bid
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-3">
              <div className="w-full">
                <img src={added3} className="w-full rounded-2xl" alt="" />
              </div>
              <div className="mt-4">
                <h2 className="text-lg text-[var(--blue-color)] font-bold">
                3D Cubes Art
                </h2>
                <span className="text-gray-400 font-light text-sm">
                By Manny Gates
                </span>
                <h2 className="text-sm mt-4 text-[#4318FF] font-bold">
                  Current Bid : 6.56 ETH
                </h2>
                <button className="bg-[#11047A] text-white px-5 py-1 rounded-full mt-1">
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default RecentAdded