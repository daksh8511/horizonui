import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { ComplexTableData } from "../../Chart/ComplexTableData";
import LinearProgess from "../LinearProgess";

const ComplexTable = () => {
  return (
    <div className="bg-white rounded-2xl p-2">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[#1b2559] font-semibold">Complex Table</div>
        </div>
        <HiDotsHorizontal
          className="bg-[#F4F7FE] cursor-pointer text-[var(--blue-color)] p-1 rounded-full"
          size={30}
        />
      </div>
      <div className="mt-3">
        <div className="grid grid-cols-4 border-b border-gray-300 pb-2">
          <h3 className="text-sm font-bold text-[#A3AED0]">NAMES</h3>
          <h3 className="text-sm font-bold text-[#A3AED0]">STATUS</h3>
          <h3 className="text-sm font-bold text-[#A3AED0]">DATE</h3>
          <h3 className="text-sm font-bold text-[#A3AED0]">PROGRESS</h3>
        </div>
        <div className="mt-3">
          {ComplexTableData.map((item) => {
            return (
              <div className="grid grid-cols-4 space-y-4">
                <h4 className="text-[var(--blue-color)] font-bold text-sm">{item.name}</h4>
                <h4 className={`${item.status == "Approved" ? 'text-green-600' : item.status == "Error" ? 'text-yellow-400' : 'text-red-600'} font-bold text-sm`}>{item.status == 'Approved' ? 'Approved' : item.status == "Error" ? 'Error' : 'Disable'}</h4>
                <h4 className="text-[var(--blue-color)] font-bold text-sm">{item.date}</h4>
                <h4><LinearProgess completed={item.progress} /></h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComplexTable;
