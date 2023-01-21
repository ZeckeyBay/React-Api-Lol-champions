import React from "react";

const SearchBar =({value}) => {
    return(
        <div className="search-container">
            <input className="search-bar" type="text" placeholder="Enter a champion name..." 
            onChange={({value})=> ({value}.target.value)}></input>
        </div>
    )
}

export default SearchBar;