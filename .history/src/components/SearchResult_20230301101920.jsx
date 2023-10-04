import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";


const SearchResult = () => {
 const [result, setResult] = useState();
 const {searchQuery} =

  return<div>SearchResult</div>

}

export default SearchResult