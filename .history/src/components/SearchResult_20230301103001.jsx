import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";


const SearchResult = () => {
 const [result, setResult] = useState();
 const {searchQuery} = useParams();
 const {setLoading} = useContext();

 useEffect(() => {
  document.getElementById("root").classList.remove("custom-h");
  fetchSearchResults();
 },[searchQuery]);

 const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
 };

  return(
  <div className="flex flex-row h-[calc(100%-56px)]">
  <Le
  </div>
  );
};

export default SearchResult