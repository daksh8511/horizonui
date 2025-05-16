import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { CheckTableData } from "../../Chart/CheckTableData";

const CheckTable = () => {
  return (
    <div className="bg-white rounded-2xl p-2">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[#1b2559] font-semibold">Check Table</div>
        </div>
        <HiDotsHorizontal
          className="bg-[#F4F7FE] cursor-pointer text-[var(--blue-color)] p-1 rounded-full"
          size={30}
        />
      </div>
      <div className="mt-3">
        <div className="grid grid-cols-4">
          <h3 className="text-[10px] min-md:text-sm font-bold text-[#A3AED0]">NAMES</h3>
          <h3 className="text-[10px] min-md:text-sm font-bold text-[#A3AED0]">PROGRESS</h3>
          <h3 className="text-[10px] min-md:text-sm font-bold text-[#A3AED0]">QUANTITY</h3>
          <h3 className="text-[10px] min-md:text-sm font-bold text-[#A3AED0]">DATE</h3>
        </div>
        <div className="space-y-2 grid grid-cols-4 mt-3">
          <div>
            {CheckTableData.map((item) => {
              return (
                <div className="flex items-center gap-1 overflow-hidden mb-2">
                  <input type="checkbox" />
                  <h2 className="text-[10px] min-md:text-sm font-bold text-[var(--blue-color)]">{item.title}</h2>
                </div>
              );
            })}
          </div>
          <div>
            {CheckTableData.map((item) => {
              return (
                <h2 className="text-[11px] ms-2 min-md:text-sm font-bold mb-2 text-[var(--blue-color)]">{item.progess}%</h2>
              );
            })}
          </div>
          <div>
            {CheckTableData.map((item) => {
              return (
                <h2 className="text-[11px] min-md:text-sm font-bold mb-2 text-[var(--blue-color)]">{item.quantity}</h2>
              );
            })}
          </div>
          <div>
            {CheckTableData.map((item) => {
              return <h2 className="text-[11px] min-md:text-sm font-bold mb-2 text-[var(--blue-color)]">{item.date}</h2>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckTable;
