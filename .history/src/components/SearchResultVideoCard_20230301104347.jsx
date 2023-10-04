import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";
const SearchResultVideoCard = ({video}) => {
  return  <Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4"></div>
  </Link>
  
}

export default SearchResultVideoCard