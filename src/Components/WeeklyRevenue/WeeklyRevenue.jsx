import React from "react";
import { IoStatsChartSharp } from "react-icons/io5";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarController,
  BarElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { WeeklyRevenueData } from "../../Chart/WeeklyRevenueData";

ChartJS.register(BarController, BarElement, LinearScale, PointElement, Tooltip);

const WeeklyRevenue = () => {
  const options = {
    scales: {
      x: {
        stacked: true,
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
        <div className="text-[#1b2559] font-semibold">Weekly Revenue</div>
        <IoStatsChartSharp
          className="bg-[#F4F7FE] text-[var(--blue-color)] p-1 rounded-full"
          size={30}
        />
      </div>
      <Bar options={options} data={WeeklyRevenueData} className="pt-7" />
    </div>
  );
};

export default WeeklyRevenue;
