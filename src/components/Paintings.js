import React from "react";
import PaintingCard from "./PaintingCard";

function Paintings({ paintings }) {
    
    return (
        <div>
            <h1>Paintings Page</h1>
            {paintings.map((painting) => <PaintingCard key={painting.title} painting={painting} />)}
        </div>
    );
}

export default Paintings;