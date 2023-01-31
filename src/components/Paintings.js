import React from "react";
import PaintingCard from "./PaintingCard";

function Paintings({ paintings }) {
    
    return (
        <div>
            <div class="painting-page">
                <h1>Paintings Page</h1>
            </div>
            {paintings.map((painting) => <PaintingCard key={painting.title} painting={painting} />)}
        </div>
    );
}

export default Paintings;