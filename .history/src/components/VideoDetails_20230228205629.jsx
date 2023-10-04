import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
const [video,setVideo] = useState();
const [relatedVideo, setRelatedVideo] = useState();
const {id} = useParams();
const {setLoading} = useContext(Context);

useEffect(() => {
  document.getElementById("root").classList.add("custom-h");
   fetchDataFromApi();
   fetchRelatedVideo();
},[id]);

const fetchVideoDetails = () => {
  setLoading(true);
  fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
    console.log(res);
    setVideo(res);
    setLoading(false);
  });
};

const fetchRelatedVideo = () => {
  setLoading(true);
  fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
    console.log(res);
    setRelatedVideo(res);
    setLoading(false);
  });
}

  return <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
   <div className="w-full max-w-[1200px] flex flex-col lg:flex-row">
   
   <div className="flex flex-col lg:w-[calc100%-350px] xl:w-[calc100%-400px] px-4 py-3 lg:py-6 overflow-auto">
    <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[490px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
    <ReactPlayer
    url={`https://www.youtube.com/watch?v=${id}`}
     controls
     width="100%"
     height="100%"
     style={{background: "#000000"}}
    />
    </div>
    <div className="text-white font-bold "></div>
   </div>

   </div>
  </div>
  
}

export default VideoDetails