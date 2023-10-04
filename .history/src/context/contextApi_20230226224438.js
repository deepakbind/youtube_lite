import React, {createContext,useState,useEffect} from 'react';

import {fetchDataFromApi} from '../utils/api';

export const Context = createContext();


export const AppContext = (props) => {
    const [loading,setLoading] = useState[false];
    const [searchResults,setSearchResults] = useState[false];
    const [selectCategory,setSelectCategory] = useState["New"];
    const [mobileMenu,setMobileMenu] = useState[false];

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategory)
    },[selectCategory]);

     const fetchSelectedCategoryData = (query) => {
     setLoading(true)
     fetchDataFromApi(`search/?q=${query}`).then((res) => {
        console.log(res)
        setSearchResults(res)
        setLoading(false)
     })
     }

    return(
        <Context.Provider 
        value = {{
            loading,
            setLoading,
            searchResults,
            setSelectCategory,
            selectCategories,
            mobileMenu,
            setMobileMenu,
        }} >
        {props.children}
        </Context.Provider>
    );
};