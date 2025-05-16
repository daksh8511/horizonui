import React from "react";
import styled from "styled-components";
import Title from "../../Components/Title";

import project from "/assets/row/project.png";
import earn from "/assets/row/earn.png";
import spend from "/assets/row/spend.png";
import task from "/assets/row/task.png";
import ThisMonth from "../../Components/ThisMonth/ThisMonth";
import WeeklyRevenue from "../../Components/WeeklyRevenue/WeeklyRevenue";
import CheckTable from "../../Components/CheckTable/CheckTable";
import DailyTraffic from "../../Components/DailyTraffic/DailyTraffic";
import PieChart from "../../Components/PieChart/PieChart";
import ComplexTable from "../../Components/ComplexTable/ComplexTable";
import Task from "../../Components/Task/Task";
import Calender from "../../Components/Calender/Calender";
import TeamMember from "../../Components/TeamMember/TeamMember";
import Safety from "../../Components/Safety/Safety";
import Starbuck from "../../Components/Startbuck/Starbuck";

const Dashborad = () => {
  return (
    <Wrapper>
      <div>
        <span>Home / Dashboard</span>
        <Title mytitle="Main Dashboard" />
      </div>
      <div className="box grid grid-cols-1 min-md:grid-cols-3 min-lg:grid-cols-6 gap-3">
        <div className="mini_box flex items-center gap-3 bg-white rounded-2xl p-4">
          <img src={earn} alt="" />
          <div>
            <h5 className="text-sm text-gray-">Earnings</h5>
            <h2 className="text-xl font-bold">$350.4</h2>
          </div>
        </div>
        <div className="mini_box flex items-center gap-3 bg-white rounded-2xl p-4">
          <img src={spend} alt="" />
          <div>
            <h5 className="text-sm text-gray-">Spend</h5>
            <h2 className="text-xl font-bold">$642.3</h2>
          </div>
        </div>
        <div className="mini_box bg-white rounded-2xl p-4">
          <div>
            <h5 className="text-sm text-gray-">Sales</h5>
            <h2 className="text-2xl font-bold">$574.34</h2>
            <h6 className="text-[12px]">
              <span className="text-green-600">+23%</span> since last month
            </h6>
          </div>
        </div>
        <div className="mini_box items-center  bg-white rounded-2xl p-4">
          <div>
            <h5 className="text-sm text-gray-">Your Balance</h5>
            <h2 className="text-2xl font-bold">$1000</h2>
          </div>
        </div>
        <div className="mini_box flex items-center gap-3 bg-white rounded-2xl p-4">
          <img src={task} alt="" />
          <div>
            <h5 className="text-sm text-gray-">New Task</h5>
            <h2 className="text-2xl font-bold">154</h2>
          </div>
        </div>
        <div className="mini_box flex items-center gap-3 bg-white rounded-2xl p-4">
          <img src={project} alt="" />
          <div>
            <h5 className="text-sm text-gray-">Total Project</h5>
            <h2 className="text-2xl font-bold">2935</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3 mt-3">
        <ThisMonth />
        <WeeklyRevenue />
      </div>
      <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3 mt-3">
        <CheckTable />
        <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3">
          <DailyTraffic />
          <PieChart />
        </div>
      </div>
      <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3 mt-3">
        <ComplexTable />
        <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3">
          <Task />
          <Calender />
        </div>
      </div>
      <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3 mt-3">
        <TeamMember />
        <div className="grid grid-cols-1 min-md:grid-cols-2 gap-3">
          <Safety />
          <Starbuck />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashborad;

const Wrapper = styled.section`
  background: #f4f7fe;
  padding: 16px;

  .box .mini_box div h5 {
    color: #a3aed0;
  }
`;
