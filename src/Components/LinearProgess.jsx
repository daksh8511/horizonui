import React from 'react'

const LinearProgess = ({completed}) => {
    const containerStyles = {
        height: 10,
        width: '100%',
        borderRadius: 50,
        backgroundColor : '#d4d4d4'
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#2B3674',
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  )
}

export default LinearProgess