import React from 'react'

const LeftNavMenuItem = ({text, icon, className, action}) => {
  return <div className={"text-white text-sm cure " + className}>
  <span className='text-xl mr-5'>{text}</span>
  </div>
  
}

export default LeftNavMenuItem