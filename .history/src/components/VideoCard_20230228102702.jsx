import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

// import VideoLength from "../shared/videoLength";


const VideoCard = ({ video }) => {
  return <Link to={`/video/${video?.videoId}`}>
   <div className="flex flex-col-mb-8">
   div.relative
   </div>
  </Link>
};

export default VideoCard;