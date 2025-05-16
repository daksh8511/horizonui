import React from "react";
import { NewCheckTableData } from "../../Chart/Tables";

const TableCheckTable = () => {
  return (
    <div className="bg-white rounded-2xl p-2">
      <h2 className="text-2xl font-bold text-[var(--blue-color)] mb-3">
        Check Table
      </h2>
      <hr className="border-gray-300" />
      <ul className="grid grid-cols-4 gap-3 *:text-gray-400 *:font-bold mt-2 text-[10px] *:min-md:text-sm">
        <li>Title</li>
        <li>Percentage</li>
        <li>Total</li>
        <li>Date</li>
      </ul>
      <div className="space-y-4 mt-4">
        {NewCheckTableData.map((item) => {
          return (
            <div className="grid grid-cols-4 gap-3">
              <div className="flex gap-1">
                <input type="checkbox" />
                <h4 className="text-[10px] min-md:text-sm font-bold text-[var(--blue-color)]">
                  {item.title}
                </h4>
              </div>
              <h4 className="text-[10px] min-md:text-sm font-bold text-[var(--blue-color)] ms-2">{item.percentage}%</h4>
              <h4 className="text-[10px] min-md:text-sm font-bold text-[var(--blue-color)] ms-1">{item.total}</h4>
              <h4 className="text-[10px] min-md:text-sm font-bold text-[var(--blue-color)]">{item.date}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableCheckTable;
