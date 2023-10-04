import React, {useContext, useState} from 'react'

import { Context } from '../context/contextApi';

import LeftNav from './LeftNav';
const Feed = () => {
  return(
  <div className="flex flex-row h-[calc(100%-56px)]">
  <LeftNav/>
  <div className='grow w-[calc(100%-240px)] h-full overflow-auto bg-black'>
  <div
  </div>
  </div>
);
};

export default Feed;