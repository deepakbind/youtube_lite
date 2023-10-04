import React, {createContext,useState,useEffect} from 'react';

import {fetchDataFromApi} from '../utils/api';

export const Context = createContext();


export const AppContext = (props) => {
    const [loading,setLoading] = useState[false];
    const [searchResults,setSearchResults] = useState[false];
    const [selectCa,setselectCa] = useState[false];
    const [loading,setLoading] = useState[false];
}