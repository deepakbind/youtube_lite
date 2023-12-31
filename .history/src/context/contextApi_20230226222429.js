import React, {createContext,useState,useEffect} from 'react';

import {fetchDataFromApi} from '../utils/api';

export const Context = createContext();


export const AppContext = (props) => {
    const [loading,setLoading] = useState[false];
    const [searchResults,setSearchResults] = useState[false];
    const [selectCategories,setSelectCategories] = useState["New"];
    const [mobileMenu,setMobileMenu] = useState[false];

    useEffect(()=>{
         fetchDataFromApi(selectCategories)
    },[selectCategories]);

     const fetchSelect

    return(
        <Context.Provider 
        value = {{
            loading,
            setLoading,
            searchResults,
            setSelectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu,
        }} >
        {props.children}
        </Context.Provider>
    );
};