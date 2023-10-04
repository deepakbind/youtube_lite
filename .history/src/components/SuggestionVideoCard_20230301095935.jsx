import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import VideoLength from "../shared/videoLength";
 const SuggestionVideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
        <div className="flex mb-3">
            <div className="relative h-24 lg:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px rounded-xl bg-slate-800] overflow-hidden">
                <img
                    className="h-full w-full object-cover"
                    src={video?.thumbnails[0]?.url}
                />
                {video?.lengthSeconds && (
                    <VideoLength time={video?.lengthSeconds} />
                )}
            </div>
           
        </div>
    </Link>
  );
  
};

export default SuggestionVideoCard;