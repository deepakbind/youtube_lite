import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";


const VideoCard = ({video}) => {
  return(
  <Link to={`/video/${video?.videoId}`}>
   <div className="flex flex-col mb-8">
   <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
   <img  
   className = "h-full w-full object-cover" 
   src={video?.thumbnails?.[0]?.url}  
   />
   {video?.lengthSeconds && (
    <VideoLength time={video?.lengthSeconds}/>
   )}
   </div>
   <div className= "flex text-white mt-3">
   <div className = "flex items-start
   </div>
   </div>
  </Link>
  );
};

export default VideoCard;