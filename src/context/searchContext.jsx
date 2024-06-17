import React, { createContext, useState } from "react";
import { api } from '../services/api';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState();
  

  const handleSearch = async (query) => {
    try {
      const response = await api.get(`/search?q=${query}`);
      
      if (response.status === 200 ) {
        setSearchResults(response.data.produto);
        console.log(searchResults)
      } else {
        setSearchResults(null); 
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setSearchResults(null); 
    }
  };

  return (
    <SearchContext.Provider value={{ searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
