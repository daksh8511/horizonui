import React from 'react'

import ap1 from '/assets/all_projects/ap1.png'
import ap2 from '/assets/all_projects/ap2.png'
import ap3 from '/assets/all_projects/ap3.png'

const AllProject = () => {
  const allProjects = [
    {
       id : 1,
       title : "Technology behind the Blockchain",
       image : ap1
    },
    {
      id : 2,
      title : "Greatest way to a good Economy",
      image : ap2
   },
   {
    id : 3,
    title : "Most essential tips for Burnout",
    image : ap3
 },
  ]
  return (
    <div className='p-2 bg-white rounded-2xl'>
      <h2 className='font-bold text-lg text-[var(--blue-color)]'>All Projects</h2>
      <p className='text-sm text-gray-400 my-3'>Here you can find more details about your projects. Keep you user engaged by providing meaningful information.</p>

      <div className='space-y-4 mt-3'>
        {
          allProjects.map((item) => {
            return(
              <div className='flex gap-3 items-center hover:shadow-2xl p-2 duration-300 rounded-2xl'>
                <img className='rounded-2xl' src={item.image} alt="" />
                <div>
                  <h2 className='text-[var(--blue-color)] font-semibold'>{item.title}</h2>
                  <span className='text-gray-400 font-semibold text-sm'>Projects #{item.id}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProject