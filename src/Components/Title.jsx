import React from 'react'

const Title = ({mytitle}) => {
  return (
    <div>
        <h2 className='font-bold text-[var(--blue-color)] text-3xl my-3'>{mytitle}</h2>
    </div>
  )
}

export default Title