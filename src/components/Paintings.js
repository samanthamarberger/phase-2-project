import React, { useState } from "react";
import PaintingCard from "./PaintingCard";

function Paintings({ paintings }) {

    const [search, setSearch] = useState("");

    function handleSearch(e) {
        // console.log(e.target.value);
        setSearch(e.target.value);
    }
    const newArray = paintings.filter((painting) => painting.artist.toLowerCase().includes(search));
    console.log(newArray);

    return (
        <div>
            <div className="painting-page">
                <h1>Paintings Page</h1>
            </div>
            <input onChange={handleSearch}></input>
            <div className="container">
                {newArray.map((painting) => <PaintingCard key={painting.title} painting={painting} />)}
            </div>
        </div>
    );
}

export default Paintings;

//Create a search bar that allows me to search and filter the paintings by artists name 

// Search bar in paintings page

// create a search bar in paintings component
// OnChange using 
// pass it the array of paintings and map the paintings depending on the search 