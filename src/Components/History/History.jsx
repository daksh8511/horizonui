import React from "react";
import { HistoryData } from "../../Chart/HistoryData";

import { FaEthereum } from "react-icons/fa6";

const History = () => {
  return (
    <div className="p-2 bg-white rounded-2xl">
      <div>
        <h2 className="font-bold text-lg text-[var(--blue-color)] mb-3">
          History
        </h2>
      </div>
      <div className="space-y-4">
        {HistoryData.map((item) => {
          return (
            <div className="shadow-lg p-2 rounded-2xl flex justify-between">
              <div className="flex items-center gap-2">
                <img className="w-20 rounded-2xl" src={item.image} alt="" />
                <div>
                  <h4 className="text-sm text-[var(--blue-color)] font-bold">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-400">{item.author}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <FaEthereum />
                <span>{item.amt}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
