import React from 'react'

import {
    Chart as ChartJs,
    ArcElement,
    Tooltip
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { PieChartData } from '../../Chart/PieChartData'

ChartJs.register(
    ArcElement,
    Tooltip,
)

const PieChart = () => {

    const options = {}

  return (
    <div className='bg-white rounded-2xl p-2'>
        <div className='flex items-center justify-between'>
            <h3 className='text-sm text-[var(--blue-color)] font-bold'>Your Pie Chart</h3>
            <select name="" id="" className='text-sm text-gray-400'>
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
                <option value="Yearly">Yearly</option>
            </select>
        </div>
        <Pie data={PieChartData} options={options} />
    </div>
  )
}

export default PieChart