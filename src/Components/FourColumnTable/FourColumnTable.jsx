import React from "react";
import { FourColumnData } from "../../Chart/Tables";

const FourColumnTable = () => {
  return (
    <div className="p-2 rounded-2xl bg-white">
      <h2 className="text-2xl font-bold text-[var(--blue-color)] mb-3">
        4-Column Table
      </h2>
      <hr className="border-gray-300" />
      <ul className="grid grid-cols-4 gap-3 *:text-gray-400 *:font-bold mt-2 text-[10px] min-md:text-sm">
        <li>Title</li>
        <li>Percentage</li>
        <li>Total</li>
        <li>Date</li>
      </ul>
      <div className="space-y-4 mt-4">
        {FourColumnData.map((item) => {
          return (
            <div className="grid grid-cols-4 gap-3">
              <h4 className="font-bold text-[10px] min-md:text-sm text-[var(--blue-color)]">
                {item.title}
              </h4>
              <h4 className="font-bold text-[10px] min-md:text-sm text-[var(--blue-color)]">
                {item.percentage}
              </h4>
              <h4 className="font-bold text-[10px] min-md:text-sm text-[var(--blue-color)]">
                {item.total}
              </h4>
              <h4 className="font-bold text-[10px] min-md:text-sm text-[var(--blue-color)]">
                {item.date}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourColumnTable;
