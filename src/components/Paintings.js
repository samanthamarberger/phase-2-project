import React from "react";
import PaintingCard from "./PaintingCard";

function Paintings({ paintings }) {
    
    return (
        <div>
            <div className="painting-page">
                <h1>Paintings Page</h1>
            </div>
            <div className="container">
                {paintings.map((painting) => <PaintingCard key={painting.title} painting={painting} />)}
            </div>
        </div>
    );
}

export default Paintings;