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
   fetchDataFromApi();

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
  fetchDataFromApi(`video/relate-conte/?id=${id}`).then((res) => {
    console.log(res);
    setRelatedVideo(res);
    setLoading(false);
  });
}

  return <div>VideoDetails</div>
  
}

export default VideoDetails