import React from "react";
import { TopCreatorData } from "../../Chart/TopCreatorData";
import LinearProgess from "../LinearProgess";

const TopCreator = () => {
  return (
    <div className="p-2 bg-white rounded-2xl mt-4 min-md:mt-0">
      <div>
        <h2 className="font-bold text-lg text-[var(--blue-color)] mb-3">
          Top Creatord
        </h2>

        <ul className="flex items-center justify-between *:text-lg *:font-semibold *:text-gray-400">
          <li>Name</li>
          <li>Rating</li>
        </ul>
      </div>
      <div className="space-y-4 mt-3">
        {TopCreatorData.map((item, i) => {
          return (
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img src={item.image} alt="" />
                <h3 className="text-sm font-bold text-[var(--blue-color)]">{item.name}</h3>
              </div>
              <div className="w-1/6">
                <LinearProgess completed={item.rating} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCreator;
