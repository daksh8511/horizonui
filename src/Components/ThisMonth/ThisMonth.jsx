import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaCaretUp } from "react-icons/fa";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { LineChart } from "../../Chart/ThisMonthData";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const ThisMonth = () => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl p-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-[#F4F7FE] p-2 rounded-2xl text-[#A3AED0]">
          <SlCalender />
          <h3>This Month</h3>
        </div>
        <IoStatsChartSharp
          className="bg-[#F4F7FE] text-[var(--blue-color)] p-1 rounded-full"
          size={30}
        />
      </div>
      <div className="mt-5 min-md:flex">
        <div className="w-5/5 min-md:w-2/5">
          <h2 className="text-3xl font-bold">$37.5K</h2>
          <h6 className="flex gap-1 text-sm text-[#A3AED0]">
            Total Spent{" "}
            <span className="flex items-center text-green-600">
              <FaCaretUp /> +2.45%
            </span>
          </h6>
        </div>
        <div className="w-5/5 min-md:w-3/5">
          <Line options={options} data={LineChart} />
        </div>
      </div>
    </div>
  );
};

export default ThisMonth;
