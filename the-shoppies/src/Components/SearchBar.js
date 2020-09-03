import React, { useState } from 'react';

const SearchBar = (props) => {

    const [search, setSearch] = useState("");

    const handleChange = event => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <form>
                <label>Movie Title
                    <input type="text" name="search" placeholder = "Search..." value={search} onChange={event => handleChange(event)} />
                </label>
            </form>
        </div>
    )
}

export default SearchBar;