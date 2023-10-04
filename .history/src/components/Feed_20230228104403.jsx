import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
// import VideoCard from "./VideoCard";

const Feed = () => {
 return(
  <div className="flex flex-row h-[calc(100%-56px)]">
  <LeftNav/>
  <div className="grow w-[calc(100%-240px)"></div>
  </div>
  );
};

export default Feed;