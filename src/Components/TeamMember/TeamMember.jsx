import React from "react";
import { FaPlus } from "react-icons/fa6";
import { TeamMemberData } from "../../Chart/TeamMemberData";

const TeamMember = () => {
  return (
    <div className="p-2 bg-white rounded-2xl">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-[var(--blue-color)] font-bold">Team Members</h2>
          <FaPlus
            className="bg-[#F4F7FE] cursor-pointer text-[var(--blue-color)] p-1 rounded-full"
            size={30}
          />
        </div>
        <div>
          {TeamMemberData.map((item) => {
            return (
              <div className="flex gap-2 space-y-3 shadow-xl p-4 rounded-2xl">
                <img src={item.imgurl} alt="" />
                <div>
                  <h2 className="text-[var(--blue-color)] font-bold">{item.name}</h2>
                  <span className="text-sm text-gray-400">{item.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
