import React from 'react'

const LeftNavMenuItem = ({text, icon, className, action}) => {
  return <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-3 m " + className}>
  <span className='text-xl mr-5'>{text}</span>
  </div>
  
}

export default LeftNavMenuItem