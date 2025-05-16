import React from "react";
import { DevelopmentTableData } from "../Chart/Tables";
import LinearProgess from "./LinearProgess";

const DevTable = () => {
  return (
    <div className="p-2 bg-white rounded-2xl">
      <h2 className="text-2xl font-bold text-[var(--blue-color)] mb-3">
        Development Table
      </h2>
      <hr className="border-gray-300" />
      <ul className="grid grid-cols-4 gap-3 *:text-gray-400 *:font-bold mt-2 *:text-[10px] *:min-md:text-sm">
        <li>Title</li>
        <li>Devices</li>
        <li>Date</li>
        <li>Percentage</li>
      </ul>
      <div className="space-y-4 mt-4">
        {DevelopmentTableData.map((item) => {
          return (
            <div key={item.id} className="grid grid-cols-4 gap-3">
              <h4 className="text-[10px] min-md:text-sm text-[var(--blue-color)] font-bold">
                {item.title}
              </h4>
              <div>
                {item.image.length == 3 ? (
                  <div className="flex gap-1">
                    <img src={item.image[0]} alt="" />
                    <img src={item.image[1]} alt="" />
                    <img src={item.image[2]} alt="" />
                  </div>
                ) : item.image.length == 2 ? (
                  <div className="flex gap-1">
                    <img src={item.image[0]} alt="" />
                    <img src={item.image[1]} alt="" />
                  </div>
                ) : item.image.length == 1 ? (
                  <div className="flex gap-1">
                    <img src={item.image[0]} alt="" />
                  </div>
                ) : (
                  {}
                )}
              </div>
              <h3 className="text-[10px] min-md:text-sm font-bold text-[var(--blue-color)]">
                {item.date}
              </h3>
              <LinearProgess completed={item.percentage} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevTable;
