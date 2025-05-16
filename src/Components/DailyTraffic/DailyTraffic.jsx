import React from 'react'

import { FaCaretUp } from "react-icons/fa";

import {
    Chart as ChartJs,
    BarController,
    BarElement,
    Title,
    Legend,
    Tooltip,
    scales
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { DailyTrafficData } from '../../Chart/DailyTrafficData';

ChartJs.register(
    BarController,
    BarElement,
    Title,
    Tooltip
)

const DailyTraffic = () => {
    const myoptions = {
        stacked : false,
        scales : {
            x : {
                grid : {
                    display : false
                }
            },
            y : {
                display : false
            }
        }
    }
  return (
    <div className='bg-white rounded-2xl p-2'>
        <div className='flex justify-between items-center'>
            <div>
                <h5 className='text-sm text-[#A3AED0]'>Daily Traffic</h5>
                <h2 className='text-3xl font-bold flex gap-1 text-[var(--blue-color)]'>2.579 <span className='text-sm mt-auto text-[#A3AED0] font-normal'>Visitors</span></h2>
            </div>
            <div className='flex items-center text-green-600 text-sm'>
                <FaCaretUp />
                <span>+2.45%</span>
            </div>
        </div>
        <Bar options={myoptions} data={DailyTrafficData} className='mt-7' />
    </div>
  )
}

export default DailyTraffic