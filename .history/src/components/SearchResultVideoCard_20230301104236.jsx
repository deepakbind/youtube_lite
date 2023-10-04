import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";
const SearchResultVideoCard = ({video}) => {
  return  <Link to={`/video/${video?.videoId}`}>
    <div className="flex flex-col "></div>
  </Link>
  
}

export default SearchResultVideoCard