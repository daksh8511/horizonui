import React from "react";
import { NewComplexTableData } from "../../Chart/Tables";
import LinearProgess from "../LinearProgess";

const NewComplexTable = () => {
  return (
    <div className="bg-white rounded-2xl p-2">
      <h2 className="text-2xl font-bold text-[var(--blue-color)] mb-3">
        Complex Table
      </h2>
      <hr className="border-gray-300" />
      <ul className="grid grid-cols-4 gap-3 *:text-gray-400 *:font-bold mt-2 text-[10px] *:min-md:text-sm">
        <li>Title</li>
        <li>Type</li>
        <li>Date</li>
        <li>Percentage</li>
      </ul>
      <div className="space-y-4 mt-4">
        {NewComplexTableData.map((item) => {
          return (
            <div className="grid grid-cols-4 gap-3">
              <h4 className="text-[10px] min-md:text-sm font-bold text-[var(--blue-color)]">{item.title}</h4>
              <h4
                className={`font-bold text-[10px] min-md:text-sm ${
                  item.type == "Approved"
                    ? "text-green-500"
                    : item.type == "Disable"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {item.type == "Approved"
                  ? "Approved"
                  : item.type == "Disable"
                  ? "Disable"
                  : "Error"}
              </h4>
              <h4 className="font-bold text-[10px] min-md:text-sm text-[var(--blue-color)]">{item.date}</h4>
              <LinearProgess completed={item.percentage} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewComplexTable;
