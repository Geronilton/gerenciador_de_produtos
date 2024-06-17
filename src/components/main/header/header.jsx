import React, { useContext, useState } from "react";
import './header.css'
import { SearchContext } from "../../../context/searchContext";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const [query, setQuery] = useState('');
    const { handleSearch } = useContext(SearchContext);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setQuery(e.target.value);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
        navigate('/resultados')
      };

    return(
    <header>
        <form onSubmit={handleSubmit}
         className="formSearch">
            <input className="inputSearch" 
            type="text" name="search" 
            title="Pesquisar"
            placeholder="Pesquisar um Produto" 
            value={query}
            onChange={handleChange}
            ></input>
            <button className="buttonSearch" type="submit">Pesquisar</button>
        </form>
    </header>
    );
};

export default Header;