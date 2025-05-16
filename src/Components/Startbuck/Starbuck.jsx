import React from 'react'
import starbuck from '/assets/starbuck.png'
import { MdFastfood } from "react-icons/md";

const Starbuck = () => {
  return (
    <div className='bg-white rounded-2xl p-2'>
        <img src={starbuck} alt="" />

        <div className='mt-25'>
            <h2 className='text-2xl font-bold text-[var(--blue-color)]'>Starbucks</h2>
            <span className='flex items-center gap-1 text-gray-400'>
                <MdFastfood />
                10% cashback & off
            </span>
        </div>
    </div>
  )
}

export default Starbuck

