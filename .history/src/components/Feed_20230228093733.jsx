import React, {useContext, useState} from 'react'

import { Context } from '../context/contextApi';

import LeftNav from './LeftNav';
import VideoCard from
const Feed = () => {
  const {loading, searchResults} = useContext(Context);
  return(
  <div className="flex flex-row h-[calc(100%-56px)]">
  <LeftNav/>
  <div className='grow w-[calc(100%-240px)] h-full overflow-auto bg-black'>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
   {!loading && searchResults.map((item) => {

   })}
  </div>
  </div>
  </div>
);
};

export default Feed;